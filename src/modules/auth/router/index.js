export default {
    name: "auth",
    component: () =>
        import(
             /* webpackChunkName: 'Auth layout' */ "@/modules/auth/layout/AuthLayout.vue"
        ),
    children: [
        {
            path: "",
            name: "login",
            component: () =>
                import(
                /* webpackChunkName: 'login view' */ "@/modules/auth/views/LoginView.vue"
                ),
        },
        {
            path: "register",
            name: "register",
            component: () =>
                import(
                /* webpackChunkName: 'register view' */ "@/modules/auth/views/RegisterView.vue"
                ),
        },
    ]
}