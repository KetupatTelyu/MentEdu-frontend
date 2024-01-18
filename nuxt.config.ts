// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    // 'nuxt-server-utils',
    // '@sidebase/nuxt-auth',
  ],

  build: {
    transpile: ['@material-tailwind/html']
  },

  // vuefire: {
  //   auth: {
  //     enabled: true,
  //     sessionCookie: true
  //   },
  //   config: {
  //     apiKey: "AIzaSyB_8Fri1RIr2j7DkH1EXxiUkCLwx1WPAj0",
  //     authDomain: "mentedu.firebaseapp.com",
  //     projectId: "mentedu",
  //     storageBucket: "mentedu.appspot.com",
  //     messagingSenderId: "269022003412",
  //     appId: "1:269022003412:web:a892b76769bb7883cfbb41",
  //     measurementId: "G-ZFLRFJGF21"
  //   }
  // },

  tailwindcss: {
    cssPath: '~/assets/css/input.css'
  },

  ssr: true,

  app: {
    head: {
      script: [
        {
          async: true,
          src:"https://unpkg.com/@material-tailwind/html/scripts/ripple.js",
        },
        {
          async: true,
          src:"https://unpkg.com/@material-tailwind/html/scripts/tabs.js",
        },
        {
          async: true,
          src:"https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/datepicker.min.js"
        }
      ],
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/mentedu-logo.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      ]
    },
  },

  // auth: {
  //   baseURL: process.env.AUTH_ORIGIN,
  //   provider: {
  //     type: "authjs",
  //   },
  // },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  pages: true,

  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL,
      API_PHOTO: process.env.API_PHOTO,
      GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    },
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  },
})
