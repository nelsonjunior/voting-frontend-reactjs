import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import ScrollTop from './shared/components/ScrollTop'
import Home from './pages/Home/Home' 
import VotingDetails from './pages/Voting/VotingDetails'
import DashBoard from './pages/Dashboard/Dashboard'
import About from './pages/About/About'

export default props => ( 
    <HashRouter>
        <ScrollTop>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/details/:id" component={VotingDetails} />
                <Route path="/dashboard" component={DashBoard} />
                <Route path="/about" component={About} />
            </Switch>
        </ScrollTop>
    </HashRouter>
)