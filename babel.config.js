module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
          blacklist: null,
          whitelist: ['REACT_APP_BACKEND_URL'],
          safe: false,
          allowUndefined: true,
        },
      ],
    ],
  };
};
