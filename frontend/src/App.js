import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserLogin from './UserLogin';
import UserRegister from './UserRegister';

const App = () => {
    return (
        <Router>
            <div>
                <h1>DecentraLive Streaming</h1>
                <Switch>
                    <Route path="/login" component={UserLogin} />
                    <Route path="/register" component={UserRegister} />
                    <Route path="/" exact>
                        <p>Welcome to DecentraLive Streaming!</p>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
