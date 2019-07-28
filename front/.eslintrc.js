module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ['plugin:vue/strongly-recommended', '@vue/prettier'],

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/attributes-order': 'error',
    'vue/no-confusing-v-for-v-if': 'error',
    'vue/order-in-components': 'error'
  },

  parserOptions: {
    parser: 'babel-eslint'
  }
};
