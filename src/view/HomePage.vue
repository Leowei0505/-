<template>
  <!---- 主頁大標題 ---->
  <section class="home_section">
    <div class="section_header">

      <div class="home_section_logo">
        <div class="nav_logo">
          <img src="@/assets/logo.png" alt="logo" class="home_logo" />
        </div>
        <div class="home_tt">
          <p> DecoAI</p>
        </div>
      </div>

      <h1>想為空間帶來全新的改變嗎？</h1>
      <h2>探索屬於您的設計風格</h2>
      <p>
        上傳空間照片並描述您的需求，
        AI 將快速生成多種設計提案，
        幫助您探索不同風格與空間可能性。
      </p>

      <div class="section_buttom">
        <router-link to="/gn" class="btn">開始探索風格</router-link>
      </div>
    </div>
    
  </section>
  <div class="divider"></div>

  <!---- 介紹區域 ---->
  <section class="home_section_main">
    <div class="section_main">

      <!---- 介紹區域why ---->
      <div class="why">
        <h1>為什麼選擇 DecoAI ?</h1>
        <h2>在不改變原有空間結構的情況下，
        快速探索多種室內設計風格。
        </h2>
        <p>AI 會在原有空間基礎上進行風格轉換，
        保留空間結構與配置。</p>

        <div class="why_card">

          <div class="card">
            <div class="card_main">
              <Palette :size="22" />
              <span>多種設計風格</span>
              <p>快速體驗不同設計方向。</p>
            </div>
          </div>

          <div class="card">
            <div class="card_main">
              <Users :size="22" />
              <span>降低溝通成本</span>
              <p>讓設計師與客戶在正式設計前，
              快速確認風格方向</p>
            </div>
          </div>

          <div class="card">
            <div class="card_main">
              <Sparkles :size="22" />
              <span>快速生成提案</span>
              <p>不需等待設計草圖，
              幾分鐘內即可獲得設計參考圖。</p>
            </div>
          </div>
          
        </div>
      </div>
      
      <div class="divider"></div>

      <!---- 介紹區域use ---->
      <div class="use">
        <h1>適用場景</h1>
        <h2>無論是個人裝潢、商業空間規劃，還是設計提案展示
          ，DecoAI 都能快速提供多種風感與視覺化成果。
        </h2>
        <p>
        透過 AI 圖生圖技術，將您的空間照片轉換成不同設計風格
        ，協助設計師與業主在短時間內完成風格探索與決策。
        </p>

        <div class="use_card">

          <div class="card">
            <div class="card_main">
              <Sofa :size="22" />
              <span>客廳設計</span>
              <p>快速生成現代、北歐、日式等多種客廳風格方案。</p>
            </div>
          </div>

          <div class="card">
            <div class="card_main">
              <BedDouble :size="22" />
              <span>臥室改造</span>
              <p>探索符合生活需求與個人品味的舒適臥室空間。</p>
            </div>
          </div>

          <div class="card">
            <div class="card_main">
              <Building2 :size="22" />
              <span>商業空間</span>
              <p>適用於咖啡廳、餐廳、辦公室與展示空間規劃。</p>
            </div>
          </div>  

          <div class="card">
            <div class="card_main">
              <Presentation :size="22" />
              <span>設計提案展示</span>
              <p>快速產出多種風格版本，提升與客戶溝通效率。</p>
            </div>
          </div>  

        </div>

      </div>

      <div class="divider"></div>

      <!---- 介紹區域how ---->
      <div class="how">
        <h1>如何使用Deco AI 圖像生成器</h1>
        <p>使用我們的AI圖像生成工具創建專業品質的視覺效果非常簡單
          。按照以下簡單步驟，使用AI生成適用於任何項目的圖像。</p>

        <div class="how_card">
          <div class="card_how">
            <img src="@/assets/how1.png" alt="logo" class="how_logo" />
            <div class="card_main">
              <span>步驟1：輸入您的文本提示</span>
              <p>在文本框中描述您的圖像。我們的文字轉圖像AI生成器在提供關於主題
              、風格、顏色和情緒的具體細節時效果最佳。</p>
            </div>
          </div>

          <div class="card_how">

            <div class="card_main">
              <img src="@/assets/how2.png" alt="logo" class="how2_logo" />
              <span>步驟2：載入圖片</span>
              <p>探索符合生活需求與個人品味的舒適臥室空間。</p>
            </div>
          </div>

          <div class="card_how">
            <div class="card_main">
              <img src="@/assets/how2.png" alt="logo" class="how2_logo" />
              <span>步驟3：生成並下載</span>
              <p>點擊“生成圖像”，讓我們的文字轉圖像技術發揮<br>魔力。
                幾秒鐘內，您將收到多個獨特的AI生成圖像，並以高解析度下載。</p>
            </div>
          </div>  

        </div>

      </div>

    </div>
  </section>

  <div class="divider"></div>

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
          <a href="#">風個轉換</a>
          <a href="#">空間改造</a>
          <a href="#">直按展示</a>
        </div>

        <!-- 聯絡我們 -->
        <div class="footer_col">
          <h3>聯絡我們</h3>

            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ljes1001423@gmail.com&su=DecoAI 聯絡詢問"
              target="_blank"
            >
              Email
            </a>
          <a href="#">Discord</a>
          <a href="#">GitHub</a>
        </div>

      </div>

      <div class="footer_bottom">
        <p>© 2026 DecoAI. All Rights Reserved.</p>
      </div>
    </div>
  </footer>

</template>

<script>
import { 
  Palette ,
  Users ,
  Sparkles ,
  Sofa,
  BedDouble,
  Building2,
  Presentation

} from 'lucide-vue-next'

export default {
  name: 'HomePage',
  components: {
    Palette,
    Users,
    Sparkles,
    Sofa,
    BedDouble,
    Building2,
    Presentation
  }
}
</script>

<style>
body{
  padding-top: 60px;
  background-color: #f7f7f7;;
  font-family: 'Inter', sans-serif;
}

h1{
  font-size: 53px;
  margin-top: -10px;
}

h2{
  opacity: 0.8;
}
/*------------------*/
/* section主頁大標題 */
/*------------------*/
.home_section{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 85vh;
  max-width: 1400px; /* 最大寬度 */
  margin: 0 auto;    /* 左右自動置中 */
  margin-bottom: -150px;
}

.section_header{
  width: 700px;
  text-align: center;
}
.section_header p{
  opacity: 0.7;
}

.home_section_logo{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -40px;
  margin-top: -60px;
}

.home_logo{
  width: 100px;
  height: 80px;
  opacity: 0.7;
}

.home_tt{
  margin-left: -20px ;
  font-family: 'Inter', sans-serif;
  font-size: 26px;
}

.btn{
  margin-top: 30px;
  padding: 12px 28px;
  border: none;
  border-radius: 10px;
  background-color: #111;
  color: white;
  cursor: pointer;
  display: inline-block;
  transition: 0.3s;
  text-decoration: none;
}
.btn:hover{
  transform: translateY(-2px);
  background-color: #525252;
  opacity: 0.7;
}

/*------------------*/
/*     介紹區域      */
/*------------------*/
.section_main{
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  max-width: 1100px; /* 最大寬度 */
  margin: 0 auto;    /* 左右自動置中 */
  margin-top: 200px;
  margin-bottom: 200px;
}

/*---------------------*/
/*     介紹區域why      */
/*---------------------*/
.why p{
  opacity: 0.8;
}

.why_card{
  margin-top: 60px;
  display: flex;
  gap:20px;
  text-align: start;
}

.card{
  flex: 1;
  height: 140px;
  border-radius: 10px;
  background-color: #e9e9e9;
  transition: 0.3s;
}
.card svg{
  margin-bottom: -2px;
}
.card:hover{
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,.08);
}

.card_main{
  margin-top: 25px;
  margin-left: 20px;
}
.card_main span{
  font-size: 18px;
  margin-left: 10px;
  opacity: 0.95;
}
.card_main p{
  font-size: 15px;
  opacity: 0.75;
  margin-left: 5px;
}
.divider{
  width: 100%;
  height: 1px;
  background-color: #ddd;
  opacity: 0.8;
  margin-top: 200px;
}

/*---------------------*/
/*     介紹區域use      */
/*---------------------*/
.use{
  min-height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 90px;
}

.use_card{
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 20px;

  text-align: start;
}

.use  p{
  opacity: 0.8;
}

/*---------------------*/
/*     介紹區域how      */
/*---------------------*/
.how{
  min-height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 90px;
}
.how p{
  opacity: 0.8;
}
.how_card{
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  text-align: start;
}

.card_how{
  flex: 1;
  height: 400px;
  border-radius: 10px;
  background-color: #e9e9e9;
  transition: 0.3s;
}
.card_how svg{
  margin-bottom: -2px;
}
.card_how:hover{
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,.08);
}
.how_logo{
  margin-left: 30px;
  margin-top: 30px;
  width:300px;
  height: 200px;
  border-radius: 10px;
}
.how2_logo{
  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 25px;
  width:300px;
  height: 200px;
  border-radius: 10px;
}

/*---------------------*/
/*     底下資訊欄      */
/*---------------------*/
.footer{
  background-color: #f1f1f1;
  padding: 70px 0 25px;
  border-top: 1px solid #ddd;
  min-height: 300px;
}

.footer_main{
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;

  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 70px;
}

/* 左側品牌 */
.footer_brand{
  display: flex;
  flex-direction: column;
}

.footer_logo_box{
  display: flex;
  align-items: center;
}

.footer_logo{
  margin-left: -30px;
  width: 95px;
  height: 75px;
  object-fit: contain;
  opacity: 0.8;
}

.footer_logo_box h2{
  margin: 0;
  font-size: 28px;
  color: #111;
}

.footer_brand p{
  margin-top: 18px;
  color: #666;
  font-size: 15px;
  line-height: 1.8;
}

/* 欄位 */
.footer_col{
  display: flex;
  flex-direction: column;
  gap: 13px;
}

.footer_col h3{
  margin: 0 0 8px;
  font-size: 18px;
  color: #111;
}

.footer_col a{
  text-decoration: none;
  color: #666;
  font-size: 15px;
  transition: 0.3s;
}

.footer_col a:hover{
  color: #111;
  transform: translateX(4px);
}

/* 底部版權 */
.footer_bottom{
  max-width: 1200px;
  margin: 55px auto 0;
  padding-top: 22px;

  border-top: 1px solid #ddd;
  text-align: center;
}

.footer_bottom p{
  margin: 0;
  color: #888;
  font-size: 14px;
}

/* 手機版 */

@media (max-width: 768px){
  .footer_main{
    grid-template-columns: 1fr;
    gap: 35px;
  }

  .footer{
    padding: 50px 0 25px;
  }
}
</style>