require("@rushstack/eslint-config/patch/modern-module-resolution")

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  extends: [
    "@remix-run/eslint-config",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  settings: {
    react: {
      version: "18.2"
    }
  }
}
