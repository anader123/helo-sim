import React, { Component } from 'react'
import './App.css';
import routes from './routes'; 
import Nav from './Components/Nav/Nav';
import { Route } from 'react-router-dom'; 

class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' component={Nav} />
        {routes}
      </div>
    )
  }
}


export default App;
