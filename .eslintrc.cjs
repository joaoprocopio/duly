/* eslint-disable import/no-extraneous-dependencies */
require("@rushstack/eslint-patch/modern-module-resolution");

/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true,
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:react/jsx-runtime",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    react: {
      version: "18.2",
    },
  },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": "warn",
    "import/no-extraneous-dependencies": "off",
  },
};
