require("@rushstack/eslint-config/patch/modern-module-resolution")

/** @type {import('eslint').Linter.Config} */
const config = {
  root: true,
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["@typescript-eslint", "import", "react", "jsx-a11y"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended"
  ],
  settings: {
    "react": {
      version: "detect"
    },
    "formComponents": ["Form"],
    "linkComponents": [
      { name: "Link", linkAttribute: "to" },
      { name: "NavLink", linkAttribute: "to" }
    ],
    "import/internal-regex": "^~/",
    "import/resolver": {
      typescript: true,
      node: true
    }
  }
}

module.exports = config
