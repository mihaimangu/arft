import React, { Component } from 'react'
import MyContext from '../context';

import Loader from 'react-loader-spinner';


export default class MyProvider extends Component{
    constructor(props){
      super(props);
  
      this.state = {
        loading: true,
        saved: {
       
        }
      }
    }
  
    modifySaved = (newElement, rating) => {
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
    
      if(!parsed){
        localStorage.setItem('savedMovies3', JSON.stringify({
      
        }));
        this.setState({loading:false})
      } else {
        console.log('we have ls object', parsed);
        this.setState({
          saved: parsed,
          loading: false,
        })
      }
  
    }
  
    render(){
      const {loading} = this.state;
  
      return loading ? <Loader /> : <MyContext.Provider value={{
        saved:this.state.saved,
        modifySaved: this.modifySaved.bind(this)
      }}>
        {this.props.children}
      </MyContext.Provider>
    }
  }
  