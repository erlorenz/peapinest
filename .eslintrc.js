module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
    "plugin:@typescript-eslint/recommended",
    'prettier',
    'prettier/@typescript-eslint',
  ],
    plugins: ["@typescript-eslint", "prettier"],
    rules: {
        "prettier/prettier": "error",
        "@typescript-eslint/camelcase": 0,
        "@typescript-eslint/explicit-member-accessibility": 0,
        "@typescript-eslint/no-parameter-properties": 0,
        "@typescript-eslint/explicit-function-return-type": 0,
      },
  };