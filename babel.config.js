module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-private-methods",
    "@babel/plugin-proposal-private-property-in-object",
    // ["import", { libraryName: "antd-mobile", style: "css"}]
    // ["import", { libraryName: "antd-mobile", style: true}]
  ]
};