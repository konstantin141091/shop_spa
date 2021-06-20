<template>
  <div>
    <Notification
      :messages="messages"
    />

    <div class="catalog">
      <div class="product"
           v-for="product in paginatedData"
           :key="product.id"
      >
        <nuxt-link
          to="product_id"
          class="product__img"
        >
          <img
            :src="product.img ? require(`~/assets/images/products/${product.img}`) : require('~/assets/images/no_photo.png')"
            :alt="product.name">
        </nuxt-link>
        <div class="product__text">
          <nuxt-link
            :to="product.name"
            class="product__title"
          > {{ product.name }}, 1 {{ product.unit }}
          </nuxt-link>
          <p class="product__price">{{ product.price }} руб.</p>
        </div>
        <div class="product__btn">
          <button
            @click="addToCart"
          >В корзину
          </button>
        </div>
      </div>
    </div>

    <div class="pagination" v-if="catalogData.length > usersPerPage">
      <button
        class="pagination__btn"
        @click="prevPage"
      >Предыдущая
      </button>
      <div class="page__box">
        <div
          class="page"
          v-for="page in pages"
          :key="page"
          :class="{'page__selected': page === pageNumber}"
          @click="pageClick(page)"
        >
          {{ page }}
        </div>
      </div>
      <button
        class="pagination__btn"
        @click="nextPage"
      >Следующая
      </button>
    </div>
  </div>
</template>

<script>
import Notification from "~/components/ui/Notification"

export default {
  name: 'PaginationCatalog',
  components: { Notification},
  props: {
    catalogData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      usersPerPage: 9,
      pageNumber: 1,
      messages: []
    }
  },
  computed: {
    pages() {
      return Math.ceil(this.catalogData.length / this.usersPerPage)
    },
    paginatedData() {
      const start = (this.pageNumber - 1) * this.usersPerPage
      const end = start + this.usersPerPage
      return this.catalogData.slice(start, end);
    }
  },
  methods: {
    addToCart(data) {
      console.log('Add to cart', data)
    },
    pageClick(page) {
      this.pageNumber = page
    },
    prevPage() {
      if (this.pageNumber > 1) {
        this.pageNumber--
      }
    },
    nextPage() {
      if (this.pageNumber <= this.pages - 1) {
        this.pageNumber++
      }

    }
  }

}
</script>

<style lang="scss" scoped>
@import "assets/styles/_variables.scss";

.catalog {
  display: flex;
  flex-wrap: wrap;
  column-gap: 3rem;
  row-gap: 3rem;
}

.pagination {
  display: flex;
  align-items: center;
  margin-top: 3rem;

  .page {
    width: 3rem;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    color: $colorText;
    border-radius: 5px;


    &:hover {
      background-color: lighten($colorBtn, 10%);
      cursor: pointer;
      color: #ffffff;
    }

    &__box {
      margin-left: 3rem;
      margin-right: 3rem;
      display: flex;
      align-items: center;
    }
  }

  .page + .page {
    margin-left: 5px;
  }
}

.pagination__btn {
  background: $greyLight;
  color: $colorBtn;
  padding: 12px;
  font-size: 12px;
  border-radius: 5px;
  border: 1px solid transparent;
  font-weight: bold;

  &:hover {
    border: 1px solid $colorBtn;
  }

  &:active {
    background: lighten($greyLight, 10%);
  }
}

.page__selected {
  background-color: $colorBtn;
  color: #ffffff !important;
}

.product {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid $greyLight;
  max-width: 230px;
  min-width: 180px;
  height: 350px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    //padding: 10px;
  }

  &__img {
    display: block;
    height: 180px;
    margin-bottom: 1.5rem;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }

  &__text {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
  }

  &__title {
    font-size: 16px;
    color: $colorText;

    &:hover {
      color: $colorBtn;
    }
  }

  &__price {
    font-size: 2.4rem;
    font-weight: bold;
  }

  &__btn {
    padding: 10px;

    button {
      font-size: 16px;
      cursor: pointer;
      color: #ffffff;
      background-color: $colorBtn;
      width: 100%;
      padding: 10px;
      border-radius: 5px;
    }
  }

}

</style>
