<template>
  <div class="wrap">
<!--    <Loader v-if="loading"/>-->
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
  data() {
    return {
      loading: true,
    }
  },

  async created() {
    // вызываем запросы к бд, чтобы сохранить данные в store
    // console.log(await this.$store.dispatch('products/fetch'))
    // await this.$store.dispatch('products/fetch')
    // await this.$store.dispatch('GET_CATEGORIES');
    await this.$store.dispatch('products/fetch')
    this.loading = false
  }
}
</script>
<style lang="scss">
#__nuxt, #__layout {
  height: 100%;
}
</style>
