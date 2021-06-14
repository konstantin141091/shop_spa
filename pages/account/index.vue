<template>
    <div class="container account">
        <nav class="account__menu">
            <ul>
                <li class="account__li"><router-link to="/account/history" class="account__link">История заказов</router-link></li>
                <li class="account__li"><router-link to="/account/profile" class="account__link">Мои данные</router-link></li>
                <template v-if="isAdmin">
                    <li class="account__li"><router-link to="/account/admin" class="account__link">Админ панель</router-link></li>
                    <li class="account__li"><router-link to="/account/admin/product" class="account__link">Админ продукты</router-link></li>
                    <li class="account__li"><router-link to="/account/admin/category" class="account__link">Админ категории</router-link></li>
                </template>
                <li class="account__li"><a href="#" @click.prevent="signOut" class="account__link">Выйти</a></li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
  // import {mapActions, mapGetters} from "vuex/dist/vuex.mjs";
  export default {
    layout: 'app',
    name: "index",
    // computed: {
    //   ...mapGetters({
    //     authenticated: 'auth/AUTHENTICATED',
    //     isAdmin: 'auth/ADMIN',
    //   })
    // },
    //
    // methods: {
    //   ...mapActions({
    //     signOutAction: 'auth/SIGN_OUT'
    //   }),
    //
    //   async signOut () {
    //     await this.signOutAction();
    //
    //     await this.$router.push('/');
    //   }
    // },
    // mounted() {
    //   if (!this.authenticated) {
    //     this.$router.push('/login');
    //   }
    // }
  }
</script>

<!--<style scoped>-->
<!--    &lt;!&ndash;.account{&ndash;&gt;-->
<!--    &lt;!&ndash;    margin-top: 20px;&ndash;&gt;-->
<!--    &lt;!&ndash;    display: flex;&ndash;&gt;-->
<!--    &lt;!&ndash;&__menu {&ndash;&gt;-->
<!--    &lt;!&ndash;     margin-right: 40px;&ndash;&gt;-->
<!--    &lt;!&ndash;& ul {&ndash;&gt;-->
<!--    &lt;!&ndash;      display: flex;&ndash;&gt;-->
<!--    &lt;!&ndash;      flex-direction: column;&ndash;&gt;-->
<!--    &lt;!&ndash;  }&ndash;&gt;-->
<!--    &lt;!&ndash;}&ndash;&gt;-->
<!--    &lt;!&ndash;&__li {&ndash;&gt;-->
<!--    &lt;!&ndash;     margin-bottom: 15px;&ndash;&gt;-->
<!--    &lt;!&ndash; }&ndash;&gt;-->
<!--    &lt;!&ndash;&__li:last-child {&ndash;&gt;-->
<!--    &lt;!&ndash;     margin-bottom: 0;&ndash;&gt;-->
<!--    &lt;!&ndash; }&ndash;&gt;-->
<!--    &lt;!&ndash;&__link {&ndash;&gt;-->
<!--    &lt;!&ndash;     color: #1f7d63;&ndash;&gt;-->
<!--    &lt;!&ndash;     font-size: 18px;&ndash;&gt;-->
<!--    &lt;!&ndash;     font-weight: 400;&ndash;&gt;-->
<!--    &lt;!&ndash;     text-decoration: underline;&ndash;&gt;-->
<!--    &lt;!&ndash; }&ndash;&gt;-->
<!--    &lt;!&ndash;&__link:hover {&ndash;&gt;-->
<!--    &lt;!&ndash;     text-decoration: none;&ndash;&gt;-->
<!--    &lt;!&ndash; }&ndash;&gt;-->
<!--    &lt;!&ndash;}&ndash;&gt;-->

<!--</style>-->
