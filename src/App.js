import React from 'react';
import { Switch, Route, Redirect, HashRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import './index.css';

function App() {

    return (
        <Router>
            <Switch>
                <Redirect exact from="/" to="/home" />
                <Route path="/home" component={Home} />
            </Switch>
        </Router>
    );
}

export default App;
