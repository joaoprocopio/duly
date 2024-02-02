/** @type {import("prettier").Config} */
module.exports = {
  semi: false,
  singleQuote: false,
  bracketSameLine: true,
  trailingComma: "all",
  printWidth: 80,
  quoteProps: "consistent",
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindFunctions: ["clsx", "cva"],
}
