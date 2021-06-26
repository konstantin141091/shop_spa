<template>
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
    try {
      if (store.getters['products/all']) {
        await store.dispatch('products/fetch')
      }
      if (store.getters['categories/all']) {
        await store.dispatch('categories/fetch')
      }
    } catch (e) {
      console.log(e)
    }
  },
  data() {
    return {
      loading: false,
    }
  },

  async created() {
    // вызываем запросы к бд, чтобы сохранить данные в store
    await this.$store.dispatch('products/fetch')
    await this.$store.dispatch('categories/fetch')
    this.loading = false
  }
}
</script>
<style lang="scss">
#__nuxt, #__layout, .wrap {
  height: 100%;
}
</style>
