<template>
    <div class="admin">
        <h1 class="admin__title">Админ панель сайта</h1>
        <p>Админ панель сайта!!!Здесь можно редактировать всё!</p>
    </div>
</template>

<script>
  export default {
    layout: 'app',
    name: "index",
    // computed: {
    //   ...mapGetters({
    //     isAdmin: 'auth/ADMIN',
    //   })
    // },
    // mounted() {
    //   if (!this.isAdmin) {
    //     this.$router.push('/account');
    //   }
    // }
  }
</script>

<!--<style scoped>-->
<!--    .admin {-->
<!--    &__title {-->
<!--         font-size: 34px;-->
<!--         font-weight: 700;-->
<!--         color: #333333;-->
<!--         margin-bottom: 10px;-->
<!--     }-->
<!--    }-->
<!--</style>-->
