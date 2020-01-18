/// <reference types="@emotion/core" />
import HomePageContent from "../../components/compositions/page-content/home-page-content";
import ThingsToDoPageContent from "../../components/compositions/page-content/things-to-do-content";
export declare const routes: ({
    path: string;
    exact: boolean;
    fetchData: boolean;
    component: typeof HomePageContent;
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
    component: typeof ThingsToDoPageContent;
} | {
    path: string;
    exact: boolean;
    fetchData: boolean;
    component: import("react-redux").ConnectedComponent<typeof import("../../components/compositions/page-content/checkout-page-content").CheckoutPageContent, any>;
})[];
