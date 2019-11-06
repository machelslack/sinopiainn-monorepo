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
    component: import("react").FunctionComponent<{}>;
})[];
