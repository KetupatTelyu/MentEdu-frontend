// middleware/auth.ts
import {getCurrentUser} from "vuefire";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const user = await getCurrentUser()

    // redirect the user to the login page
    if (user) {
        return navigateTo({
            path: '/main',
            query: {
                redirect: to.fullPath,
            },
        })
    }
})