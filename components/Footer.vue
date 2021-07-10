<template>
  <footer>
    <div class="footer__top">
      <div class="footer__area-menu container">
        <div
          class="menu__item"
          v-for="m in menu"
          v-if="$store.getters['isMobile']"
        >
          <div class="menu__title" @click="m.visible=!m.visible">
            <p>{{ m.name }}</p>
            <button
              class="menu__show-btn"
              type="button">
              <fa :icon="['fas', 'chevron-down']" class="icon"/>
            </button>
          </div>
          <div v-show="m.visible">
            <nuxt-link
              v-for="(item, index) in m.items"
              :key="index"
              :to="item.link"
              class="menu__link"
              v-text="item.title"
            ></nuxt-link>
          </div>
        </div>

        <div
          class="menu__item"
          v-for="m in menu"
          v-if="$store.getters['isDesktop']"
        >
          <div class="menu__title">
            <p>{{ m.name }}</p>
          </div>
          <div>
            <nuxt-link
              v-for="(item, index) in m.items"
              :key="index"
              :to="item.link"
              class="menu__link"
              v-text="item.title"
            ></nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <div class="footer__bottom">
      &copy;&nbsp;{{ date }}&nbsp;Любое использование контента без письменного разрешения запрещено
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      date: null,
      menu: {
        menuAbout: {
          name: "О магазине",
          visible: false,
          items: [
            {title: 'Адреса магазинов', link: '/contacts'},
            {title: 'Акции и скидки', link: '/promotions'},
            {title: 'Юридическим лицам', link: '/return-policy'},
            // {title: 'Как заказать', link: '/contacts'},
            {title: 'Обмен и возврат', link: '/return-policy'},
          ]
        },
        menuCustomer: {
          name: "Покупателям",
          visible: false,
          items: [
            {title: 'Личный кабинет', link: '/account/history'},
            {title: 'Мои заказы', link: '/account/history'},
            {title: 'Вопросы и ответы', link: '/account/history'},
            {title: 'Политика возврата', link: '/return-policy'},
          ]
        },
        menuInfo: {
          name: "Информация",
          visible: false,
          items: [
            {title: 'Политика конфиденциальности и оферта', link: '/offer'},
            {title: 'Пользовательское соглашение', link: '/user-agreement'},
          ]
        },
      }
    }
  },
  computed: {},
  methods: {},
  created() {
    this.date = new Intl.DateTimeFormat('ru-Ru', {'year': 'numeric'}).format(new Date())
  }
}
</script>

<style lang="scss" scoped>

.footer {
  &__top {
    margin-top: 3rem;
    background: #f7f7f7;
  }

  &__area-menu {
    padding-top: 3rem;
    padding-bottom: 3rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  &__bottom {
    background: #ffffff;
    color: $colorText;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 7rem;
  }
}

.menu {
  &__item {
    text-align: left;
    color: $colorText;
  }

  &__item + &__item {
    margin-top: 3rem;
  }

  &__title {
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;

    & > p {
      font-weight: bold;
      font-size: 1.6rem;
    }
  }

  &__link {
    display: block;
    color: $colorText;
    font-size: 1.6rem;
    padding-left: 1rem;
    margin-top: 1.5rem;

    &:hover {
      color: $colorBtn;
    }
  }

  &__show-btn {
    background: none;
  }
}

@media (min-width: 768px) {
  .menu {
    &__title {
      padding-left: 1rem;
    }
    &__item + &__item {
      margin-top: 0;
      margin-left: 6rem;
    }
  }
  .footer__area-menu {
    padding-top: 3rem;
    padding-bottom: 3rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>
