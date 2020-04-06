import React, { Component } from 'react'

import {Link, withRouter} from 'react-router-dom';

class Header extends Component{
    render(){
        return (
            <div className="menu-outer-wrapper">
                
                 <div className="menu-wrapper">
                    <Link to="/">Search</Link>
                    <Link to="/my-movies">My movies</Link>
                 </div>
                 
            </div>
        )
    }
}

export default withRouter(Header);