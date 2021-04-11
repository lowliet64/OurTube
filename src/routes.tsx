
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './pages/Home'
import Welcome from './pages/Welcome'


export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Welcome />
                </Route>
            </Switch>
        </Router>

    )

}