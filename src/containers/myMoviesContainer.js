import React, {Component} from 'react';

import List from '../components/listMovies';
import MyContext from '../context';


class MyMovies extends Component{

    state = {
        results: [],
    }

    componentDidMount(){
        const {saved} = this.context;

        let allMovies = [];
        for(var movie in saved){
            allMovies.push(saved[movie]);
        }

        this.setState({
            results: allMovies
        })

    }

    render(){
        return (
            <List results={this.state.results} />
        )
    }
}

MyMovies.contextType = MyContext;
export default MyMovies