module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: "standard",
  parser: "typescript-eslint-parser",
  plugins: ["typescript"],
  rules: {
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
