module.exports = {
  env: {
    browser: false,
    es2021: true,
    mocha: true,
    node: true,
  },
  // plugins: ["@typescript-eslint"],
  // extends: [
  //   "standard",
  //   "plugin:prettier/recommended",
  //   "plugin:node/recommended",
  // ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
  },
  rules: {
    'prettier/prettier': 0,
    '@typescript-eslint/parser': 0,
    'no-unused-vars': 0,
    'node/no-missing-import': 0,
    'spaced-comment': 0,
    'node/no-unsupported-features/node-builtins': 0,
    'node/no-unsupported-features/es-syntax': 0,
  },

};
