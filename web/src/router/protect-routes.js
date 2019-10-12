
export function initRouteProtection(router, store) {
    router.beforeEach((to, from, next) => {
        const allowed = allowedToNavigate(to.name)
        console.log('allowed', allowed)
        if (!allowed) {
            router.push('/login')

        } else {
            // next('login');
            next();
        }


    });

    function allowedToNavigate(route) {
        if (isUserLogged()) {
            return true
        }
        console.log(openRoutes)
        console.log(route)
        const allowed = openRoutes.filter((openRoute) => openRoute === route)
        if (allowed.length > 0) {
            return true
        }
        return false
    }

    function isUserLogged() {
        return store.auth.getters.isLogged
    }

    const openRoutes = [
        'login',
        'about',
    ]
}







