import React, { Component } from 'react';
import './App.css';
import HomePageBackground from './Components/HomePageBackground/HomePageBackground';
import MainPage from '../src/Components/MainPage/MainPage';
import { Route, Switch } from 'react-router-dom';
 
class App extends Component {

  render() {
    return (
        <div className="App">
        <Switch>
          <Route path='/MainPage' component={MainPage} />
          <Route path="/" exact component={HomePageBackground} />
        </Switch>
        </div>
    );
  }
}

export default App;
