const plugin = require("tailwindcss");

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      ["react-native-reanimated/plugin"],
      ["babel-plugin-remove-import-meta"],
      ["@babel/plugin-transform-flow-strip-types"],
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      ["@babel/plugin-proposal-class-properties", { loose: true }],
      [
        "module-resolver",
        {
          alias: {
            "@Assets": "./assets",
            "@App": "./app",
            "@Constants": "./constants",
            "@Styles": "./styles",
            "@Services": "./services",
            "@Components": "./components",
            "@Hooks": "./hooks",
            "@Utils": "./utils",
            "@Types": "./types",
            "@Screens": "./screens",
            "@Icons": "./icons",
            "@State": "./state",
          },
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      ],
    ],
  };
};
