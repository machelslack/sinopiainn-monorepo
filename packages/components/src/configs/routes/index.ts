import HomePageContent from "../../components/compositions/page-content/home-page-content";
import BlogPageContent from "../../components/compositions/page-content/blog-page-content";
import ContactPageContent from "../../components/compositions/page-content/contact-page-content";
import AvailabilityPageContent from "../../components/compositions/page-content/availability-page-content";

export const routes = [
    {
        path: '/',
        exact: true,
        fetchData: true,
        component: HomePageContent
    },
    {
        path: '/blog',
        exact: true,
        fetchData: true,
        component: BlogPageContent
    },
    {
        path: '/availability',
        exact: true,
        fetchData: true,
        component: AvailabilityPageContent
    },
    {
        path: '/contacts',
        exact: true,
        fetchData: false,
        component: ContactPageContent
    }
]