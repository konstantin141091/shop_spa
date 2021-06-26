<template>
  <section class="feedback">
    <h2 class="feedback__title">Обратная связь</h2>

    <ValidationObserver v-slot="{ invalid }">
      <form
        method="post"
        class="feedback__form"
        @submit.prevent="submitHandler"
      >

        <div class="feedback__fields">
          <div class="feedback__field feedback__inputs">
            <label class="feedback__mail feedback__input">
              <ValidationProvider
                name="user-name"
                rules="required"
                v-slot="{ errors }"
              >
                <input
                  name="name"
                  type="text"
                  placeholder="Имя*"
                  class="form-control"
                  v-model.trim="userName"
                >
                <span>{{ errors[0] }}</span>
              </ValidationProvider>
            </label>
            <label class="feedback__mail feedback__input">
              <ValidationProvider
                name="email"
                rules="email|required"
                v-slot="{ errors }"
              >
                <input
                  name="email"
                  type="text"
                  placeholder="Ваша почта*"
                  class="form-control"
                  v-model.trim="email"
                >
                <span>{{ errors[0] }}</span>
              </ValidationProvider>
            </label>
          </div>

          <div class="feedback__field feedback__text">
            <label class="feedback__mail feedback__input">
              <ValidationProvider
                name="message-feedback"
                rules="required"
                v-slot="{ errors }"
              >
                <textarea
                  name="message-feedback"
                  placeholder="Ваш вопрос, отзыв или пожелание*"
                  class="grey-background form-control"
                  v-model="message"
                />
                <span>{{ errors[0] }}</span>
              </ValidationProvider>
            </label>
            <!--            <InputTextarea
                          name="message-feedback"
                          placeholder="Ваш вопрос, отзыв или пожелание*"
                          :classTextarea="'form-item'"
                          :uniq="'message-feedback'"
                          :resize="false"
                          :greyBackground="true"
                          v-model="message"
                        />-->

          </div>
        </div>

          <div class="form-item">
            <label class="checkbox">
              <ValidationProvider
                name="agree"
                rules="isAgree"
                v-slot="{ errors }"
                class="wrap-agree"
              >
                <input
                  name="agree"
                  type="checkbox"
                  v-model="agreeWithRules"
                >
                <span class="checkmark"></span>
                <span class="error-agree">{{ errors[0] }}</span>
              </ValidationProvider>
              Настоящим подтверждаю, что я ознакомлен и согласен с условиями оферты и политики конфиденциальности*
            </label>

          </div>

          <div class="feedback__submit">
            <Button
              btn-type="submit"
              btnText="Отправить"
              :btn-class="'feedback__btn'"
            />
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
      userName: '',
      email: '',
      message: '',
      agreeWithRules: false,
    }
  },
  methods: {
    submitHandler() {
      const formData = {
        userName: this.userName,
        email: this.email,
        message: this.message,
        agreeWithRules: this.agreeWithRules
      }
      console.log(formData)
    }
  }

})
</script>

<style lang="scss" scoped>
@import "assets/styles/_variables.scss";

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
