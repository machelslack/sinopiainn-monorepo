import { Component } from 'react';
declare class HomePageContent extends Component<{}> {
    slideIndex: number[];
    slideId: string[];
    constructor(props: any);
    componentDidMount(): void;
    plusSlides: (n: any, no: any) => void;
    showSlides: (n: any, no: any) => void;
    render(): JSX.Element;
}
export default HomePageContent;
