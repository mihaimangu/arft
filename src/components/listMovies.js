import React, { Component } from 'react'
import Rating from 'react-rating'

import MyContext from '../context';

export default class Movies extends Component{
    render(){
        const {results} = this.props

        return (

            <MyContext.Consumer>
            {context => (
                <div className="" >
                    {results.length  ?  <div>
                        <h5>A list of results</h5>
                    
                            {results.map((result,index) => {
                                return <div key={index} className="single-movie-wrapper">
                                    <div className="single-movie-img-wrapper">
                                        {result.Poster && <img src={result.Poster} />}
                                    </div>
                                    <div>
                                        {result.Title && <div>Title: {result.Title}</div>}
                                        {result.Year && <div>Year: {result.Year}</div>}
                                        {result.Type && <div>Type: {result.Type}</div>}
                                        <Rating 
                                            initialRating={context.saved[result.imdbID] ? context.saved[result.imdbID].rating : 0}

                                            onChange={(value) => {
                                                console.log('changing rating', value);
                                                context.modifySaved(result, value)
                                            }}
                                        />
                                    </div>
                                </div>
                            })}
                    
                    </div> : <div>Nothing found</div>}
                </div>
            )}
            </MyContext.Consumer>
            

        )
    }
}