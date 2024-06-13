const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["**/*.tsx", "**/*.ts"],
  presets: [require("nativewind/preset")],

  theme: {
    extend: {
      fontFamily: {
        "nunito-200": [
          '"Nunito_200ExtraLight"',
          ...defaultTheme.fontFamily.sans,
        ],
        "nunito-200italic": [
          '"Nunito_200ExtraLight_Italic"',
          ...defaultTheme.fontFamily.sans,
        ],
        "nunito-300": ['"Nunito_300Light"', ...defaultTheme.fontFamily.sans],
        "nunito-300italic": [
          '"Nunito_300Light_Italic"',
          ...defaultTheme.fontFamily.sans,
        ],
        "nunito-400": ['"Nunito_400Regular"', ...defaultTheme.fontFamily.sans],
        "nunito-400italic": [
          '"Nunito_400Regular_Italic"',
          ...defaultTheme.fontFamily.sans,
        ],
        "nunito-500": ['"Nunito_500Medium"', ...defaultTheme.fontFamily.sans],
        "nunito-500italic": [
          '"Nunito_500Medium_Italic"',
          ...defaultTheme.fontFamily.sans,
        ],
        "nunito-600": ['"Nunito_600SemiBold"', ...defaultTheme.fontFamily.sans],
        "nunito-600italic": [
          '"Nunito_600SemiBold_Italic"',
          ...defaultTheme.fontFamily.sans,
        ],
        "nunito-700": ['"Nunito_700Bold"', ...defaultTheme.fontFamily.sans],
        "nunito-700italic": [
          '"Nunito_700Bold_Italic"',
          ...defaultTheme.fontFamily.sans,
        ],
        "nunito-800": [
          '"Nunito_800ExtraBold"',
          ...defaultTheme.fontFamily.sans,
        ],
        "nunito-800italic": [
          '"Nunito_800ExtraBold_Italic"',
          ...defaultTheme.fontFamily.sans,
        ],
        "nunito-900": ['"Nunito_900Black"', ...defaultTheme.fontFamily.sans],
        "nunito-900italic": [
          '"Nunito_900Black_Italic"',
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
    colors: {
      background13: "#1E1E26",
      primary78: "#8E92FE",
      primary84: "#AFB2FF",
      white: "#FFFFFF",
      background34: "#4D4D61",
      black: "#000000",
      background23: "#313243",
      primary57: "#5155D1",
      error: "#CD4266",
      background19: "#282937",
      background16: "#24242D",
      ...defaultTheme.colors,
    },
  },

  plugins: [],
};
