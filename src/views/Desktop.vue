<template>
  <div class="background-container ">
    <link href="font.css" rel="stylesheet">
    <div class="container">
      <div class="rectangle">
      <div class="desktop">
        <div class="text__desktop1">FastStone 2.12</div>
        <div class="text__desktop2">
          <div class="text_desktop_block">
          <span class="text__green">ZoomBrowserEX 5.1</span> — это программное обеспечение от Canon, поставляемое в комплекте с цифровыми камерами этой компании. Основное предназначение программы — управление фотографиями, их просмотр и базовое редактирование. Особенностью является режим ZoomMode, который позволяет эффективно управлять большим количеством изображений.
        </div>
        <button class="btn">СКАЧАТЬ</button>
      </div>
        <div class="image__desktop">
          
          <img class="image__desktop1" src="@/assets/Desktop1.png" alt="">
          <img class="image__desktop3" src="@/assets/Desktop3.png" alt="">
         <img class="image__desktop2" src="@/assets/Desktop2.png" alt="">
        </div>
        <div class="text_kv">Ключевые функции:</div>
        <div class="text__desktop3">
          <p class="po">ZoomMode:</p>
              <li>В этом режиме программа масштабирует миниатюры изображений (тумбы) так, чтобы они одновременно помещались на экране. Это упрощает навигацию по большим коллекциям фотографий.</li>
              <li>Масштабирование может выполняться автоматически или вручную с помощью ползунка.</li>
          <p class="po">Интерактивный просмотр:</p>
              <li>При наведении курсора на миниатюру появляется окно предпросмотра с увеличенным изображением.</li>
              <li>При клике открывается полное изображение в отдельном окне для детального просмотра.</li>
          <p class="po">Редактирование и управление:</p>
              <li>Возможности для редактирования включают базовые операции, такие как изменение размеров, цветокоррекция и устранение эффекта "красных глаз".</li>
              <li>Функции каталогизации позволяют сортировать фотографии по папкам и управлять ими.</li>
          <p class="po">Удобство интерфейса:</p>
              <li>Программа обеспечивает быстрый доступ к изображениям через упрощенный и логичный интерфейс.</li>
              <li>Дополнительное окно с красной рамкой показывает текущее положение в общем поле картинок при масштабировании.</li>
        </div>
        <div class="text__desktop4">
          <p class="po"> Плюсы:</p>
              <li>Простота использования для начинающих пользователей.</li>
              <li>Удобный интерфейс для работы с большими коллекциями изображений.</li>
              <li>Интеграция с камерами Canon, что делает программу подходящей для пользователей техники этой марки.</li>
          <p class="po">Минусы:</p>
              <li>Ограниченные функции редактирования по сравнению с профессиональными графическими редакторами.</li>
              <li>Некоторая зависимость производительности от объема каталога и характеристик компьютера.</li>
        </div>
        <div class="text__desktop5">Вывод</div>
        <div class="text__desktop6">ZoomBrowser EX 5.1 — это надежный инструмент для управления изображениями, подходящий для начинающих фотографов и любителей. Простота в освоении и полезные функции просмотра делают его удобным выбором для работы с коллекциями фотографий, особенно если вы используете камеры Canon.</div>
      </div>
    </div>
  </div>
</div>
</template>
<style>
div{
  /* border: 1px solid rgb(255, 0, 0); */
}
.background-container{
  background: radial-gradient(
    99.00% 61.00% at 50% 50%,
    rgb(0, 0, 0),
    rgb(40, 39, 39) 100%);

    background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh; /* На всю высоту экрана */
  display: flex; /* Для центрирования содержимого */
  justify-content: center;
  align-items: center;
  color: white; /* Цвет текста */
}
.image__desktop {
  margin-top: 10px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.image__desktop1 {
  z-index: 2;
  height: 421px;
  width: auto;
}
.image__desktop2,
.image__desktop3 {
  position: absolute;
  top: 50%; /* На половине высоты */
  transform: translateY(-50%); /* Центрирование по вертикали */
  height: 320px;
  z-index: 1;
  width: auto;
}
.image__desktop2 {
  right: 0; /* Уперто вправо */
}
.image__desktop3 {
  left: 0; /* Уперто влево */
  
}
.btn{
  color: white;
  background: radial-gradient(135.00% 134.00% at 50% 50%,rgb(207, 196, 196),rgb(0, 99, 26) 58.5%);
  font-family: 'InterBold', sans-serif;
font-size: 48px;
font-weight: 700;
line-height: 58px;
  margin-right: 30px ;
  width: 330px;
  height: 113px;
}
.text__green{
  color: #127A0C;
  text-decoration: underline;
}
.text__desktop1{
  margin-top: 8px;
  color: rgb(0, 99, 26);
font-family: 'InterRegular', sans-serif;
font-size: 36px;
font-weight: 700;
line-height: 44px;
letter-spacing: 0%;
text-align: center;

}
  .text__desktop2{
    
    margin-top: 24px;
    align-items: center;
    margin-left: 49px;
    display: flex;
    font-family: 'InterBold', sans-serif;
font-size: 24px;
font-weight: 700;
line-height: 29px;
letter-spacing: 0%;
text-align: left;
  }
  .text_desktop_block{
    width: 100%;
    color: rgb(255, 255, 255);
  }
  .text_kv{
    margin-left: 49px;
    color: rgb(255, 255, 255);
    font-family: 'InterBold', sans-serif;
font-size: 20px;
font-weight: 700;
line-height: 24px;
letter-spacing: 0%;
text-align: left;
  }
  .text__desktop3{
    margin-top: 8px;
    margin-left: 77px;
    color: rgb(255, 255, 255);
    font-family: 'InterBold', sans-serif;
font-size: 16px;
font-weight: 700;
line-height: 19px;
letter-spacing: 0%;
text-align: left;
  }
  .text__desktop4{
    margin-left: 49px;
    color: rgb(255, 255, 255);
    font-family: 'InterBold', sans-serif;
font-size: 20px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0%;
text-align: left;
  }
  .po{
    margin-top: 8px;
    margin-bottom: 0px;
  }
  .text__desktop5{
    margin-top: 8px;
    margin-left: 49px;
    color: rgb(255, 255, 255);
    font-family: 'InterRegular', sans-serif;;
font-size: 24px;
font-weight: 400;
line-height: 29px;
letter-spacing: 0%;
text-align: left;
  }
  .text__desktop6{
    width: 90%;
    margin-top: 8px;
    margin-left: 49px;
    color: rgb(255, 255, 255);
    font-family: 'InterRegular', sans-serif;
font-size: 24px;
font-weight: 400;
line-height: 29px;
letter-spacing: 0%;
text-align: left;
  }
  /* @media(max-width: 1200px){
    .image__desktop{
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        align-items: center;
    }
    .image__desktop1{
      display: flex;
      position: static;
      width: auto;
      height: auto;
      margin-top: 0px;
      margin-left: 48px;
      margin-right: 48px;
    }
    .image__desktop2{
      
      position: static;
      width: auto;
      height: auto;
      margin-left: 0px;
      margin-right: 0px;
      margin-top: 0px
    }
    .image__desktop3{
      
      position: static;
      width: auto;
      height: auto;
      margin-left: 0px;
      margin-right: 0px;
      margin-top: 0px;
    }
  } */
  @media(max-width: 768px){
    .image__desktop {
      display: flex;
      justify-content: start;
    /* flex-direction: column; */
    gap: 10px;
    }
    .image__desktop1 {
    width: 100%;
    height: auto;
    /* height: 179px; */
    position: relative; /* Меняем позиционирование */
    margin-bottom: 10px; /* Отступ снизу */
    }
    /* .image__desktop2{
      position: static;
      width: 93px;
      height: 85px;
    } */
    .image__desktop2,
  .image__desktop3 {
    position: static; /* Сбрасываем абсолютное позиционирование */
    /* width: 50%; */
    height: 85px; /* Новая высота */
  }
    .text__desktop1{
      font-size: 24px;
      font-weight: 700;
      line-height: 29px;
    }
    .text__desktop2{
      margin-left: 12px;
      flex-direction: column;
      margin-right: 0px;
      font-size: 14px;
    font-weight: 700;
line-height: 17px;
    }
    .btn{
      margin-right: 0px;
      width: 212px;
      height: 66.96px;
      font-size: 32px;
font-weight: 700;
line-height: 39px;
    }
    .text_kv{
      margin-left: 12px;
      font-size: 14px;
font-weight: 700;
line-height: 17px;
    }
    .text__desktop3{
      margin-left: 23px;
      font-size: 12px;
font-weight: 700;
line-height: 15px;

    }
    .text__desktop4{
      margin-left: 12px;
      font-size: 14px;
font-weight: 400;
line-height: 17px;
    }
    .text__desktop5{
      margin-left: 12px;
      font-size: 15px;
font-weight: 400;
line-height: 18px;
    }
    .text__desktop6{
      margin-left: 12px;
      font-size: 15px;
font-weight: 400;
line-height: 18px;
    }
  }
</style>
<script>
export default {
  name: "UserDesktop",
};
</script>