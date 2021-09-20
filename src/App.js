import React from 'react';
import { Switch, Route, Redirect, HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import store from './store';
import './index.css';

function App() {

    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Redirect exact from="/" to="/home" />
                    <Route path="/home" component={Home} />
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
