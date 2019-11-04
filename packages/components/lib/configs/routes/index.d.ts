/// <reference types="@emotion/core" />
import HomePageContent from "../../components/compositions/page-content/home-page-content";
export declare const routes: ({
    path: string;
    exact: boolean;
    fetchData: boolean;
    component: typeof HomePageContent;
} | {
    path: string;
    exact: boolean;
    fetchData: boolean;
    component: import("react").FunctionComponent<{}>;
})[];
