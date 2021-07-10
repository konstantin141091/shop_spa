<template>
  <section class="reviews">
    <h2 class="section__title">Отзывы клиентов</h2>

    <div class="reviews__box">
      <article
        v-for="review in reviews"
      >
        <h4>{{ review.name }}</h4>
        <p>{{ review.review }}</p>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Reviews',
  data() {
    return {
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
  }
}
</script>

<style lang="scss" scoped>

.reviews {
  padding-bottom: 3rem;

  &__box {
    @media (min-width: 1024px) {
      display: flex;
      align-items: flex-start;
      grid-gap: 3rem;
    }
  }
}

article {
  max-width: 450px;
  min-width: 350px;
  font-size: 1.6rem;
  text-align: left;
  color: $colorText;
  background: $greyLight;
  padding: 30px;
  border-radius: 5px;

  & h4 {
    margin-bottom: 15px;
    font-size: 2rem;
  }
}
</style>
