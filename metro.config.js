const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

config.resolver = {
  ...config.resolver,
  unstable_enablePackageExports: true,
  unstable_conditionNames: ["expo", "react-native"],
  // default condition names 'import' and 'require' can
  // accidentally require module that assume node
  // libraries and APIs are present - specify expo/react-native
  // for info, see: https://metrobundler.dev/docs/package-exports/
};

module.exports = withNativeWind(config, { input: "./global.css" });
