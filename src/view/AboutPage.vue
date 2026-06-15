<template>
  <div class="about_page">
  <section>
    <!-- 關於版面 -->
    <div class="about">

      <!-- 關於內容 -->
      <div  class="about_main">
        <h1>About us</h1>
        <h2>關於 DecoAI</h2>

        <!-- 關於標題 -->
        <div class="about_main_logo">

          <!-- 標題左側圖片 -->
          <div class="main_logo_pic">
            <img src="@/assets/about1.jpg" alt="logo" class="about_logo" />
          </div>

          <!-- 標題右側內容 -->
          <div class="main_logo_p">
            <p>
              DecoAI 是一款專為室內設計打造的 AI 設計助手，
              使用者只需上傳空間照片並描述需求，
              即可快速探索多種設計風格與空間提案。
            </p>
          </div>

        </div>

        <div class="divider_about"></div>

        <!-- 關於理念 -->
        <div class="about_main_why">
          <h2>為什麼打造 DecoAI？</h2>
        </div>
          <!-- 理念標題 -->
        <div class="about_main_logo">

          <!-- 理念左側圖片 -->
          <div class="main_logo_pic">
            <img src="@/assets/about2.jpg" alt="logo" class="why_logo" />
          </div>

          <!-- 理念右側內容 -->
          <div class="main_logo_p">
            <p>
          在室內設計初期，設計師與客戶常需要花費大量時間討論風格、
          色彩與空間氛圍。DecoAI 希望透過 AI 圖像生成技術，
          將抽象的想法轉換成可視化設計提案，讓溝通更直覺，
          也讓設計發想更有效率。
            </p>
          </div>
        </div>

        <div class="divider_about"></div>

        <!-- 關於功能 -->
        <div class="about_main_work">
          <h2>核心功能</h2>

          <p class="work_intro">
            DecoAI 將室內設計常見的溝通流程整理成四個主要能力，
            讓使用者可以從既有照片出發，快速看見不同風格與改造方向。
          </p>

          <div class="work_cards">
            <article class="work_card">
              <h3>圖生圖</h3>
              <p>
                上傳現有空間照片後，AI 會依照文字需求重新生成設計版本，
                保留原本格局與空間比例，快速產出可參考的改造視覺。
              </p>
            </article>

            <article class="work_card">
              <h3>風格轉換</h3>
              <p>
                將同一個空間轉換成不同室內風格，例如現代簡約、奶油風、
                日式無印或工業風，協助比較材質、色彩與氛圍差異。
              </p>
            </article>

            <article class="work_card">
              <h3>空間改造</h3>
              <p>
                針對牆面、地板、家具或局部區域提出改造方案，
                讓使用者能指定要保留與變更的地方，降低溝通落差。
              </p>
            </article>

            <article class="work_card">
              <h3>直接展示</h3>
              <p>
                生成結果可直接作為提案展示素材，用於與客戶討論方向、
                確認喜好，讓設計初期的想法更容易被理解。
              </p>
            </article>
          </div>
        </div>

        <div class="divider_about"></div>

      </div>

    </div>
  </section>

    <!---- 底下資訊 ---->
  <footer>
    <div class="footer">
      <div class="footer_main">

        <!-- 左側：品牌介紹 -->
        <div class="footer_brand">
          <div class="footer_logo_box">
            <img src="@/assets/logo.png" alt="DecoAI Logo" class="footer_logo" />
            <h2>DecoAI</h2>
          </div>

          <p>
            AI 室內設計助手，協助設計師與使用者快速探索空間風格。<br />
            只需上傳空間照片並描述需求，即可產生多種設計提案，<br />
            讓風格溝通、空間改造與設計發想變得更直覺。
          </p>
        </div>

        <!-- 產品 -->
        <div class="footer_col">
          <h3>產品</h3>

          <router-link to="/">首頁</router-link>
          <router-link to="/gn">開始生成</router-link>
          <router-link to="/about">關於我們</router-link>
        </div>

        <!-- 功能 -->
        <div class="footer_col">
          <h3>功能</h3>

          <a href="#">圖生圖</a>
          <a href="#">風格轉換</a>
          <a href="#">空間改造</a>
          <a href="#">直接展示</a>
        </div>

        <!-- 聯絡我們 -->
        <div class="footer_col">
          <h3>聯絡我們</h3>

          <a href="#">Email</a>
          <a href="#">Discord</a>
          <a href="#">GitHub</a>
        </div>

      </div>

      <div class="footer_bottom">
        <p>© 2026 DecoAI. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
  </div>

</template>

<script>
import '@/css/About.css'

export default {
  name: 'AboutPage'
}

</script>
