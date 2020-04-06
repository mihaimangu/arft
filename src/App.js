import React, {Component, createContext} from 'react';
import './App.scss';

import MyProvider from './containers/myProvider';

import ListMovies from './containers/listMoviesContainer';
import MyMovies from './containers/myMoviesContainer';
import SingleMovie from './containers/singleMovieContainer';
import Header from './components/header';

import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';



import { BrowserRouter, Route, Switch } from 'react-router-dom'



export default class App extends Component{

  render(){
    return (
      <BrowserRouter>
        <MyProvider >
          <Header />
            <div className="App">
              <header className="App-header">
                  
                  <Switch>
                    <Route path="/my-movies" component={MyMovies}/>
                    <Route path="/single/:id" component={SingleMovie}/>
                    <Route path="/" component={ListMovies}/>
                  </Switch>
             
                  <NotificationContainer />
              </header>
            </div>
        </MyProvider>
      </BrowserRouter>
    );
  }
}


