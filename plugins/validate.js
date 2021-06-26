import Vue from 'vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

import { extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'Поле не может быть пустым'
})

extend('email', {
  ...email,
  message: 'Введите корректный email'
})

extend('isAgree', {
  message: 'Поле условия является обязательным.',
  validate: value => !!value
})
