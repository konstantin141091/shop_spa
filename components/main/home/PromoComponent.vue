<template>
  <div class="promo">
    <div class="promo-img" :style="styleObject"></div>
    <div class="promo-info">
      <h1>«Башкирские Колбасы»<br>Качественная продукция ГОСТ</h1>
      <p>Свежая, вкусная мясная продукция нашего магазина - отличный выбор к вашему столу. Все наши продукты готовятся
        по ГОСТу, поэтому клиенты нам доверяют!</p>
      <Button
        btnText="Смотреть каталог"
        class="promo-btn"
        @click="click"
      />
    </div>

  </div>
</template>

<script>
import Button from "../../ui/Button"

import bannerHome from "assets/images/banner-sausage.jpg"

export default {
  name: 'PromoComponent',
  components: {Button},
  data() {
    return {
      styleObject: {
        background: `no-repeat left/50% url(${bannerHome})`,
        backgroundSize: 'cover',
        height: `100%`,
      }
    }
  },
  methods: {
    click() {
      this.$router.push('/products')
    }
  }
}
</script>

<style lang="scss" scoped>
.promo {
  margin-bottom: 3rem;
  width: 100%;
  height: 100%;
  position: relative;
  min-height: 500px;

  &-btn {
    padding: 15px 50px;
    border-radius: 5px;
  }

  &-info {
    position: absolute;
    width: 55%;
    height: 100%;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;


    h1 {
      font-size: 42px;
      margin-bottom: 36px;
    }

    p {
      font-size: 20px;
      margin-bottom: 36px;
      max-height: 29%;
      overflow: hidden;
    }
  }

  &-img {
    width: 55%;
    position: absolute;
  }
}

</style>
