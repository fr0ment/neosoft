<template>
  <div :class="appClass">
    <header :class="headerClass">
      <div class="container">
        <div class="header__all">
          <a href="#" class="logo">
            <router-link to="/about" class="nav_logo">
              <img class="logo__img" src="@/assets/logo.svg" alt="logo" />
            </router-link>
          </a>
          <div class="header__right">
            <nav class="header__nav">
              <router-link class="nav-link nav-link2" to="/Desktop">Desktop</router-link>
              <router-link class="nav-link" to="/Graphic">Graphic</router-link>
              <router-link class="nav-link" to="/Internet">Internet</router-link>
              <router-link class="nav-link" to="/Multimedia">Multimedia</router-link>
              <router-link class="nav-link" to="/Games">Games</router-link>
              <router-link class="nav-link" to="/Contacts">Contacts</router-link>
            </nav>
            <div class="line"></div>
          </div>
        </div>
      </div>
    </header>

    <router-view />

    <footer :class="footerClass">
      <div class="container">
        <div class="">
          <div class="footer__line"></div>
        </div>
        <div class="footer__text1">
          <span>(c) Copyright 1998-2006 NEOSOFT.RU</span>
        </div>
        <div class="footer__text2">
          <span>Использование материалов Neosoft.ru в других средствах массовой информации возможно только с письменного разрешения.</span>
        </div>
        <div class="footer__text3">
          Designed by <span class="design__text footer__text3">Lighttek Design</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* body {
  min-height: 100vh;
} */
div{
  /* border: 1px solid rgb(255, 0, 0); */
}

@import url("css/bootstrap-grid.min.css");
@import url("css/bootstrap-reboot.min.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a { 
  color: rgb(30, 168, 22);
  text-decoration: none;
  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
}

/* nav a.router-link-exact-active {
  color: #ffffff;
  text-decoration: none;
} */

.line {
  
  position: absolute;
  bottom: 50%; 
  left: 0;
  width: 100%; 
  height: 3px; 
  background: linear-gradient(90deg, rgb(0, 99, 26) 0%, white 50%, rgb(0, 99, 26));
  transition: background 0.3s ease; 
}

.nav-link2{
  padding-left: 56px;
}
.nav-link {
  position: relative;
  text-decoration: none;
  color: rgb(30, 168, 22);
  padding-right: 56px;
}

.nav-link.active ~ .line {
  background: linear-gradient(90deg, green 0%, white 50%, green 100%);
}

.nav-link.active {
  color: white;
}
.header__all{
  background: linear-gradient(62.98deg, rgb(2, 15, 4) 0%, rgb(6, 36, 11) 68.068%, rgb(34, 133, 49) 99.93%);
  display: flex;
  align-items: center;
  
}
.header {
  display: flex;
  align-items: center;
   
  padding: 0 15px;
  margin: 0 auto; 

  width: 100%;
  background: linear-gradient(62.98deg, rgb(2, 15, 4) 0%, rgb(6, 36, 11) 68.068%, rgb(34, 133, 49) 99.93%);
  /* height: clamp(17px, 3.5vw, 57px); */
}




.header__nav {
  /* display: flex;  */
  /* gap: clamp(4px, 5vw, 56px);  */
}


.header__nav router-link {
  font-size: clamp(10px, 1.5vw, 20px);
  text-decoration: none;
  color: white; 

  display: flex; 
  gap: clamp(4px, 5vw, 56px); 
}
.header__right {
  position: relative; 
}
.background-container2{
  height: 100%;
  background: radial-gradient(99.00% 61.00% at 50% 50%,rgb(0, 0, 0),rgb(40, 39, 39) 100%);
  color: white; 
  min-height: 100vh; 
 
  /* background-size: stretch;
  background-repeat: no-repeat; */
}

.footer{
  margin-top: auto;
  /* flex: 0 0 auto; */
  width: 100%;
  /* background-color: black; */
  /* padding-top: 22px; */
  /* padding-bottom: 22px; */
  /* width: 100%;  */
  /* height: clamp(52px, 3.5vw, 129px); */
  
}
.footer__line{
  
  margin-top: 15px;
  border: 5px solid rgb(0, 99, 26);
  /* width: 1370px; */
  width: 100%;
  /* height: 0; */
}
.footer__text{
  color: rgb(255, 255, 255);
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0%;
  text-align: center;
  margin-top: 16px;
}
.footer__text_only{
  color: rgb(255, 255, 255);
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0%;
  text-align: center;
  margin-top: 16px;
  margin-bottom: 16px;
}
.footer__text1{
  text-align: center;
  margin-top: 24px;
  color: rgb(255, 255, 255);
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0%;
}
.footer__text2{
  text-align: center;
  color: rgb(255, 255, 255);
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0%;
  margin-top: 16px;
}

.footer__text3{
  text-align: center;
  color: rgb(255, 255, 255);
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0%;
  margin-top: 16px;
}
.design__text{
  text-decoration: underline;
}
@media (max-width: 1200px) {
  .line{
    width: 100%;
  }
  .footer__line{
    width: 100%;
  }
  .header__right{
    font-size: 10px;
    line-height: 12px;
  }
  .header__nav{
    font-size: 10px;
    line-height: 12px;
    padding-right: px;
  }
  .nav-link2{
  padding-left: 34px;
}
  .nav-link{
    /* font-size: 10px;
    line-height: 12px; */
    padding-right: 34px;
  }
}
@media (max-width: 991px) {
  .logo__img{
    width: 100%;
    align-items: center;
  }
  .line{
    width: 100%;
  }
  .footer__line{
    width: 100%;
  }
  .header__right{
    font-size: 10px;
    line-height: 12px;
    padding-right: 4px;
  }
  .header__nav{
    font-size: 10px;
    line-height: 12px;
    padding-right: 1px;
  }
  .nav-link2{
  padding-left: 12px;
}
  .nav-link{
    font-size: 20px;
    line-height: 12px;
    padding-right: 12px;
  }
  
}
@media (max-width: 768px) {
  .logo__img{
    width: 90px;
    align-items: center;
    
  }
  .line{
    width: 100%;
  }
  .footer__line{
    width: 100%;
  }
  .header__right{
    text-align: left;
    width: 100%;
    /* font-size: 20px; */
    line-height: 12px;
    padding-right: 4px;
  }
  .header__nav{
    font-size: 10px;
    line-height: 10px;
    padding-right: 4px;
  }
  .nav-link2{
  padding-left: 10px;
}
  .nav-link{
    font-size: 15px;
    line-height: 12px;
    padding-right: 8px;
  }
  nav a {
  width: 43px;
  height: 12px;
  }
}
@media (max-width: 768px) {
  .header__all{
    margin-left: -13px;
    
  }
  .logo__img{
    width: 45px;;
    align-items: center;
    margin-bottom: 5px;
  }
  .line{
    width: 100%;
    height: 1px;
  }
  .footer__line{
    width: 100%;
    border: 1px solid rgb(0, 99, 26);
  }
  .header__right{
    text-align: left;
    width: 100%;
    /* font-size: 20px; */
    line-height: 12px;
    padding-right: auto;
  }
  .header__nav{
    font-size: 10px;
    line-height: auto;
    padding-right: auto;
  }
  .nav-link2{
  padding-left: 4px;
}
  .nav-link{
    font-size: 8px;
    line-height: 12px;
    padding-right: auto;
  }
  nav a {
  width: 43px;
  height: 12px;
  }
  .footer__text1{
    font-size: 9px;
    line-height: 11px;
    
  }
  .footer__text2{
    font-size: 8px;
    line-height: 11px;
    margin-top: 5px;
  }
  .footer__text3{
    font-size: 10px;
    line-height: 11px;
}
}

footer {
  /* width: 100%;
  height: 100px; */
  background-color: inherit;
  /* color: radial-gradient(99.00% 61.00% at 50% 50%,rgb(0, 0, 0),rgb(40, 39, 39) 100%); */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  
}



.app-gradient {
  background: radial-gradient(99.00% 61.00% at 50% 50%, rgb(0, 0, 0), rgb(40, 39, 39) 100%);
  min-height: 100vh;
  color: white;
}
.app-black {
  background: rgb(0, 0, 0);
  min-height: 100vh;
  color: white;
}

.header-black, .footer-black {
  background: rgb(0, 0, 0);
  color: white;
}
.header-gradient, .footer-gradient {
  background: radial-gradient(
    99.00% 61.00% at 50% 50%,
    rgb(0, 0, 0),
    rgb(40, 39, 39) 100%
  );
  color: white;
}


/* Общие стили */
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.background-gradient {
  background: radial-gradient(99.00% 61.00% at 50% 50%, rgb(0, 0, 0), rgb(40, 39, 39) 100%);
  color: rgb(194, 15, 15);
}

.background-black {
  background: black;
  color: rgb(27, 255, 57);
}

/* 
.main-content {
  min-height: calc(100vh - 120px);
  padding: 20px;
} */


main{
  background: radial-gradient(
    99.00% 61.00% at 50% 50%,
    rgb(0, 0, 0),
    rgb(40, 39, 39) 100%
  );
}
</style>
<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "App",
  setup() {
    const route = useRoute();

    const headerClass = computed(() => {
      return route.meta.background === "black" ? "header-black" : "header-gradient";
    });

    const footerClass = computed(() => {
      return route.meta.background === "black" ? "footer-black" : "footer-gradient";
    });

    const appClass = computed(() => {
      return route.meta.background === "black" ? "app-black" : "app-gradient";
    });

    return {
      headerClass,
      footerClass,
      appClass,
    };
  },
};
</script>
