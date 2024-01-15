// // file: ~/server/api/auth/[...].ts
// import { NuxtAuthHandler } from '#auth'
// import GoogleProvider from 'next-auth/providers/google'
// import { users } from '~~/db'
//
// const config = useRuntimeConfig()
//
// // async function getMe(session: any) {
// //     return await $fetch('/api/me', {
// //         method: 'POST',
// //         query: {
// //             publishableKey: config.public.PublishableKey,
// //         },
// //         body: {
// //             email: session?.user?.email,
// //         },
// //     })
// // }
//
// // @ts-ignore
// export default NuxtAuthHandler({
//     secret: config.SecretKey,
//     pages: {
//       signIn: '/login',
//     },
//     // callbacks: {
//     //     session: async ({ session, token }) => {
//     //         const me = users.find(u => u.email === session?.user?.email)
//     //         ;(session as any).subscribed = me?.subscribed
//     //         return Promise.resolve(session)
//     //     },
//     // },
//     providers: [
//         // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
//         GoogleProvider.default({
//             clientId: config.public.GOOGLE_CLIENT_ID,
//             clientSecret: config.GOOGLE_CLIENT_SECRET,
//             authorization: {
//                 params: {
//                     prompt: "consent",
//                     access_type: "offline",
//                     response_type: "code"
//                 }
//             }
//         }),
//         // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
//         CredentialsProvider.default({
//             id: "mentedu-login",
//             // The name to display on the sign in form (e.g. "Sign in with...")
//             name: "MentEdu Account",
//             // `credentials` is used to generate a form on the sign in page.
//             // You can specify which fields should be submitted, by adding keys to the `credentials` object.
//             // e.g. domain, username, password, 2FA token, etc.
//             // You can pass any HTML attribute to the <input> tag through the object.
//             credentials: {
//                 email: { label: "email", type: "email", placeholder: "Masukkan email anda" },
//                 password: { label: "Password", type: "password" }
//             },
//             async authorize(credentials: any) {
//                 // Add logic here to look up the user from the credentials supplied
//                 // @ts-ignore
//                 const user: any = await $fetch('/api/cms/user', {
//                     headers: {
//                         Authorization: "Bearer " + config.public.PublishableKey,
//                     }
//                 })
//
//                 if (credentials?.email === user.email && credentials?.password === user.password) {
//                     // Any object returned will be saved in `user` property of the JWT
//                     return user
//                 } else {
//                     console.error(
//                         'Warning: Malicious login attempt registered, bad credentials provided'
//                     )
//                     // If you return null then an error will be displayed advising the user to check their details.
//                     return null
//
//                     // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
//                 }
//             }
//         }),
//     ]
// })
