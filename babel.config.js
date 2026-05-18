module.exports = function(api) {
    api.cache(true);
    return {
      // IMPORTANT: nativewind/babel must be a PRESET, not a plugin
      presets: ["babel-preset-expo", "nativewind/babel"],
    };
  };
