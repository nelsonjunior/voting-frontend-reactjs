import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import ScrollTop from './shared/components/ScrollTop'
import Home from './pages/Home/Home' 
import VotingDetails from './pages/Voting/VotingDetails'

export default props => ( 
    <HashRouter>
        <ScrollTop>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/details/:id" component={VotingDetails} />
            </Switch>
        </ScrollTop>
    </HashRouter>
)