// Configuration for your app
// https://quasar.dev/quasar-cli/quasar-conf-js

module.exports = function(ctx) {
  return {
    preFetch: true,
    // Quasar looks for *.js files by default
    sourceFiles: {
      router: 'src/router/index.ts',
      store: 'src/store/index.ts'
    },
    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    boot: ['i18n', 'axios', 'services-inject'],

    css: ['app.styl'],

    extras: [
      // 'ionicons-v4',
      'mdi-v3',
      // 'fontawesome-v5',
      // 'eva-icons',
      // 'themify',
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

      'roboto-font', // optional, you are not bound to it
      'material-icons' // optional, you are not bound to it
    ],

    framework: {
      // iconSet: 'ionicons-v4',
      // lang: 'en', // Quasar language

      // all: true, // --- includes everything; for dev only!

      components: [
        'QLayout',
        'QHeader',
        'QDrawer',
        'QPageContainer',
        'QPage',
        'QToolbar',
        'QToolbarTitle',
        'QBtn',
        'QIcon',
        'QList',
        'QItem',
        'QItemSection',
        'QItemLabel',
        'QTabs',
        'QRouteTab',
        'QFooter',
        'QAvatar',
        'QForm',
        'QInput',
        'QBtn',
        'QToggle',
        'QCard',
        'QCardSection',
        'QCardActions',
        'QSeparator',
        'QSpace',
        'QBtnDropdown',
        'QUploader',
        'QUploaderAddTrigger',
        'QTooltip',
        'QSpinner'
      ],

      directives: ['Ripple', 'ClosePopup'],

      // Quasar plugins
      plugins: ['Notify']
    },

    supportIE: false,

    build: {
      scopeHoisting: true,
      // vueRouterMode: 'history',
      // vueCompiler: true,
      // gzip: true,
      // analyze: true,
      // extractCSS: false,
      env: ctx.dev
        ? {
            // so on dev we'll have
            VUE_APP_ROOT_API: JSON.stringify('http://localhost:9090'),
            UPLOAD_IMAGE_URL: JSON.stringify(
              'http://localhost:9066/rest/v2/upload'
            )
          }
        : {
            // and on build (production):
            VUE_APP_ROOT_API: JSON.stringify('https://prod.api.com'),
            UPLOAD_IMAGE_URL: JSON.stringify(
              'https://demo.cuocsongdongian.com/rest/v2/upload'
            )
          },
      extendWebpack(cfg) {
        cfg.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/,
          options: {
            formatter: require('eslint').CLIEngine.getFormatter('stylish')
          }
        });
      }
    },

    devServer: {
      // https: true,
      // port: 8080,
      open: true, // opens browser window automatically
      clientLogLevel: 'trace',
      proxy: {
        '/upload': {
          target: 'http://localhost:9066/api/upload/file',
          changeOrigin: true,
          secure: false,
          pathRewrite: {
            '^/upload': ''
          }
        }
      }
    },

    // animations: 'all', // --- includes all animations
    animations: [],

    ssr: {
      pwa: false
    },

    pwa: {
      // workboxPluginMode: 'InjectManifest',
      // workboxOptions: {}, // only for NON InjectManifest
      manifest: {
        // name: 'My Simple App',
        // short_name: 'My Simple App',
        // description: 'This is a simple app that based on Quasar Framework',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            src: 'statics/icons/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png'
          },
          {
            src: 'statics/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'statics/icons/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png'
          },
          {
            src: 'statics/icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png'
          },
          {
            src: 'statics/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },

    cordova: {
      // id: 'org.cordova.quasar.app',
      // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
    },

    electron: {
      // bundler: 'builder', // or 'packager'

      extendWebpack(cfg) {
        // do something with Electron main process Webpack cfg
        // chainWebpack also available besides this extendWebpack
      },

      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options
        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',
        // Windows only
        // win32metadata: { ... }
      },

      builder: {
        // https://www.electron.build/configuration/configuration
        // appId: 'simple-app'
      }
    }
  };
};
