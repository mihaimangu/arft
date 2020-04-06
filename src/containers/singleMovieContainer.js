import React, { Component } from 'react'

import {NotificationManager} from 'react-notifications'

import axios from 'axios';
import urlPaths from '../constants/async';

import Loader from 'react-loader-spinner';

import Rating from 'react-rating';
import MyContext from '../context';


export default class SingleMovie extends Component{
    state = {
        loading: true,
        movieData: {},
    }

    componentDidMount(){
        const {params} = this.props.match;

        if(params && params.id){
            axios({
                url: urlPaths.getMovie(params.id)
            }).then(response => {
                console.log('response data', response.data);
                this.setState({
                    movieData: response.data,
                    loading: false,
                })
            })
        } else {
            NotificationManager.warning('This movie was not found');
           
        }       
    }


    render(){
        const {loading, movieData} = this.state;

        return (
            <MyContext.Consumer>
                {context => (
                       loading ? <Loader /> : <div className="single-movie-wrapper">
                       <div className="single-movie-img-wrapper">
                           {movieData.Poster && <img src={movieData.Poster} />}
                       </div>
                       <div>
                           {movieData.Title && <div>Title: {movieData.Title}</div>}
                           {movieData.Year && <div>Year: {movieData.Year}</div>}
                           {movieData.Type && <div>Type: {movieData.Type}</div>}
                           {movieData.Country && <div>Country: {movieData.Country}</div>} {movieData.Genre && <div>Genre: {movieData.Genre}</div>} {movieData.BoxOffice && <div>BoxOffice: {movieData.BoxOffice}</div>}
                           <Rating 
                               initialRating={context.saved[movieData.imdbID] ? context.saved[movieData.imdbID].rating : 0}
   
                               onChange={(value) => {
                                   context.modifySaved(movieData, value)
                               }}
                           />
                       </div>
                   </div>
                )}
             

            </MyContext.Consumer>
        )
    }
}