import { Component } from 'react';
interface appData {
    imageBlock: object;
    route: string;
}
declare class App extends Component<{
    pageData: appData;
}> {
    render(): JSX.Element;
}
export default App;
