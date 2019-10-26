import React, { Component } from 'react'; // l
import { PageLayout } from '../layouts';

class App extends Component<{pageData:any}> {
    render() {
        return (
            <React.Fragment>
                <PageLayout {...this.props} /> 
            </React.Fragment>
        )
    }
}

export default App