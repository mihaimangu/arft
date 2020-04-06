import React, { Component } from 'react'

export default class Movies extends Component{
    render(){
        const {results} = this.props

        return (
            <div className="" >
                {results.length  ?  <div>
                    <h5>A list of results</h5>
                   
                        {results.map((result,index) => {
                            console.log('result', result)
                            return <div key={index} className="single-movie-wrapper">
                                    <div className="single-movie-img-wrapper">
                                        {result.Poster && <img src={result.Poster} />}
                                    </div>
                                    <div>
                                        {result.Title && <div>Title: {result.Title}</div>}
                                        {result.Year && <div>Year: {result.Year}</div>}
                                        {result.Type && <div>Type: {result.Type}</div>}
                                    </div>

                                </div>
                        })}
                   
                </div> : <div>Nothing found</div>}
            </div>

          
        )
    }
}