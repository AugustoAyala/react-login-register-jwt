import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Start from './Start';

export default class Routes extends Component {
    render() {
        return (
            <div>
                <Route path='/' exact component={Start} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
            </div>
        )
    }
}
