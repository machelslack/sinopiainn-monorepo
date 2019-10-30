/// <reference types="@emotion/core" />
export declare const routes: ({
    path: string;
    exact: boolean;
    fetchData: boolean;
    component: (props: any) => JSX.Element;
} | {
    path: string;
    exact: boolean;
    fetchData: boolean;
    component: import("react").FunctionComponent<{}>;
})[];
