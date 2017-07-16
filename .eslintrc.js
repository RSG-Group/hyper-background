module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: "airbnb-base",
  parser: "typescript-eslint-parser",
  parserOptions: {
    sourceType: "module"
  },
  plugins: [
    "typescript"
  ],
  rules: {
    // Style guide.
    indent: ["error", 2],
    "linebreak-style": ["error", "windows"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "no-unused-vars": ["error", { vars: "local", args: "after-used" }],
    strict: "off",
    // TypeScript styling.
    "typescript/no-explicit-any": ["error"],
    "typescript/type-annotation-spacing": ["error"],
    "typescript/no-namespace": ["error"],
    "typescript/interface-name-prefix": ["error"],
    "typescript/no-angle-bracket-type-assertion": ["error"],
    // Disable erroring rule.
    "import/no-unresolved": "off"
  }
};
