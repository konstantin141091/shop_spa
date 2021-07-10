<template>
  <section class="reviews">
    <h2 class="section__title">Отзывы клиентов</h2>
    <div>
      <VueSlickCarousel :arrows="false" :dots="true" v-if="reviews.length > 0">
        <article
          v-for="review in reviews"
        >
          <h4>{{ review.name }}</h4>
          <p>{{ review.review }}</p>
        </article>
      </VueSlickCarousel>
    </div>
  </section>
</template>

<script>

export default {
  name: 'NewArrivalComponent',

  data() {
    return {
      settingsReviews: {
        arrows: true,
        dots: true,
        infinite: true
      },
      reviews: [
        {
          name: 'NameClient 1',
          review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem est eveniet incidunt iure maxime obcaecati, omnis quam reiciendis sed sit.'
        },
        {
          name: 'NameClient 2',
          review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut dicta doloribus eaque eius enim eos est et ex fugit in laudantium libero maxime nihil non nostrum, odit optio porro quasi quia reprehenderit repudiandae sed ut velit vitae! Accusamus asperiores debitis deleniti ex fuga fugiat illum ipsum reprehenderit? Maxime, nihil?.'
        },
        {
          name: 'NameClient 3',
          review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A eos, minima odio quaerat quam quo ut! Facere minus nam nisi quisquam tempora? Accusantium error et in inventore, minus mollitia neque placeat similique temporibus voluptatum? Quia?'
        },
      ]
    }
  },
  computed: {},
  methods: {}
}
</script>

<style lang="scss">

article {
  min-width: 300px;
  font-size: 1.6rem;
  text-align: left;
  color: $colorText;

  & h4 {
    margin-bottom: 15px;
    font-size: 2rem;
  }
}

</style>
