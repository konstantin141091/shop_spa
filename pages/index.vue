<template>
  <div class="container">
    <PromoComponent />
    <NewArrivalComponent />
    <BenefitListComponent />
<!--    <PromotionsComponent/>-->
    <Reviews v-if="this.$store.getters['isDesktop']"/>
    <mobileReviews v-if="this.$store.getters['isMobile']"/>
    <Feedback />
  </div>
</template>

<script>

import Feedback from "~/components/main/home/Feedback";
import PromoComponent from "~/components/main/home/PromoComponent"
import NewArrivalComponent from "~/components/main/home/NewArrivalComponent"
import BenefitListComponent from "~/components/main/home/BenefitListComponent";
import PromotionsComponent from "~/components/main/home/PromotionsComponent";
import Reviews from "@/components/main/home/Reviews";
import mobileReviews from "@/components/main/home/mobile/mobileReviews";
export default {
  components: {Feedback, PromoComponent, NewArrivalComponent, BenefitListComponent, PromotionsComponent, Reviews, mobileReviews},
  computed: {

  }
}
</script>

<style>

</style>
