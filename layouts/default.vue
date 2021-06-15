<template>
  <div class="wrap">
    <Loader v-if="loading"/>
    <div class="wrapper-layout" v-else>
      <Header/>
      <main class="main-layout">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
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

  async mounted() {
    // вызываем запросы к бд, чтобы сохранить данные в store
    await this.$store.dispatch('products/GET_PRODUCTS');
    await this.$store.dispatch('GET_CATEGORIES');
    this.loading = false
  }
}
</script>
<style lang="scss">
#__nuxt, #__layout {
  height: 100%;
}
</style>
