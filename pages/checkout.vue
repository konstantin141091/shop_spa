<template>
  <div class="container checkout">
    <div class="loader-wrapper" v-show="loading">
      <Loader></Loader>
    </div>
    <h1 class="checkout__title">Оформление заказа</h1>
    <div class="checkout__box">

      <form class="checkout__form" @submit.prevent="submitHandler">
        <div class="checkout-block">
          <h2 class="form__title">Контактные данные</h2>

          <div class="form-control">
            <label for="client-name">Контактное лицо (ФИО)</label>
            <input
              type="text"
              id="client-name"
              name="Client Name"
              placeholder="Фамилия Имя"
            >
            <span>ошибка</span>
          </div>

          <div class="form-control">
            <label for="client-tel">Контактный телефон</label>
            <input
              type="text"
              id="client-tel"
              name="Client Phone"
              placeholder="917-000-00-00"
            >
            <span>ошибка</span>
          </div>

        </div>

        <div class="checkout-block">
          <h3 class="form__title">Доставка</h3>

          <div class="form-control">
            <label for="client-address">Населенный пункт</label>
            <input
              type="text"
              id="client-address"
              name="Client Address"
              placeholder="Челябинская область, г. Магнитогорск, ул. Полевая, д.0"
            >
            <span>ошибка</span>
          </div>

          <div class="form-radio">
            <input type="radio" id="pickup" name="Delivery" value="самовывоз">
            <label for="pickup">Самовывоз</label>
            <span></span>
          </div>

          <div class="form-radio">
            <input type="radio" id="deliveryByCourier" name="Delivery" value="курьер">
            <label for="deliveryByCourier">Курьером</label>
            <span></span>
          </div>

          <div class="form-control">
            <label for="comment">Комментарии к заказу</label>
            <input type="email" id="comment" name="Comment">
            <span></span>
          </div>

          <div class="form-control">
            <label for="email">Email</label>
            <input type="email" id="email" name="E-mail">
            <span></span>
          </div>

        </div>

        <div class="checkout-block">
          <h3 class="form__title">Способ оплаты</h3>
          <p>Оплата производится наличными или по карте курьеру</p>
        </div>

        <button type="submit" class="form__btn button">
          Подтвердить заказ
        </button>

      </form>

      <BasketItemList />
    </div>

  </div>
</template>

<script>
import Loader from "~/components/ui/Loader"

import BasketItemList from "~/components/main/checkout/BasketItemList";
import {mapGetters} from 'vuex'

export default {
  components: { BasketItemList, Loader },
  data() {
    return {
      name: '',
      numberPhone: '',
      deliveryAddress: '',
      deliveryMethod: 'самовывоз',
      deliveryText: '',
      email: '',
      loading: false,

    }
  },

  computed: {
    ...mapGetters([
      'cart/all', 'cart/totalPrice'
    ]),
    ...mapGetters({
      // authenticated: 'auth/AUTHENTICATED',
      // user: 'auth/USER',
    })
  },

  methods: {

    formIsValid() {

    },

    submitHandler() {
      console.log('start');
      if (this.formIsValid()) {
      }
      console.log('no');
    },

    async handleCreateOrder() {
      this.loading = true;
      const basketResponse = await this.$store.dispatch('API_ADD_CART', this.CART);
      if (basketResponse.status === 204) {

        const order = {
          name: this.userName,
          phone: this.userNumberPhone,
          email: this.email,
          address: this.deliveryAddress,
          comment: this.deliveryText,
          delivery_method: this.deliveryMethod,
          delivery_cost: 1000,
          total_price: this.totalPrice,
        };
        const orderResponse = await this.$store.dispatch('API_ADD_ORDER', order);
        if (orderResponse.status === 201) {
          console.log('Заказ добавился в бд. Нужно как то сказать об этом юзеру');
          console.log('Нужно скинуть корзину в local storage');
          await this.$store.dispatch('CLEAR_CART');
          await this.$router.push('/order');
        } else {
          console.log('Ошибка. Не удалось добавить заказ в бд!', orderResponse.status);
        }

      } else {
        console.log('Ошибка. Не удалось добавить корзину в бд!');
      }
      this.loading = false;
    },


  },

  // mounted() {
  //   if (this.authenticated) {
  //     this.userName = this.user.name;
  //     this.userNumberPhone = String(this.user.phone);
  //     this.deliveryAddress = this.user.location + ', ' + this.user.address;
  //     this.email = this.user.email;
  //   }
  // }
}
</script>

<style lang="scss" scoped>

.loader-wrapper {
  position: fixed;
  z-index: 1000;
  background: rgba(0, 0, 0, .3);
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

.checkout {
  position: relative;

  &__title {
    font-size: 3.2rem;
    font-weight: bold;
    margin-bottom: 3rem;
  }

  &__box {
    display: flex;
    align-items: flex-start;
  }

  &__form {
    flex-grow: 1;
    margin-right: 3rem;
  }
}

//form

.form {
  &__title {
    font-size: 24px;
    margin-bottom: 1.5rem;
  }

  &__btn {
    height: 40px;
    width: 100%;
    margin-top: 1.5rem;
  }
}

.regular-client {
  margin-bottom: 1.5rem;
}
</style>

