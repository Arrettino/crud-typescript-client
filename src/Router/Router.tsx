import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

function Router(): JSX.Element {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
        </Switch>
    );
}

export default Router;
