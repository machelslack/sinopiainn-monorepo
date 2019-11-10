import { Component } from 'react';
interface appData {
    imageBlock: object;
}
declare class App extends Component<{
    pageData: appData;
}> {
    render(): JSX.Element;
}
export default App;
