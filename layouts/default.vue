<template>
<!--  <div></div>-->
  <div class="wrap">
    <Loader v-if="loading"/>
    <div class="wrapper-layout">
      <Header/>
      <main class="main-layout">
        <nuxt />
      </main>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loader from "../components/ui/Loader";

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
      loading: false,
    }
  },
  computed: {
    // isBrowser() {
    //   if (process.browser) {
    //     this.$store.dispatch('cart/initCart');
    //   }
    // }
  },

  async created() {
    // вызываем запросы к бд, чтобы сохранить данные в store
    await this.$store.dispatch('products/fetch');
    await this.$store.dispatch('categories/fetch');
    this.$store.dispatch('cart/initCart');
    this.loading = false
  }
}
</script>
<style lang="scss">
#__nuxt, #__layout, .wrap {
  height: 100%;
}
</style>
