<template>
  <section class="feedback">
    <h2 class="feedback__title">Обратная связь</h2>

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
            >
              <label class="feedback__mail feedback__input">
                <input
                  name="Name"
                  type="text"
                  placeholder="Имя*"
                  class="form-control"
                  v-model.trim="formData.name"
                >
                <span>{{ errors[0] }}</span>
              </label>
            </ValidationProvider>

            <ValidationProvider
              name="E-Mail"
              rules="required|email"
              v-slot="{ errors }"
            >
              <label class="feedback__mail feedback__input">
                <input
                  name="E-Mail"
                  type="email"
                  placeholder="Ваша почта*"
                  class="form-control"
                  v-model.trim="formData.email"
                >
                <span>{{ errors[0] }}</span>
              </label>
            </ValidationProvider>
          </div>

        </div>

        <ValidationProvider
          name="message-feedback"
          rules="required"
          v-slot="{ errors }"
        >
          <div class="feedback__field feedback__text">
            <label class="feedback__mail feedback__input">
                <textarea
                  name="message-feedback"
                  placeholder="Ваш вопрос, отзыв или пожелание*"
                  class="grey-background form-control"
                  v-model="formData.message"
                />
            </label>
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>


        <div class="form-item">
          <ValidationProvider
            name="Accept Terms"
            rules="required|isAgree"
            v-slot="{ errors }"
            tag="div"
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
          <button type="submit" class="feedback__btn button" tect="Submit" >
            Отправить
          </button>
        </div>
      </form>
    </ValidationObserver>

  </section>
</template>

<script>
import InputCheck from "../../ui/InputCheck";
import Button from "../../ui/Button";
import InputTextarea from "../../ui/InputTextarea";

import Vue from 'vue'

export default Vue.extend({
  name: 'Feedback',
  components: {InputTextarea, Button, InputCheck},
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
      if(this.formData) console.log(this.formData)
      console.log()

    }
  }

})
</script>

<style lang="scss" scoped>
@import "assets/styles/_variables.scss";

//.button:disabled {
//  background-color: grey;
//}

.error-agree {
  margin-top: 32px;
}

.wrap-agree {
  position: absolute;
  left: 0;
  top: 5px;
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
  margin-bottom: 2rem;
  text-align: left;
  position: relative;

  & input {
    background: #f7f7f7;
    width: 100%;
    border-radius: 5px;
    font-size: 16px;
    padding: 6px 10px;
  }

  & textarea {
    height: 115px;
    resize: none;
  }
}

.form-item {
  margin-bottom: 2rem;
  text-align: left;
  position: relative;

  & input, textarea {
    background: #f7f7f7;
    width: 100%;
    border-radius: 5px;
    font-size: 16px;
    padding: 6px 10px;
  }

  & textarea {
    height: 115px;
  }
}

.feedback__inputs {

  @media (min-width: 565px) {
    display: flex;
    column-gap: 2rem;
  }
}

.feedback__input:first-child {
  margin-bottom: 2rem;
  @media (min-width: 565px) {
    margin-bottom: 0;
  }
}

.feedback__input {
  min-width: 250px;
  flex-grow: 1;
}

.feedback__btn {
  height: 50px;
}

.agree__label {

}

</style>
