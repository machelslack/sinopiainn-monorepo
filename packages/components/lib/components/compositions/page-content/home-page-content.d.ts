import React, { Component } from "react";
export interface HomepageContextInterface {
    changeSlide: any;
}
export declare const HomepageContext: React.Context<HomepageContextInterface>;
declare class HomePageContent extends Component<{}> {
    slideIndex: number[];
    slideId: string[];
    constructor(props: any);
    componentDidMount(): void;
    plusSlides: (n: any, no: any) => void;
    showSlides: (n: any, no: any, auto?: boolean) => void;
    render(): JSX.Element;
}
export default HomePageContent;
