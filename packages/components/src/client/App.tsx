import React, { Component } from 'react'; // l
import { PageLayout } from '../layouts';
import { routes } from '../configs/routes';
import { Route, Switch } from 'react-router';

class App extends Component<{ pageData: any }> {
    render() {
        return (
            <React.Fragment>
                <PageLayout {...this.props} >
                <Switch>
                    {routes.map(({ path, exact, component:C, ...rest }) => (
                        <Route
                            key={path}
                            path={path}
                            exact={exact}
                            render={() => 
                                <C {...this.props}/>
                            }
                        />
                    ))}
                    </Switch>
                </PageLayout>
            </React.Fragment>
        )
    }
}

export default App


