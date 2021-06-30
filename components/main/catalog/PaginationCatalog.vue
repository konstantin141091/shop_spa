<template>
  <div>
    <Notification
      :messages="messageAddProduct"
    />

    <div class="catalog">
      <ProductCardComponent
        v-for="item in paginatedData"
        :key="'new-product-' + item.id"
        :product-data="item"
        :image-url="item.img ? imageUrl + item.img : '/images/no_photo.png'"
        @addToCart="handleAddToCart(item)"
      />
    </div>

    <Paginate
      v-if="catalogData.length > elementsPerPage"
      :page-count="pageCount"
      :click-handler="pageChangeHandler"
      :prev-text="'Предыдущая'"
      :next-text="'Следующая'"
      :container-class="'pagination'"
      :page-link-class="'page'"
      :prev-link-class="'pagination__btn__prev'"
      :next-link-class="'pagination__btn__next'"
      v-model="page"
    />

  </div>
</template>

<script>
import ProductCardComponent from "../products/ProductCardComponent"

import Notification from "~/components/ui/Notification"

export default {
  components: { Notification, ProductCardComponent },
  props: {
    catalogData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      elementsPerPage: 9,
      items: [],
      page: 1,
      messageAddProduct: [],
    }
  },
  computed: {
    imageUrl() {
      return `/images/products/`
    },
    pageCount() {
      return Math.ceil(this.catalogData.length / this.elementsPerPage)
    },
    paginatedData() {
      if(this.page > this.pageCount) this.page = 1
      // this.page = Math.min(this.pageCount, this.page)
      const start = (this.page - 1) * this.elementsPerPage
      const end = this.page * this.elementsPerPage
      return this.catalogData.slice(start, end)
    } //this.$route.query.page
  },
  methods: {
    pageChangeHandler(page) {
      this.page = page
    },
    addToCart(data) {
      this.$store.dispatch('cart/addToCart', data)
    },

    async handleAddToCart(data) {
      this.addToCart(data)
      let timeStamp = Date.now().toLocaleString()
      this.messageAddProduct.unshift(
        {name: 'Товар добавлен в корзину!', id: timeStamp}
      )
    },
  }

}
</script>

<style lang="scss">
@import "../../../assets/styles/variables";

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
    display: block;
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

  .active {
    a {
      background-color: $colorBtn;
      color: #ffffff !important;
    }
  }

  .disabled {
    & > .pagination__btn {
      &__prev, &__next {
        color: $grey !important;
        border-color: transparent;
        background: $greyLight;
        cursor: context-menu;
      }
    }
  }

  .page + .page {
    margin-left: 5px;
  }
}

.pagination__btn {
  &__prev, &__next {
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

  &__prev {
    margin-right: 3rem;
  }

  &__next {
    margin-left: 3rem;
  }
}
</style>
