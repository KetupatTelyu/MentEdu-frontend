export default defineNuxtRouteMiddleware((to, from) => {
    if (process.client) {
        if (localStorage.getItem('Auth')) {
            return navigateTo('/main')
        }
    }
    // In a real app you would probably not redirect every route to `/`
    // however it is important to check `to.path` before redirecting or you
    // might get an infinite redirect loop
    // if (to.path !== '/main') {
    //     return navigateTo('/main')
    // }
})
