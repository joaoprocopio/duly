require("@rushstack/eslint-config/patch/modern-module-resolution")

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["next/core-web-vitals", "plugin:@next/next/recommended", "plugin:prettier/recommended"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest"
  }
}
