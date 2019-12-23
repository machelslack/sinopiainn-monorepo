/// <reference types="@emotion/core" />
import BlogPageContent from "../../components/compositions/page-content/blog-page-content";
export declare const routes: ({
    path: string;
    exact: boolean;
    fetchData: boolean;
    component: typeof BlogPageContent;
} | {
    path: string;
    exact: boolean;
    fetchData: boolean;
    component: import("react-redux").ConnectedComponent<typeof import("../../components/compositions/page-content/reserve-page-content").ReservePageContent, any>;
} | {
    path: string;
    exact: boolean;
    fetchData: boolean;
    component: import("react").FunctionComponent<{}>;
} | {
    path: string;
    exact: boolean;
    fetchData: boolean;
    component: import("react-redux").ConnectedComponent<typeof import("../../components/compositions/page-content/checkout-page-content").CheckoutPageContent, any>;
})[];
