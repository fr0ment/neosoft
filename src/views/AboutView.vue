<template>
  <main class="background-container4 ">
    <link href="font.css" rel="stylesheet">
    <div class="container">
    <div class="rectangle">
    
     <div class=" text__news">
          <span class="news__about">Новости</span>
        </div> 
        <article class="news1">
         <div class="">
          <img src="@/assets/image1.png" alt="Пейзаж с рыбой" class="image1">
        </div>
        <div class="news__content1">
          <div class=" text1">
          <span class="text__green">ГИС РУССА</span> С 1 января 2007 года в России отменяется один из самых дуболомских законов - запрет на определение координат с точностью до 30 метров. Введенный еще во времена Буденого и батьки Махно этот маразматичный акт делал подсудным делом любой GPS-навигатор в нашей стране. А заодно убивал любые попытки создать более-менее приличные легальные электронные карты России...
        </div>
          <div class="date1">
            9.12.2006
          </div>
        </div>
        </article>
        <article class="news2">
            <div class="">
              <img src="@/assets/image2.png" alt="Пейзаж с рыбой" class="image2">
            </div>
          <div class="news__content2">
            <div class="text2">
            <span class="text__green">ZoomBrowser EX 5.1</span> Интересная софтинка, поставляемая с цифровыми камерами Canon. Главной фишкой является так называемый ZoomMode - режим при котором программа пытается втиснуть в экран все тумбы текущего каталога. И соответственно их масштабирует. Масштаб можно менять и самостоятельно при помощи ползунка...
          </div>
          <div class="date2">
            9.12.2006
          </div>
          </div>
        </article>
        <article class="news3">
            <div class="">
              <img src="@/assets/image3.png" alt="Пейзаж с рыбой" class="image3">
            </div>
          <div class="news__content3">
            <div class="text3">
            <span class="text__green">FastStone 2.12</span> Еще один довольно надежный вьювер от азиатского автора. Единственным украшением являются скины. В остальном FastStone - это неплохое бесплатное подражание ACDSee. Особенно мне понравился его полноэкранный режим - можно удобно просматривать большие фотографии, при этом имея под рукой все средства обработки...
          </div>
          <div class="date3">
            23.11.2005
          </div>
          </div>
        </article>
        <article class="news4">
            <div class="">
              <img src="@/assets/image4.png" alt="Пейзаж с рыбой" class="image4">
            </div>
          <div class="news__content4">
            <div class="text4">
            <span class="text__green">OZI Explorer</span> По мере развития спутниковых навигационных систем на просторах любимой Родины, все чаще возникает потребность подключать, ставшие такими дешевыми, GPS-навигаторы к полноценным компьютерам. С многочисленными "пОкетами" и "гАрминами" - все понятно: навигация одна из главных их функций и развивается вполне успешно. А вот чтобы поездить с Windows-ноутбуком...
          </div>
          <div class="date4">
            09.09.2005
          </div> 
          </div>
        </article>
        <article class="news5">
            <div class="">
              <img src="@/assets/image5.png" alt="Пейзаж с рыбой" class="image5">
            </div>
          <div class="news__content5">
            <div class="text5">
            <span class="text__green">Picasa 2.0</span> В 2005-ом вышла новая версия Picas-ы (графический просмотрщик от Google). Номер версии подняли кардинально (с 1.6 до 2.0), но больших сдвигов нет. Те же тормоза со сканированием: чтобы хоть как-то укротить бешеную тягу Пикасы к вечному перелопачиванию дисков, нужно сразу после запуска бежать в Tools>Options и отключать все галочки сканирования (Automaticaly Detect ...). Потом обязательно перезапускаться - иначе ей наплевать...
          </div>
          <div class="date5">   
            09.09.2005
          </div>
          <div class="text6">
            <router-link class="sled_str" to="">Следующая страница</router-link>
        </div>
          </div>   
        </article>
        
    </div>
    </div>
  </main>
</template>
<style>

div{
  /* border: 1px solid rgb(255, 0, 0); */
}
.background-container4{
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh; /* На всю высоту экрана */
  display: flex; /* Для центрирования содержимого */
  justify-content: center;
  align-items: center;
  color: white; /* Цвет текста */
}
.rectangle{
  
  /* margin: 0 auto; */
  /* width: 1369px; */
  margin-top: 38px;
  /* height: 1090.04px; */
  background: conic-gradient(from 180deg at 60% 50%, rgba(21, 52, 38, 0.2), rgba(121, 218, 121, 0.04), rgba(45, 74, 38, 0.2), rgba(90, 201, 56, 0.04));
}
.news__content1 {
  /* overflow: hidden; */
  /* display: flex; */
  flex-direction: column;
  /* box-sizing: border-box; */
}
.news__content2{
  flex-direction: column;
}
.news__content3{
  flex-direction: column;
}
.news__content4{
  flex-direction: column;
}
.news__content5{
  flex-direction: column;
}
.text__news{
  color: rgb(30, 168, 22);
  font-family: Inter;
  font-size: 40px;
  font-weight: 400;
  line-height: 48px;
  letter-spacing: 0%;
  text-align: left;

}
.news__about{
  margin-top: 7px;
  margin-left: 23px;
}
.news1{
  display: flex;
}
.news2{
  display: flex;
}
.news3{
  display: flex;
}
.news4{
  display: flex;
}
.news5{
  display: flex;
}
.image1{
  /* width: clamp(46px, 12.3em, 198.92px); Адаптивная ширина логотипа */
  /* height: clamp(64px, 13.8em, 222.16px); Адаптивная высота логотипа */
  margin-left: 48px;
  margin-top: 21px;
  width: 198.92px;
  height: 222.16px;
  /* width: 100vw; */
}
.image2{
  margin-left: 48px;
  margin-top: 32px;
  width: 182.68px;
  height: 207.34px;
}
.image3{
  margin-left: 64px;
  margin-top: 58px;
  width: 96.42px;
  height: 99.72px;
}
.image4{
  margin-top: 44px;
  margin-left: 46px;
  width: 126.86px;
  height: 120.46px; 
}
.image5{
  margin-top: 32px;
  margin-left: 55px;
  width: 108.59px;
  height: 145.14px;
}
.text1{
  color: white;
  margin-top: 21px;
  margin-left: 23px;
  margin-right: 10%;
  /* margin-right: 85px; */
  /* width: 1012.87px; */
  font-family: Inter;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0%;
  text-align: left;
}
.text2{
  color: white;
  margin-left: 32px;
  margin-top: 32px;
  margin-right: 45px;
  /* width: 980.45px; */
  font-family: Inter;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0%;
  text-align: left;
}
.text3{
  color: white;
  margin-top: 58px;
  margin-left: 51px;
  margin-right: 54px;
  /* width: 980.18px; */
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0%;
  text-align: left;
}
.text4{
  color: white;
  margin-top: 44px;
  margin-left: 39px;
  margin-right: 37px;
  /* width: 980.44px; */
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0%;
  text-align: left;
}
.text5{
  color: white;
  margin-top: 32px;
  margin-left: 48px;
  margin-right: 53px;
  /* width: 980.2px; */
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0%;
  text-align: left;
}
.date1{
  margin-right: 53px;
  height: 38.51px;
  color: rgb(255, 255, 255);
  font-family: Inter;
  font-size: 32px;
  font-weight: 400;
  line-height: 39px;
  letter-spacing: 0%;
  text-align: right;
}
.date2{
  margin-right: 54px;
  height: 38.51px;
  color: rgb(255, 255, 255);
  font-family: Inter;
  font-size: 32px;
  font-weight: 400;
  line-height: 39px;
  letter-spacing: 0%;
  text-align: right;
}
.date3{
  margin-right: 54px;
  height: 28.63px;
  color: rgb(255, 255, 255);
  font-family: Inter;
  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: 0%;
  text-align: right;
}
.date4{
  margin-right: 53px;
  height: 28.63px;
  color: rgb(255, 255, 255);
  font-family: Inter;
  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: 0%;
  text-align: right;
}
.date5{
  margin-right: 58px;
  height: 28.63px;
  color: rgb(255, 255, 255);
  font-family: Inter;
  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: 0%;
  text-align: right;
}
.text__green{
  color: #127A0C;
  text-decoration: underline;
}
.text6{
  margin-top: 16px;
  text-align: right;
  
}
.sled_str{
  margin-right: 10px;
  text-decoration: none;
  color: rgb(34, 133, 49);
  font-family: Inter;
  font-size: 32px;
  font-weight: 400;
  line-height: 39px;
  letter-spacing: 0%;
  text-align: right;
}
.news5{
  padding-bottom: 25px;
}

@media(max-width: 768px){
  .news5{
  
  padding-bottom: 15px;
}
  .rectangle{
    margin-top: 15px;
  }
  
  .text1{
    font-size: 16px;
    line-height: 19px;
  }
  .text2{
    font-size: 16px;
    line-height: 19px;
  }
  .text3{
    font-size: 16px;
    line-height: 19px;
    margin-left: 10px;
  }
  .text4{
    font-size: 16px;
    line-height: 19px;
  }
  .text5{
    font-size: 16px;
    line-height: 19px;
  }
  .image1{
    width: 96.42px;
  height: 99.72px;
  }
  .image2{
    width: 96.42px;
    height: 99.72px;
  }
  .date1{
    font-size: 24px;
  /* font-weight: 700; */
  line-height: 29px;
  }
  .date2{
    font-size: 24px;
  /* font-weight: 700; */
  line-height: 29px;
  }
  .date3{
    font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  }
  .date4{
    font-size: 16px;
  /* font-weight: 700; */
  line-height: 19px;
  }
  .date5{
    font-size: 16px;
  /* font-weight: 700; */
  line-height: 19px;
  }
  .sled_str{
  font-size: 16px;
line-height: 19px;}
  .text__news{
    font-size: 29px;
  /* font-weight: 700; */
  line-height: 24px;
  }
  .news__about{
    margin-left: 4px;
  }
}
@media (max-width: 576px){
  .rectangle {
    /* width: 307px; */
    width: 100%;
    height: 100%;
    margin-top: 6px;
  }
  .news__content1 {     
    margin-right: 17px;
    width: calc(100% - 34px);
  }
  .news__content2{
    margin-right: 17px;
    width: calc(100% - 34px);
  }
  .news__content3{
    margin-right: 17px;
    width: calc(100% - 34px);
  }
  .news__content4{
    margin-right: 17px;
    width: calc(100% - 34px);
  }
  .news__content5{
    margin-right: 17px;
    width: calc(100% - 34px);
  }
  .image1 {
    width: 46px;
    height: 64px; 
    margin-left: 17px;
    margin-top: 9px;
  }
  .image2{
    margin-top: 0px;
    width: 43px;
    height: 59px;
    margin-left: 17px;
  }
  .image3{
    margin-top: 0px;
    width: 43px;
    height: 38px;
    margin-left: 17px;
  }
  .image4{
    margin-top: 0px;
    width: 43px;
    height: 40px;
    margin-left: 17px;
  }
  .image5{
    margin-top: 0px;
    width: 43px;
    height: 49px;
    margin-left: 17px;
  }
  .text1 {
    font-size: 12px;
    line-height: 15px;
    margin-left: 17px;
    margin-right: 17px;
    margin-top: 9px;
  }
  .text2{
    margin-top: 0px;
    font-size: 12px;
    line-height: 15px;
    margin-left: 17px;
    margin-right: 17px;
  }
  .text3{
    margin-top: 0px;
    font-size: 10px;
    line-height: 12px;
    margin-left: 17px;
    margin-right: 17px;
  }
  .text4{
    margin-top: 0px;
    font-size: 10px;
    line-height: 12px;
    margin-left: 17px;
    margin-right: 17px;
  }
  .text5{
    margin-top: 0px;
    font-size: 10px;
    line-height: 12px;
    margin-left: 17px;
    margin-right: 17px;
  }
  .date1 {
    font-size: 16px;
    line-height: 19px;
    margin-right: 5px;
    font-size: 16px;
    line-height: 19px;
  }
  .date2{
    font-size: 16px;
    line-height: 19px;
    margin-right: 5px;
    font-size: 16px;
    line-height: 19px;
  }
  .date3{
    font-size: 16px;
    line-height: 19px;
    margin-right: 5px;
    font-size: 16px;
    line-height: 19px;
  }
  .date4{
    font-size: 16px;
    line-height: 19px;
    margin-right: 5px;
    font-size: 16px;
    line-height: 19px;
  }
  .date5{
    font-size: 16px;
    line-height: 19px;
    margin-right: 5px;
    font-size: 16px;
    line-height: 19px;
  }
  .sled_str{
    font-size: 16px;
    line-height: 19px;
    margin-right: 5px;
    font-size: 16px;
    line-height: 19px;
  }
  .news5{
    padding-bottom: 14px;
  }
};
</style>