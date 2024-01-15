// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-vuefire',
  ],

  build: {
    transpile: ['vuefire', 'firebase']
  },

  ssr: true,

  vuefire: {
    auth: {
      enabled: true,
      sessionCookie: true
    },
    config: {
      apiKey: "AIzaSyB_8Fri1RIr2j7DkH1EXxiUkCLwx1WPAj0",
      authDomain: "mentedu.firebaseapp.com",
      projectId: "mentedu",
      storageBucket: "mentedu.appspot.com",
      messagingSenderId: "269022003412",
      appId: "1:269022003412:web:a892b76769bb7883cfbb41",
      measurementId: "G-ZFLRFJGF21"
    }
  },

  // auth: {
  //   provider: {
  //     type: 'local',
  //     endpoints: {
  //       getSession: { path: '/user' }
  //     },
  //     pages: {
  //       login: '/'
  //     },
  //     token: {
  //       signInResponseTokenPointer: '/token'
  //     },
  //     sessionDataType: { id: 'string', email: 'string', name: 'string', role: 'admin | guest | account', subscriptions: "{ id: number, status: 'ACTIVE' | 'INACTIVE' }[]" }
  //   },
  //   session: {
  //     // Whether to refresh the session every time the browser window is refocused.
  //     enableRefreshOnWindowFocus: true,
  //
  //     // Whether to refresh the session every `X` milliseconds. Set this to `false` to turn it off. The session will only be refreshed if a session already exists.
  //     enableRefreshPeriodically: 5000
  //   },
  //   isEnabled: true,
  //   // baseUrl: process.env.AUTH_ORIGIN,
  //   provider: {
  //     type: 'authjs',
  //   },
  //   globalAppMiddleware: {
  //     isEnabled: true
  //   }
  // },

  build: {
    transpile: [/*'jsonwebtoken'*/]
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css'
  },

  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/mentedu-logo.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      ]
    }
  },

  pages: true,

  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL,
      PublishableKey: process.env.API_KEY,
      GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    },
    SecretKey: process.env.SECRET_KEY,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  },
})
