import React from 'react';
import {Switch, Route} from 'react-router-dom'; 
import Auth from './Components/Auth/Auth';
import Dashboard from './Components/Dashboard/Dashboard'; 
import Form from './Components/Form/Form'; 
import Post from './Components/Post/Post'; 
import Nav from './Components/Nav/Nav';

export default (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route path='/' component={Nav} />
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/new' component={Form}/>
        <Route path='/post/:postid' component={Post}/>
    </Switch>
)