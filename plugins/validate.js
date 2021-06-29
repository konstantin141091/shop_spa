import Vue from 'vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

import { extend } from 'vee-validate'
import { required, email, alpha_spaces } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'Поле обязательно для заполнения'
})

extend('email', {
  ...email,
  message: 'Введите корректный email'
})

extend('alpha_spaces', {
  ...alpha_spaces,
  message: 'Поле может содержать только буквенные символы и пробелы'
})

extend('isAgree', {
  message: 'Поле условия является обязательным',
  validate: value => !!value
})
