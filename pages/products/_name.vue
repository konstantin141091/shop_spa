<template>
  <div class="container">
    <h1>Product id {{ $route.params.id }}</h1>
    <pre>{{ $route.params.id }}</pre>

<!--    <div class="flex-box">
      <div class="left">
&lt;!&ndash;        <img :src="require(`/images/products/${products.img}`)" :alt="products.name">&ndash;&gt;
      </div>

      <div class="right product">
        Продукт
        <h1 class="product__title">{{ product.name }}</h1>
        <div class="product__info">
          <div class="product__buy">
            <p class="product__price">{{ product.price }} руб.</p>
            <Button
              btnClass="product__btn"
              btnText="В корзину"
            />
          </div>

          <div class="product__description">
            <div>
              <h3>Описание</h3>
              <p>{{ product.description }}</p>
            </div>

            <div>
              <h3>Характеристики</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, vel.</p>
            </div>
          </div>
        </div>
      </div>
    </div>-->
  </div>
</template>

<!--<script>
import Button from "~/components/ui/Button"

export default {
  components: {Button},
  async asyncData({ params, $axios }) {
    const product = await $axios.$get(`https://api.nuxtjs.dev/posts/id`)
    console.log(product)
    return { product }
  }
}
</script>-->

<!--<style lang="scss" scoped>
@import "assets/styles/_variables.scss";

.flex-box {
  display: flex;
}

.left {
  width: 50%;
  margin-right: 5%;

  img {
    width: 100%;
  }
}

.right {
  width: 45%;
}

.product {
  &__title {
    font-size: 3.2rem;
    font-weight: bold;
    margin-bottom: 3rem;
  }

  &__buy {
    background: $greyLight;
    padding: 40px 20px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;

  }

  &__price {
    font-size: 3.2rem;
    font-weight: bold;
  }

  &__btn {
    padding: 8px 16px;
    min-width: 200px;
  }
}

.product__description {
  div {
    margin-bottom: 1.5rem;
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
}
</style>-->
