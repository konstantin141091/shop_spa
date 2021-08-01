<template>
  <button
    :class="[ 'button', btnClass ]"
    :type="btnType"
    :disabled="disabled"
    @click="click($event)"
  >
    {{ btnText }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    btnText: {
      type: String,
      default: 'Кнопка'
    },
    btnClass: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false
    },
    btnType: {
      type: String,
      default: 'submit',
    }
  },
  methods: {
    click(e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss">

.button {
  width: fit-content;
  position: relative;
  place-content: center;
  place-items: center;
  min-width: 150px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  font-size: 2rem;
  line-height: 2rem;
  color: #ffffff;
  border-radius: 5px;
  white-space: nowrap;
  background: $colorBtn;
  outline: none;

  &:hover {
    background: linear-gradient(180deg, #CE2424 45.31%, #BB1717 100%);
  }
  &:active {
    background: linear-gradient(180deg, #BB1717 100%, #CE2424 45.31%);
  }
}

</style>

