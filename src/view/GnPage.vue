<template>
  <section class="gn-page" :class="{ 'is-chatting': messages.length }">
    <div class="chat-shell">
      <div v-if="!messages.length" class="chat-start">
        <h1>我們該從哪裡開始？</h1>
        <div class="composer-wrap">
          <div v-if="pendingImages.length" class="preview-strip">
            <div
              v-for="(image, index) in pendingImages"
              :key="image.id"
              class="preview-item"
            >
              <img :src="image.url" :alt="image.name">
              <button type="button" @click="removePendingImage(index)" aria-label="移除圖片">
                x
              </button>
            </div>
          </div>

          <form class="composer-bar" @submit.prevent="sendMessage">
            <button
              type="button"
              class="icon-button upload-button"
              aria-label="上傳圖片"
              @click="openFilePicker"
            >
              <Plus :size="23" />
            </button>

            <input
              v-model="messageText"
              class="message-input"
              type="text"
              placeholder="想問什麼都可以"
              @keydown.enter.prevent="sendMessage"
            >

            <div class="composer-mode">
              <Sparkles :size="14" />
              <span>Instant</span>
            </div>

            <button
              type="submit"
              class="send-button"
              :disabled="!canSend"
              aria-label="送出訊息"
            >
              <ArrowUp :size="18" :stroke-width="3" />
            </button>
          </form>

          <div class="quick-actions">
            <button type="button" @click="useSuggestion('幫我依照上傳的空間照片建立室內設計圖像')">
              <Image :size="15" />
              <span>建立圖像</span>
            </button>
            <button type="button" @click="useSuggestion('我想編寫或調整剛剛上傳的設計')">
              <Wand2 :size="15" />
              <span>編寫或編輯</span>
            </button>
            <button type="button" @click="useSuggestion('幫我查室內設計相關資料')">
              <Search :size="15" />
              <span>查資料</span>
            </button>
          </div>
        </div>
      </div>

      <div v-else class="chat-room">
        <div ref="messageList" class="message-list">
          <article
            v-for="message in messages"
            :key="message.id"
            class="message-row"
            :class="message.sender"
          >
            <div class="message-bubble">
              <p v-if="message.text">{{ message.text }}</p>

              <div v-if="message.images.length" class="message-images">
                <img
                  v-for="image in message.images"
                  :key="image.id"
                  :src="image.url"
                  :alt="image.name"
                  @load="queueScrollToBottom"
                />
              </div>
            </div>

            <div v-if="message.sender === 'assistant'" class="assistant-tools">
              <button type="button" aria-label="複製">
                <Copy :size="17" />
              </button>
              <button type="button" aria-label="喜歡">
                <ThumbsUp :size="17" />
              </button>
              <button type="button" aria-label="不喜歡">
                <ThumbsDown :size="17" />
              </button>
              <button type="button" aria-label="重新產生">
                <RefreshCw :size="17" />
              </button>
              <button type="button" aria-label="更多">
                <MoreHorizontal :size="18" />
              </button>
            </div>
          </article>
        </div>

        <div class="composer-dock">
          <div class="composer-wrap">
            <div v-if="pendingImages.length" class="preview-strip">
              <div
                v-for="(image, index) in pendingImages"
                :key="image.id"
                class="preview-item"
              >
                <img :src="image.url" :alt="image.name">
                <button type="button" @click="removePendingImage(index)" aria-label="移除圖片">
                  x
                </button>
              </div>
            </div>

            <form class="composer-bar" @submit.prevent="sendMessage">
              <button
                type="button"
                class="icon-button upload-button"
                aria-label="上傳圖片"
                @click="openFilePicker"
              >
                <Plus :size="23" />
              </button>

              <input
                v-model="messageText"
                class="message-input"
                type="text"
                placeholder="想問什麼都可以"
                @keydown.enter.prevent="sendMessage"
              >

              <div class="composer-mode">
                <Sparkles :size="14" />
                <span>Instant</span>
              </div>

              <button
                type="submit"
                class="send-button"
                :disabled="!canSend"
                aria-label="送出訊息"
              >
                <ArrowUp :size="18" :stroke-width="3" />
              </button>
            </form>
          </div>
          <p class="chat-note">AI 回覆區已先保留，之後可接上 API 資料。</p>
        </div>
      </div>
    </div>

    <input
      ref="fileInput"
      class="file-input"
      type="file"
      accept="image/*"
      multiple
      @change="handleImageUpload"
    />
  </section>
</template>

<script>
import { nextTick } from 'vue'
import {
  ArrowUp,
  Copy,
  Image,
  MoreHorizontal,
  Plus,
  RefreshCw,
  Search,
  Sparkles,
  ThumbsDown,
  ThumbsUp,
  Wand2
} from 'lucide-vue-next'

export default {
  name: 'GnPage',
  components: {
    ArrowUp,
    Copy,
    Image,
    MoreHorizontal,
    Plus,
    RefreshCw,
    Search,
    Sparkles,
    ThumbsDown,
    ThumbsUp,
    Wand2
  },
  data() {
    return {
      messageText: '',
      pendingImages: [],
      messages: []
    }
  },
  computed: {
    canSend() {
      return this.messageText.trim().length > 0 || this.pendingImages.length > 0
    }
  },
  watch: {
    messages: {
      deep: true,
      handler() {
        this.queueScrollToBottom()
      }
    }
  },
  beforeUnmount() {
    this.revokeImages(this.pendingImages)
    this.messages.forEach((message) => this.revokeImages(message.images))
  },
  methods: {
    openFilePicker() {
      this.$refs.fileInput.click()
    },
    handleImageUpload(event) {
      const files = Array.from(event.target.files || [])
      const imageFiles = files.filter((file) => file.type.startsWith('image/'))

      this.pendingImages.push(
        ...imageFiles.map((file) => ({
          id: `${Date.now()}-${file.name}-${Math.random()}`,
          name: file.name,
          file,
          url: URL.createObjectURL(file)
        }))
      )

      event.target.value = ''
    },
    removePendingImage(index) {
      const [image] = this.pendingImages.splice(index, 1)

      if (image) {
        URL.revokeObjectURL(image.url)
      }
    },
    useSuggestion(text) {
      this.messageText = text
    },
    sendMessage() {
      if (!this.canSend) {
        return
      }

      const userMessage = {
        id: `user-${Date.now()}`,
        sender: 'user',
        text: this.messageText.trim(),
        images: this.pendingImages.splice(0)
      }

      this.messages.push(userMessage)
      this.messageText = ''

      this.messages.push({
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: '這裡先保留給 API 回覆。之後你接好資料後，可以把後端回傳的文字或圖片放在這個左側區塊。',
        images: []
      })

      this.queueScrollToBottom()
    },
    queueScrollToBottom() {
      nextTick(() => {
        window.requestAnimationFrame(() => {
          this.scrollToBottom()
        })
      })
    },
    scrollToBottom() {
      const list = this.$refs.messageList
      const page = document.scrollingElement || document.documentElement

      if (list) {
        list.scrollTop = list.scrollHeight
      }

      if (page) {
        page.scrollTop = page.scrollHeight
      }

      document.body.scrollTop = document.body.scrollHeight
    },
    revokeImages(images) {
      images.forEach((image) => {
        if (image.url) {
          URL.revokeObjectURL(image.url)
        }
      })
    }
  }
}
</script>

<style scoped>
.gn-page {
  min-height: 100vh;
  padding: 70px 24px 24px;
  box-sizing: border-box;
  background: #fff;
  color: #111;
  font-family: "Noto Sans", "Inter", sans-serif;
}

.chat-shell {
  width: min(100%, 980px);
  min-height: calc(100vh - 94px);
  margin: 0 auto;
}

.chat-start {
  min-height: calc(100vh - 94px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 16vh;
  box-sizing: border-box;
}

.chat-start h1 {
  margin: 0 0 38px;
  font-size: 25px;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: 0;
}

.chat-room {
  min-height: calc(100vh - 94px);
  display: flex;
  flex-direction: column;
}

.message-list {
  flex: 1;
  overflow-y: auto;
  padding: 30px 0 150px;
  scroll-behavior: smooth;
}

.message-row {
  display: flex;
  flex-direction: column;
  margin-bottom: 34px;
}

.message-row.user {
  align-items: flex-end;
}

.message-row.assistant {
  align-items: flex-start;
}

.message-bubble {
  max-width: min(76%, 680px);
  font-size: 16px;
  line-height: 1.8;
}

.message-row.user .message-bubble {
  padding: 11px 17px;
  border-radius: 22px;
  background: #f1f1f1;
}

.message-row.assistant .message-bubble {
  padding: 0 2px;
  background: transparent;
}

.message-bubble p {
  margin: 0;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.message-images {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
  margin-top: 10px;
}

.message-images:first-child {
  margin-top: 0;
}

.message-images img {
  width: 100%;
  max-height: 280px;
  object-fit: cover;
  border-radius: 16px;
  border: 1px solid #e8e8e8;
  display: block;
}

.assistant-tools {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 14px;
  color: #555;
}

.assistant-tools button {
  width: 24px;
  height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  cursor: pointer;
}

.assistant-tools button:hover {
  color: #111;
}

.composer-dock {
  position: fixed;
  left: 50%;
  bottom: 0;
  width: min(100% - 48px, 980px);
  padding: 24px 0 8px;
  transform: translateX(-50%);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0), #fff 34%);
  box-sizing: border-box;
}

.composer-wrap {
  width: min(100%, 770px);
  margin: 0 auto;
}

.composer-bar {
  min-height: 54px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 9px 7px 13px;
  border: 1px solid #d7d7d7;
  border-radius: 28px;
  background: #fff;
  box-shadow: 0 22px 62px rgba(0, 0, 0, 0.09), 0 2px 8px rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
}

.icon-button,
.send-button {
  flex: 0 0 auto;
  border: 0;
  cursor: pointer;
}

.icon-button {
  width: 33px;
  height: 33px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-radius: 50%;
  background: transparent;
  color: #222;
}

.icon-button:hover {
  background: #f3f3f3;
}

.message-input {
  flex: 1;
  min-width: 0;
  border: 0;
  outline: 0;
  background: transparent;
  color: #111;
  font-size: 15px;
  line-height: 1.4;
}

.message-input::placeholder {
  color: #9a9a9a;
}

.composer-mode {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: #777;
  font-size: 14px;
  white-space: nowrap;
}

.send-button {
  width: 37px;
  height: 37px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-radius: 50%;
  background: #111;
  color: #fff;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.send-button:hover:not(:disabled) {
  transform: translateY(-1px);
}

.send-button:disabled {
  opacity: 0.32;
  cursor: default;
}

.quick-actions {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
}

.quick-actions button {
  min-height: 39px;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 0 16px;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  background: #fff;
  color: #3e3e3e;
  font-size: 14px;
  cursor: pointer;
}

.quick-actions button:hover {
  background: #f6f6f6;
}

.preview-strip {
  display: flex;
  gap: 10px;
  margin: 0 8px 10px;
  overflow-x: auto;
}

.preview-item {
  position: relative;
  flex: 0 0 78px;
  width: 78px;
  height: 78px;
  border-radius: 16px;
  overflow: hidden;
  background: #f3f3f3;
  border: 1px solid #e7e7e7;
}

.preview-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.preview-item button {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 22px;
  height: 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: rgba(17, 17, 17, 0.75);
  color: #fff;
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
}

.chat-note {
  margin: 8px 0 0;
  color: #666;
  font-size: 12px;
  text-align: center;
}

.file-input {
  display: none;
}

@media (max-width: 720px) {
  .gn-page {
    padding: 70px 14px 16px;
  }

  .chat-start {
    padding-bottom: 10vh;
  }

  .chat-start h1 {
    font-size: 22px;
    margin-bottom: 28px;
  }

  .message-list {
    padding-bottom: 162px;
  }

  .message-bubble {
    max-width: 88%;
    font-size: 15px;
  }

  .composer-dock {
    width: calc(100% - 24px);
  }

  .composer-bar {
    gap: 6px;
    padding-left: 9px;
  }

  .composer-mode {
    display: none;
  }

  .quick-actions {
    margin-top: 16px;
  }
}
</style>
