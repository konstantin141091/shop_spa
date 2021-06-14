<template>
  <div class="wrapper-layout">
    <Header/>
    <main class="main-layout">
      <nuxt/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  components: {Header, Footer},
}
</script>
<style lang="scss">
#__nuxt, #__layout {
  height: 100%;
}
</style>
