import React, {Component} from 'react';

import List from '../components/listMovies';
import MyContext from '../context';

import _ from 'lodash';

class MyMovies extends Component{

    state = {
        results: [],
        filterBy: '',
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

    sortBy(e){
        const sortBy = e.target.value

        let results = this.state.results;

        debugger;
        if(sortBy === 'name'){
            const ordered = _.orderBy(results, 'Title', 'asc');
            this.setState({
                results: ordered
            })
        } else {
            const ordered = _.orderBy(results, 'rating', 'desc');
            this.setState({
                results: ordered
            })
        }


       
    }

    render(){
        return (
            <React.Fragment>

                <label>Filter by:</label>
                <select defaultValue={0} onChange={this.sortBy.bind(this)}>
                    <option value="0" disabled>Select</option>
                    <option value="name">Name</option>
                    <option value="rating">Rating</option>
    
                </select>
                <List results={this.state.results} />
            </React.Fragment>
        )
    }
}

MyMovies.contextType = MyContext;
export default MyMovies