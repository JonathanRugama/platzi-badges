import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import BadgeNew from '../pages/BadgeNew'
import BadgeEdit from '../pages/BadgeEdit'
import BadgeDetails from '../pages/BadgeDetailsContainer'
import Badges from '../pages/Badges'
import Layout from '../components/Layout'
import NotFound from '../pages/NotFound'
function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Badges}/>
                    <Route exact path="/badges/new" component={BadgeNew}/>
                    <Route exact path="/badges/:badgeId/edit" component={BadgeEdit}/>
                    <Route exact path="/badges/:badgeId" component={BadgeDetails}/>
                    <Route component={NotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}
export default App;