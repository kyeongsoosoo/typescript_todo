module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb",
    "airbnb/hooks",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier", // prettier 와 충돌 막기 위해
    "prettier/react", // prettier 와 충돌 막기 위해
    "prettier/@typescript-eslint", // prettier 와 충돌 막기 위해
  ],
  plugins: ["react", "@typescript-eslint", "react-hooks"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    "import/no-unresolved": 0,
    "import/extensions": [
      "error",
      "never",
      {
        ts: "never",
        tsx: "never",
        js: "never",
        jsx: "never",
      },
    ],
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".jsx", ".tsx", ".js"],
      },
    ],
  },
};
