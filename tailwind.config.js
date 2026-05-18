  /** @type {import('tailwindcss').Config} */
  module.exports = {
    // Scan all source files for Tailwind class usage
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    // REQUIRED: NativeWind preset for React Native compatibility
    presets: [require("nativewind/preset")],
    theme: {
      extend: {},
    },
    plugins: [],
  };
