import React, { Component } from 'react';
import { PageLayout } from '../layouts';
import { routes } from '../configs/routes';
import { Route, Switch } from 'react-router';
import  ReservePageContent from '../components/compositions/page-content/reserve-page-content';
import configureStore from "../store/config-store";
import { Provider } from 'react-redux';
import { mainContent } from '../components/compositions';
interface appData {
    imageBlock:object,
    route: string
}


const store = configureStore();

class App extends Component<{ pageData: appData }> {
  
    render() {
    
        const Route = routes.find(route => route.path === this.props.pageData.route );

       const Component = Route!.component;

        return (
            <Provider store={store}>
            <React.Fragment>
                <PageLayout {...this.props} > 
                {/* <Switch>
                    {routes.map(({ path, exact, component:C, ...rest }) => (
                        <Route
                            key={path}
                            path={path}
                            exact={exact}
                            render={() => 
                                <C {...this.props} />
                            }
                        />
                    ))}
                    </Switch>*/}
                    <Component {...this.props}/>
                    {/* <ReservePageContent /> */}
                </PageLayout> 
            </React.Fragment>
            </Provider>
        )
    }
}

export default App


