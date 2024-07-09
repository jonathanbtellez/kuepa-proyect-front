import store from "@/store"


const isAuthenticatedGuard = async (to, from, next) => {
    const { status } = await store.dispatch('auth/checkAuthentication')

    if (status) next()
    else next({ name: 'login' })
}

export default isAuthenticatedGuard