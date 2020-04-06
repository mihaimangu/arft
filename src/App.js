import React, {Component} from 'react';
import './App.scss';

import ListMovies from './containers/listMovies';

import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';


export default class App extends Component{


  render(){
    return (
      <div className="App">
        <header className="App-header">
          <span>Movies app</span>
            <ListMovies  />
            <NotificationContainer />
        </header>
      </div>
    );
  }
}


