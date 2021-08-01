<template>
  <section class="feedback">
    <h2 class="section__title">Обратная связь</h2>

    <ValidationObserver v-slot="{handleSubmit}">
      <form
        method="post"
        class="feedback__form"
        @submit.prevent="handleSubmit(onSubmit)"
      >
        <div class="feedback__fields">
          <div class="feedback__field feedback__inputs">

            <ValidationProvider
              name="Name"
              rules="required|alpha_spaces"
              v-slot="{ errors }"
              tag="label"
              class="feedback__input"
            >
              <input
                name="Name"
                type="text"
                placeholder="Имя*"
                class="form-control grey-background"
                v-model.trim="formData.name"
              >
              <span>{{ errors[0] }}</span>
            </ValidationProvider>

            <ValidationProvider
              name="E-Mail"
              rules="required|email"
              v-slot="{ errors }"
              tag="label"
              class="feedback__input"
            >
              <input
                name="E-Mail"
                type="email"
                placeholder="Ваша почта*"
                class="form-control grey-background"
                v-model.trim="formData.email"
              >
              <span>{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
        </div>

        <ValidationProvider
          name="message-feedback"
          rules="required"
          v-slot="{ errors }"
          tag="label"
          class="feedback__field"
        >
            <textarea
              name="message-feedback"
              placeholder="Ваш вопрос, отзыв или пожелание*"
              class="grey-background form-control"
              v-model="formData.message"
            />
          <span>{{ errors[0] }}</span>
        </ValidationProvider>


        <div class="form-item">
          <ValidationProvider
            name="Accept Terms"
            rules="required|isAgree"
            v-slot="{ errors }"
            tag="div"
            class="checkbox-wrap"
          >
            <label class="checkbox">
              <input
                name="Accept Terms"
                type="checkbox"
                v-model="formData.acceptTerms"
              >
              <span class="checkmark"></span>
              Настоящим подтверждаю, что я ознакомлен и согласен с условиями оферты и политики конфиденциальности*
            </label>
            <span>{{ errors[0] }}</span>
          </ValidationProvider>
        </div>

        <div class="feedback__submit">
          <button type="submit" class="feedback__btn button" >
<!--            tect="Submit"-->
            Отправить
          </button>
        </div>
      </form>
    </ValidationObserver>

  </section>
</template>

<script>

import Vue from 'vue'
export default Vue.extend({
  name: 'Feedback',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: '',
        acceptTerms: null,
      }
    }
  },
  methods: {
    onSubmit() {
      if (this.formData) console.log(this.formData)
      console.log()
    }
  }

})
</script>

<style lang="scss" scoped>

//.button:disabled {
//  background-color: grey;
//}

.checkbox-wrap {
  position: relative;
  margin-bottom: 3rem;

  & > span {
    position: absolute;
  }
}

.grey-background {
  background: #f7f7f7;
  width: 100%;
  border-radius: 5px;
  font-size: 16px;
  padding: 6px 10px;
}

.feedback {
  padding-bottom: 3rem;
  text-align: center;
  max-width: 680px;
  margin: 0 auto;

  &__form {
    span {
      display: block;
      color: #FF4749;
      font-size: 14px;
    }
  }

  &__title {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 3rem;
  }

  &__error {
    color: red;
  }
}

.feedback__field {
  text-align: left;
  position: relative;
  display: block;
  margin-bottom: 2rem;

  & textarea {
    height: 115px;
    resize: none;
  }

  & span {
    position: absolute;
  }
}

.form-item {
  margin-bottom: 2rem;
  text-align: left;
  position: relative;
}

.feedback__inputs {
  margin-bottom: 0;
  @media (min-width: 565px) {
    display: flex;
    column-gap: 2rem;
    margin-bottom: 2rem;
  }
}

.feedback__input {
  margin-bottom: 2rem;
  min-width: 250px;
  width: 100%;
  display: inline-block;
  position: relative;

  span {
    position: absolute;
  }

  @media (min-width: 565px) {
    margin-bottom: 0;
    width: 50%;
  }
}

.feedback__btn {
  height: 50px;
}

</style>
