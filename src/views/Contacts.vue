<template>
  <div class="background-container3 " >
    <div class="container">
      <div class="contacts">
        <div class="text__contacts1">О нас</div>
        <div class="text__contacts2">
          Компания NEOSOFT.RU является информационным ресурсом, освещающим новости и события в области программного обеспечения, технологий навигации, графических инструментов и интерфейсов. Основная деятельность:
        </div>
        <div class="text__contacts3">
          <ol>
            <li>Обзоры программного обеспечения: подробное описание и анализ популярных приложений для работы с изображениями, картами, мультимедиа и модификации интерфейса Windows.</li>
            <li>Навигационные технологии: освещение текущего состояния GPS-рынка в России, включая обзоры картографических систем и анализ доступных решений.</li>
            <li>Технологические новости: публикация информации о новых продуктах, тенденциях и законодательных изменениях, влияющих на ИТ-сектор.</li>
          </ol>
        </div>
        <div class="text__contacts4">
          NEOSOFT.RU служит площадкой для обсуждения и популяризации технологий, предоставляя своим читателям полезную информацию для выбора и использования программных продуктов.
        </div>
        <div class="text__contacts5">Связаться с нами:</div>
        <div class="text__contacts6">Мы в Вконтакте</div>
        <div class="text__contacts6">Мы в Телеграм</div>
        <div class="text__contacts6">Мы в Ютубе</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background-container3 {
  background-color: rgb(0, 0, 0);
  background-image: url("@/assets/back.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh; /* На всю высоту экрана */
  display: flex; /* Для центрирования содержимого */
  justify-content: center;
  align-items: center;
  color: white; /* Цвет текста */
}
.contacts {
  
}

.text__contacts1 {
  color: rgb(30, 168, 22);
font-family: Inter;
font-size: 48px;
font-weight: 400;
line-height: 58px;
margin-top: 18px;
text-align: center;
}

.text__contacts2 {
  color: rgb(255, 255, 255);
font-family: Inter;
font-size: 32px;
font-weight: 400;
line-height: 39px;
margin-top: 19px;
text-align: left;
}

.text__contacts3 {
  color: rgb(255, 255, 255);
font-family: Inter;
font-size: 24px;
font-weight: 400;
line-height: 29px;
margin-top: 32px;
text-align: left;
margin-left: 50px;
}

.text__contacts4 {
  color: rgb(255, 255, 255);
font-family: Inter;
font-size: 24px;
font-weight: 400;
line-height: 29px;
margin-top: 21px;
text-align: left;
}

.text__contacts5 {
  text-align: left;
  color: rgb(255, 255, 255);
font-family: Inter;
font-size: 40px;
font-weight: 400;
line-height: 48px;
letter-spacing: 0%;
text-align: left;
margin-left: 6px;
}

.text__contacts6 {
  text-align: left;
  color: rgb(30, 168, 22);
font-family: Inter;
font-size: 32px;
font-weight: 400;
line-height: 39px;
margin-top: 30px;
text-align: left;
margin-left: 77px;
}


.background-container-black {
  background-color: rgb(0, 0, 0);
  color: white;
}

.background-container-default {
  background-color: rgb(255, 255, 255);
  color: black;
}
@media (max-width: 768px) {
  .text__contacts1{
    font-weight: 400;
  letter-spacing: 0%;
  }
  .text__contacts2{
    margin-top: 10px;
    font-size: 16px;
    line-height: 39px;
  }
  .text__contacts3{
    margin-top: 0px;
    font-size: 14px;
    line-height: 39px;
    margin-left: 0;
  }
  .text__contacts4{
    margin-top: 0px;
    font-size: 16px;
    line-height: 39px;
  }
  .text__contacts5{
    margin-top: 0px;
    font-size: 24px;
    line-height: 29px;
    margin-left: 0px;
  }
  .text__contacts6{
    margin-top: 0px;
    font-size: 20px;
    line-height: 24px;
    margin-left: 11px;
}
}
</style>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "UserContacts",
  setup() {
    const route = useRoute();

    // Меняем фон в зависимости от маршрута
    const backgroundClass = computed(() => {
      return route.name === "contacts" ? "background-container-black" : "background-container-default";
    });

    return {
      backgroundClass,
    };
  },
};
</script>
