module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    allowIndentationTabs: 0,
    "linebreak-style": [
      "error",
      process.platform === "win32" ? "windows" : "unix",
    ],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "no-console": "off",
    "no-restricted-syntax": [
      "error",
      {
        selector: "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
        message: "Unexpected property on console object was called",
      },
    ],
  },
};
