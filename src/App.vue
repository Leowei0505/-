<template>
  <div class="navbar">

    <div class="nav_left">
      <div class="nav_logo">
        <img src="@/assets/logo.png" alt="Logo" class="logo" />
      </div>
      <div class="nav_tt">
        <router-link to="/" class="nav_h2">DecoAI</router-link>
      </div>
    </div>

    <div class="nav_center">
      <router-link to="/">首頁</router-link>
      <router-link to="/gn">生成</router-link>
    </div>
    
    <div class="nav_right">
      <router-link to="/about">關於</router-link>
    </div>
  </div>


  <div class="router-content">
    <router-view />
  </div>

</template>

<script>

</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');

body{
    margin: 0;
    font-family: 'Inter', sans-serif;
  }

hr{
  opacity: 0.3;
}

.navbar{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  background: rgba(247,247,247,.85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #ddd;
  z-index: 1000;
  box-sizing: border-box;
}

.logo{
  width: 80px;
  height: 60px;
}

.nav_left{
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav_tt {
  margin-left: -15px ;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
}
.nav_h2{
  display: inline-block;
  text-decoration: none;
  color: black;
  font-size: 23px;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  opacity: 0.85;
}

.nav_center{
    flex: 1;
    display: flex;
    justify-content: center;
    gap: 30px;
}

.nav_center a{
  font-family: 'Inter', sans-serif;
  display: inline-block;
  font-size: 15px;
  padding: 5px 15px;
  border-radius: 5px;
  color: black;
  text-decoration: none;
  transition: 0.3s;
  opacity: 0.8;
}

.nav_center a:hover{
  transform: translateY(-2px);
  background-color: #dde0e0;
  opacity: 1;
}

.nav_right{
    flex: 1;
    display: flex;
    justify-content: flex-end;
}

.nav_right a{
  font-family: "Noto Sans", sans-serif;
  display: inline-block;
  font-size: 16px;
  text-decoration: none;
  padding: 3px 15px;
  transition: 0.3s;
  border-radius: 5px;
  color: black;
  opacity: 0.7;
}

.nav_right a:hover{
  transform: translateY(-2px);
  background-color: #dde0e0;
  opacity: 1;
}

</style>