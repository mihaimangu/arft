import React, {Component, createContext} from 'react';
import Search from '../components/search';
import List from '../components/listMovies';

import axios from 'axios';
import urlPaths from '../constants/async';

import {NotificationManager} from 'react-notifications';
import MyContext from '../context';

export default class ListMovies extends Component{
    constructor(props){
        super(props);
        this.state={
            results: [],
            searchFinished: false,
            text: '',
            year: '',
        }
    }
    
    setText = (text) => {
        this.setState({text})
    }

    setYear = (year) => {
        this.setState({year})
    }

    search = () => {
        //optional params: year
        const {text, year} = this.state;

        let params = {
            y: year
        }

        axios({
            url: urlPaths.search(text),
            params
        }).then(response => {
            console.log(response.data);

            if(response.data.Response && response.data.Response === "True"){
                this.setState({
                    results: response.data.Search,
                })
            } else {
                console.log('there was a problem with the search')
                NotificationManager.warning('No movies found');
            }

            this.setState({
                searchFinished:true
            })
        })
    }


    componentDidMount(){
        // this.search('robots')

    }

      
    render(){

        const {text, year, results, searchFinished} = this.state;

        return (
         
                    <div>
                        <h3 className="">List Movies</h3>
                        <Search 
                            setText={this.setText.bind(this)} 
                            setYear={this.setYear.bind(this)}
                            text={text} 
                            year={year}
                            onSearch={this.search.bind(this)}
                        />
                        {searchFinished && <List results={results} />}
                    </div>

             

        )
    }

}