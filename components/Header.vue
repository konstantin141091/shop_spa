<template>
  <div class="header__content">
    <header class="header">
      <div class="header__top">
        <div class="header__flex container">
          <nav class="header__navbar">
            <ul class="header__menu">
              <li class="menu__item">
                <nuxt-link to="/" class="menu__link">Главная</nuxt-link>
              </li>
              <li class="menu__item">
                <nuxt-link to="/products" class="menu__link">Каталог</nuxt-link>
              </li>
              <li class="menu__item">
                <nuxt-link to="/about" class="menu__link">О компании</nuxt-link>
              </li>
              <li class="menu__item">
                <nuxt-link to="/contacts" class="menu__link">Контакты</nuxt-link>
              </li>
              <li class="menu__item">
                <nuxt-link to="/delivery" class="menu__link">Доставка и оплата</nuxt-link>
              </li>

              <!--                            <template v-if="!authenticated">
                                              <li class="menu__item">
                                                  <nuxt-link to="/login" class="menu__link">Войти</nuxt-link>
                                              </li>
                                          </template>
                                          <template v-else>
                                              <li class="menu__item">
                                                  <nuxt-link to="/account/history" class="menu__link">Личный кабинет</nuxt-link>
                                              </li>
                                              <li class="menu__item">
                                                  <a href="#" @click.prevent="signOut">Выйти</a>
                                              </li>

                                          </template>-->
            </ul>
          </nav>
          <p class="header__work-time">Доставка с 9:00 до 22:00</p>
          <div class="header__phone">
            <a class="header__phone-value" href="tel:+78008008080">+7(3519)46-66-11</a>
          </div>
        </div>
      </div>
      <div class="header__bottom container">
        <div class="header__logo">
          <nuxt-link to="/" class="navbar-brand">
            <img src="~/assets/images/logo.png" alt="Logo">
          </nuxt-link>
        </div>

        <div class="header__search">
          <div class="header__search-form">
            <input
              type="text"
              class="header__search-input"
              placeholder="Поиск"

            >
            <button
              class="header__search-btn"

            >
              <img src="~/assets/icons/search_white.svg" alt="найти">
            </button>
          </div>
        </div>

        <div class="header__controls">
          <nuxt-link to="/account/history">
            <img src="~/assets/icons/person_black.svg" alt="аккаунт">
          </nuxt-link>
          <nuxt-link to="/cart">
                    <span class="header__cart">
                        <img src="~/assets/icons/shopping_cart_black.svg" alt="корзина">
                        <span class="header__cart-badge">{{ cart.length }}</span>
                    </span>
            <span class="header__cart-text">{{ total_price }}&nbsp;руб</span>
          </nuxt-link>
        </div>
      </div>
    </header>

    <header class="header__mobile container">
      <button class="header__button-menu">
        <span class="material-icons">menu</span>
      </button>
      <div class="header__logo">
        <nuxt-link to="/" class="navbar-brand">
          <img src="~/assets/images/logo.png" alt="Logo">
        </nuxt-link>
      </div>
      <div class="header__controls">
        <nuxt-link to="/cart">
                    <span class="header__cart">
                        <img src="~/assets/icons/shopping_cart_black.svg" alt="корзина">
                        <span class="header__cart-badge">{{ cart.length }}</span>
                    </span>
        </nuxt-link>
      </div>
    </header>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
export default {
  name: "Header",
  data() {
    return ({})
  },

  computed: {
    ...mapGetters({
      cart: 'cart/all',
      total_price: 'cart/total_price'
    }),

  },

  // computed: {
  //   ...mapGetters([
  //     'CART', 'TOTAL_PRICE_CART', 'SEARCH_VALUE'
  //   ]),
  //   searchValue: {
  //     get() {
  //       return this.SEARCH_VALUE
  //     },
  //     set(value) {
  //       this.GET_SEARCH_VALUE(value)
  //     }
  //   },
  //   ...mapGetters({
  //     authenticated: 'auth/AUTHENTICATED',
  //     user: 'auth/USER',
  //   }),
  // },

  // methods: {
  //   ...mapActions({
  //     signOutAction: 'auth/SIGN_OUT'
  //   }),
  //   ...mapActions([
  //     'GET_SEARCH_VALUE'
  //   ]),
  //
  //   search(value) {
  //     this.GET_SEARCH_VALUE(value)
  //     if (this.$route.path !== '/products') {
  //       this.$router.push('/products')
  //     }
  //   },
  //
  //   async signOut() {
  //     await this.signOutAction();
  //     await this.$router.push('/products');
  //     // await
  //   }
  // }
}
</script>

<style lang="scss" scoped>
@import "assets/styles/_variables.scss";

.header {
  display: none;

  @media (min-width: 768px) {
    margin-bottom: 3rem;
    display: block;
  }
}

.header__mobile {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 5px;
  padding-bottom: 5px;

  @media (min-width: 768px) {
    display: none;
  }

  & > button {
    background: transparent;

    & > span {
      font-size: 30px;
    }
  }

  & > .header__logo {
    text-align: center;
    margin-right: 0;
    width: 180px;

    @media (max-width: 375px) {
      width: 150px;
    }
  }

  & > .header__cart {
    margin-right: 0;
  }

  & > .header__controls {
    display: flex;
    align-items: center;
  }
}

.header__top {
  padding-top: 15px;
  padding-bottom: 15px;
  background: #f7f7f7;
}

.header__flex {
  display: flex;
  justify-content: space-between;
}

.header__navbar {
  overflow: hidden;
  margin-right: 15px;
}

.header__menu {
  list-style-type: none;
  display: flex;
  grid-column-gap: 15px;


  & .menu__link {
    color: $colorText;
    white-space: nowrap;
    text-decoration: none;

    &:hover {
      color: $colorBtn;
    }

    &:active {
      color: $colorBtn !important;
    }
  }
}

.header__work-time {
  max-width: 250px;
  overflow: hidden;
  white-space: nowrap;
  color: #999999;
}

.header__phone-value {
  color: $colorText;
  white-space: nowrap;
}

.header__bottom {
  display: flex;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
}

.header__logo {
  margin-right: 50px;
  width: 250px;

  & img {
    width: 100%;
  }
}

.header__search {
  margin: 0 24px;
  flex-grow: 1;

  &-form {
    display: flex;
    height: 50px;
  }

  &-input {
    border-radius: 10px 0 0 10px;
    border: 1px solid #808080;
    border-right: none;
    min-width: 150px;
    width: 100%;
    height: 50px;
    padding: 0 15px;
    outline: none;
    font-size: 16px;

    &:focus {
      outline: none;
    }
  }

  &-btn {
    border-radius: 0 15px 15px 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    line-height: 1;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    background: #b63334;
    outline: none;
    padding: 0 15px;

    & > img {
      height: 40px;
    }
  }
}

.header__controls {
  display: flex;
  grid-column-gap: 20px;
}

.header__cart {
  position: relative;
  margin-right: 10px;

  &-badge {
    position: absolute;
    min-width: 1.6rem;
    height: 1.6rem;
    padding: 1px 3px;
    line-height: 1.6rem;
    font-size: 1.1rem;
    color: #ffffff;
    font-weight: 700;
    text-align: center;
    border-radius: 50%;
    top: -9px;
    right: 0;
    background-color: #ff4100;
  }

  &-text {
    color: #333333;
    font-size: 18px;
    font-weight: bold;
  }
}


</style>
