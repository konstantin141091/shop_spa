<template>
  <!--  <div></div>-->
  <div class="wrap">
    <Loader v-if="loading"/>
    <div
      class="wrapper-layout"
      v-else
    >
      <Header/>
      <main class="main-layout">
        <nuxt/>
      </main>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header"
import Footer from "../components/Footer"
import Loader from "../components/ui/Loader"

const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i)
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i)
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i)
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i)
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i)
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows())
  },
}

export default {
  components: {Header, Footer, Loader},
  async fetch({store}) {
    console.log('sdf');
    try {
      if (store.getters['products/all']) {
        await store.dispatch('products/fetch')
      }
      if (store.getters['categories/all']) {
        await store.dispatch('categories/fetch')
      }
      // if (store.getters['cart/all']) {
      //   await store.dispatch('cart/initCart')
      // }
    } catch (e) {
      console.log(e)
    }
  },
  // async asyncData(context) {
  //   console.log('dta');
  //   await store.dispatch('cart/initCart')
  // },
  data() {
    return {
      loading: true,
    }
  },
  computed: {
    // isBrowser() {
    //   if (process.browser) {
    //     this.$store.dispatch('cart/initCart');
    //   }
    // }
  },

  methods: {
    initDevice() {
      if (!isMobile.any() || window.innerWidth > 768) {
        this.$store.dispatch('setDesktop')
        console.log('desktop', this.$store.getters['isDesktop'])
      } else {
        this.$store.dispatch('setMobile')
        console.log('mobile', this.$store.getters['isMobile'])
      }
    }
  },

  async created() {
    // вызываем запросы к бд, чтобы сохранить данные в store
    await this.$store.dispatch('products/fetch')
    await this.$store.dispatch('categories/fetch')
    this.$store.dispatch('cart/initCart')
    this.loading = false
  },
  mounted() {
    //принудительно обновить браузер или придумать альтернативу
    this.initDevice()
  },
}
</script>
<style lang="scss">
#__nuxt, #__layout, .wrap {
  height: 100%;
}
</style>
