<template>
    <div class="header__content">
        <header class="header">
            <div class="header__top">
                <div class="header__flex container">
                    <nav class="header__navbar">
                        <ul class="header__menu">
                            <li class="menu__item">
                                <router-link to="/" class="menu__link">Главная</router-link>
                            </li>
                            <li class="menu__item">
                                <router-link to="/catalog" class="menu__link">Каталог</router-link>
                            </li>
                            <li class="menu__item">
                                <router-link to="/about" class="menu__link">О компании</router-link>
                            </li>
                            <li class="menu__item">
                                <router-link to="/contacts" class="menu__link">Контакты</router-link>
                            </li>
                            <li class="menu__item">
                                <router-link to="/delivery" class="menu__link">Доставка и оплата</router-link>
                            </li>

                            <template v-if="!authenticated">
                                <li class="menu__item">
                                    <router-link to="/login" class="menu__link">Войти</router-link>
                                </li>
                            </template>
                            <template v-else>
                                <li class="menu__item">
                                    <router-link to="/account/history" class="menu__link">Личный кабинет</router-link>
                                </li>
                                <li class="menu__item">
                                    <a href="#" @click.prevent="signOut">Выйти</a>
                                </li>

                            </template>
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
                    <router-link to="/" class="navbar-brand">
                        <img src="/images/logo.png" alt="Logo">
                    </router-link>
                </div>

<!--                <div class="header__search">-->
<!--                    <div class="header__search-form">-->
<!--                        <input-->
<!--                                type="text"-->
<!--                                class="header__search-input"-->
<!--                                placeholder="Поиск"-->
<!--                                v-on:keydown.enter="search(searchValue)"-->
<!--                                v-model.trim.lazy="searchValue"-->
<!--                        >-->
<!--                        <button-->
<!--                                class="header__search-btn"-->
<!--                                @click="search(searchValue)"-->
<!--                        >-->
<!--                            <img src="/icons/search_white.svg" alt="найти">-->
<!--                        </button>-->
<!--                    </div>-->
<!--                </div>-->

<!--                <div class="header__controls">-->
<!--                    <router-link to="/account/history">-->
<!--                        <img src="/icons/person_black.svg" alt="аккаунт">-->
<!--                    </router-link>-->
<!--                    <router-link to="/cart">-->
<!--                    <span class="header__cart">-->
<!--                        <img src="/icons/shopping_cart_black.svg" alt="корзина">-->
<!--                        <span class="header__cart-badge">{{ CART.length }}</span>-->
<!--                    </span>-->
<!--                        <span class="header__cart-text">{{ TOTAL_PRICE_CART }}&nbsp;руб</span>-->
<!--                    </router-link>-->
<!--                </div>-->
            </div>
        </header>

        <header class="header__mobile container">
            <button class="header__button-menu">
                <span class="material-icons">menu</span>
            </button>
            <div class="header__logo">
                <router-link to="/" class="navbar-brand">
                    <img src="/images/logo.png" alt="Logo">
                </router-link>
            </div>
            <div class="header__controls">
<!--                <router-link to="/cart">-->
<!--                    <span class="header__cart">-->
<!--                        <img src="/icons/shopping_cart_black.svg" alt="корзина">-->
<!--                        <span class="header__cart-badge">{{ CART.length }}</span>-->
<!--                    </span>-->
<!--                </router-link>-->
            </div>
        </header>
    </div>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return ({
      })
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
    //     if (this.$route.path !== '/catalog') {
    //       this.$router.push('/catalog')
    //     }
    //   },
    //
    //   async signOut() {
    //     await this.signOutAction();
    //     await this.$router.push('/catalog');
    //     // await
    //   }
    // }
  }
</script>

<style scoped>

</style>
