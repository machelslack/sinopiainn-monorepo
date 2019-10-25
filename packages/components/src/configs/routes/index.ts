export const routes = [
    {
        path: '/',
        exact: true,
        api: 'fetchHomeData'
    },
    {
        path: '/blog',
        exact: true,
        api: 'fetchBlogData'
    },
    {
        path: '/availability',
        exact: true,
        api: 'fetchAvailabilityData'
    }
]