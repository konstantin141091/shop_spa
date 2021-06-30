<template>
  <div class="container cart">
    <h1 class="cart__title">Корзина</h1>

    <div v-if="!cartList.length">
      <CartEmpty />
    </div>

    <div
      v-else
      class="cart__flex"
    >
      <div class="cart__list">
        <CartItem
          v-for="(item, index) in cartList"
          :key="item.id"
          :imageUrl="item.img ? imageUrl + item.img : '/images/no_photo.png'"
          :name = item.name
          :price = item.price
          :unit = item.unit
          :quantity="item.quantity"
          :totalPriceProduct="item.totalPriceProduct"
          @deleteFromCart="deleteFromCart(index)"
          @incrementItem="incrementItem(item.id)"
          @decrementItem="decrementItem(item.id)"
        />
      </div>

      <CartControl />
    </div>

  </div>
</template>

<script>
import CartEmpty from "~/components/main/cart/CartEmpty";
import CartItem from "~/components/main/cart/CartItem";
import CartControl from "~/components/main/cart/CartControl";

export default {
  components: {CartControl, CartItem, CartEmpty},
  computed: {
    cartList() {
      return this.$store.getters['cart/all']
    },
    imageUrl() {
      return `/images/products/`
    },

  },
  methods: {
    deleteFromCart(index) {
      this.$store.dispatch('cart/deleteFromCart', index)
    },
    incrementItem(index) {
      this.$store.dispatch('cart/incrementToProduct', index)
    },
    decrementItem(index) {
      this.$store.dispatch('cart/decrementToProduct', index)
    },
  }
}
</script>

<style lang="scss" scoped>
.cart {
  &__title {
    font-size: 3.2rem;
    font-weight: bold;
    margin-bottom: 3rem;
  }
  &__flex {
    display: flex;
    align-items: flex-start;
  }
  &__list {
    flex-grow: 1;
    margin-right: 3rem;
  }
}
</style>
