import React, {Component, createContext} from 'react';
import './App.scss';

import ListMovies from './containers/listMovies';

import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import MyContext from './context';

class MyProvider extends Component{
  state = {
    saved: {
      
    }
  }

  modifySaved = (newElement, rating) => {
    console.log('modifying the saved ones');
    //modify the new state

    const ls = localStorage.getItem('savedMovies3');
    const parsed = JSON.parse(ls)

    const newState = {
      ...parsed,
      [newElement.imdbID]: {
        ...newElement,
        rating
      }
    }

    debugger;
    
    this.setState({
      saved: {
        ...this.state.saved,
        [newElement.imdbID]: {
          ...newElement,
          rating
        }
      },
    });

    localStorage.setItem('savedMovies3', JSON.stringify(newState));

  }

  componentDidMount(){
    //check if local storage items exist

    const ls = localStorage.getItem('savedMovies3');
    const parsed = JSON.parse(ls)
    if(ls){
      const parsed = JSON.parse(ls)
    }

    if(!parsed){
      localStorage.setItem('savedMovies3', JSON.stringify({
    
      }))
    } else {
      console.log('we have ls object', parsed);
      this.setState({
        saved: parsed,
      })
    }

  }

  render(){
    return <MyContext.Provider value={{
      saved:this.state.saved,
      modifySaved: this.modifySaved.bind(this)
    }}>
      {this.props.children}
    </MyContext.Provider>
  }
}


export default class App extends Component{

  render(){
    return (
      <MyProvider >
        <div className="App">
          <header className="App-header">
            <span>Movies app</span>
              <ListMovies  />
              <NotificationContainer />
          </header>
        </div>
      </MyProvider>
    );
  }
}


