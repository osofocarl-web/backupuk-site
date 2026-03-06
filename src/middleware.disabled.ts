import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
    const { cookies, url, redirect } = context;
    const accessToken = cookies.get('sb-access-token');
    const refreshToken = cookies.get('sb-refresh-token');

    // Add the routes you want to protect here
    const protectedRoutes = ['/profile', '/notes'];

    const isProtectedRoute = protectedRoutes.some(route => url.pathname.startsWith(route));

    if (isProtectedRoute && (!accessToken || !refreshToken)) {
        return redirect('/auth');
    }

    // If we are on auth page but already logged in
    if (url.pathname.startsWith('/auth') && accessToken && refreshToken) {
        return redirect('/profile');
    }

    return next();
});
