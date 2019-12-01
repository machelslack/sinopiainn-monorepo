import HomePageContent from "../../components/compositions/page-content/home-page-content";
import BlogPageContent from "../../components/compositions/page-content/blog-page-content";
import ContactPageContent from "../../components/compositions/page-content/contact-page-content";
import ReservePageContent from "../../components/compositions/page-content/reserve-page-content";
import ShopPageContent from "../../components/compositions/page-content/shop-page-content";
import ThingsToDoPageContent from "../../components/compositions/page-content/things-to-do-content";

export const routes = [
    {
        path: '/',
        exact: true,
        fetchData: true,
        component: HomePageContent
    },
    {
        path: 'home',
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
        path: '/reserve',
        exact: true,
        fetchData: true,
        component: ReservePageContent
    },
    {
        path: 'reserve',
        exact: true,
        fetchData: true,
        component: ReservePageContent
    },
    {
        path: '/contacts',
        exact: true,
        fetchData: false,
        component: ContactPageContent
    },
    {
        path: '/shop',
        exact: true,
        fetchData: false,
        component: ShopPageContent
    },
    {
        path: '/things-to-do',
        exact: true,
        fetchData: false,
        component: ThingsToDoPageContent 
    }
]
