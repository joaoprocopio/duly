require("@rushstack/eslint-config/patch/modern-module-resolution")

/** @type {import('eslint').Linter.Config} */
const config = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["react", "jsx-a11y", "@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest"
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  settings: {
    react: {
      version: "detect"
    }
  }
}

module.exports = config
