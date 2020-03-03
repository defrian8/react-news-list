import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import SignIn from '../components/App/SignIn';
import Home from '../pages/Home/Home';
import NewsCreate from '../pages/News/NewsCreate';
import News from '../pages/News/News';
import NewsDetail from '../pages/Home/NewsDetail';
function Routes() {
    return (
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>

            <Route path="/login"><SignIn /></Route>
            <Route path="/create"><NewsCreate /></Route>
            <Route path="/post"><News /></Route>
            <Route path="/news/:id"><NewsDetail /></Route>
        </Switch>
    )
}
export default Routes;