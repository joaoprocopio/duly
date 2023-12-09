require("@rushstack/eslint-config/patch/modern-module-resolution")

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ["next/core-web-vitals", 
  "plugin:prettier/recommended"]
}
