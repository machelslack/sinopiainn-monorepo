declare const homePageRenderer: {
    type: string;
    renderer: (props: any) => {
        body: NodeJS.ReadableStream;
        head: string;
    };
};
export default homePageRenderer;
