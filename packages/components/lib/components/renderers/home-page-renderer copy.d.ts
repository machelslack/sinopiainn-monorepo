declare const homePageRenderer: {
    type: string;
    renderer: (props: any) => {
        body: string;
        head: string;
    };
};
export default homePageRenderer;
