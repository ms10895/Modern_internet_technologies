// vue.config.js

module.exports = {
    devServer: {
      proxy: {
          '/api':{
              target: 'http://localhost:5000'
          },
          


      }
    },

    pluginOptions: {
      i18n: {
        locale: 'en',
        fallbackLocale: 'en',
        localeDir: 'locales',
        enableInSFC: false
      }
    }
};
