<template>
  <div class="container">
    <PromoComponent/>
    <NewArrivalComponent/>
    <BenefitListComponent/>
<!--    <PromotionsComponent/>-->
    <ReviewsComponent/>
    <Feedback />
  </div>
</template>

<script>

import Feedback from "~/components/main/home/Feedback";
import PromoComponent from "~/components/main/home/PromoComponent"
import NewArrivalComponent from "~/components/main/home/NewArrivalComponent"
import BenefitListComponent from "~/components/main/home/BenefitListComponent";
import PromotionsComponent from "~/components/main/home/PromotionsComponent";
import ReviewsComponent from "~/components/main/home/ReviewsComponent";
export default {
  components: {Feedback, PromoComponent, NewArrivalComponent, BenefitListComponent, PromotionsComponent, ReviewsComponent}
}
</script>

<style>

</style>
