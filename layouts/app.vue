<template>
<!--    <div class="wrap">-->
<!--&lt;!&ndash;        <Loader v-if="loading"/>&ndash;&gt;-->
<!--        <div class="wrapper-layout" v-else>-->
<!--&lt;!&ndash;            <Header/>&ndash;&gt;-->
<!--            <main class="main-layout">-->
<!--                <keep-alive>-->
<!--&lt;!&ndash;                    <router-view></router-view>&ndash;&gt;-->
<!--                </keep-alive>-->
<!--            </main>-->
<!--&lt;!&ndash;            <Footer/>&ndash;&gt;-->
<!--        </div>-->
<!--    </div>-->



    <div class="wrap">
        <!--        <Loader v-if="loading"/>-->
        <div class="wrapper-layout">
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
  // import Loader from "../ui/Loader";

  export default {
    name: "MainLayout",
    // components: {Loader, Header, Footer},
    components: {Header, Footer},
    data() {
      return {
        loading: true,
      }
    },
    async mounted() {
      // вызываем запросы к бд, чтобы сохранить данные в store
      // await this.$store.dispatch('products/GET_PRODUCTS');
      // await this.$store.dispatch('GET_CATEGORIES');
      // this.loading = false
    }
  }
</script>

<style scoped>
    .wrap {
        height: 100%;
    }
</style>

