module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
      ],    

    parserOptions: {
      parser: "@babel/eslint-parser",
    },
    "rules": {
      "generator-star-spacing": "off",
      "no-tabs":"off",
      "no-unused-vars":0,
      "no-console":"off",
      "no-irregular-whitespace":"off",
      "no-debugger": "off"
  }
  };