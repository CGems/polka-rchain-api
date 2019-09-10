module.exports = {
  extends: ["eslint-config-egg", "eslint:recommended"],
  rules: {
    "no-console": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn"
  }
};
