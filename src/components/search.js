import React, { Component } from 'react'


export default class Search extends Component{

    render(){
        const {text, year, setText, setYear, onSearch} = this.props;

        return (
            <div className="search--inner-wrapper">
                <input type="text" value={text} placeholder="name" onChange={(e) => setText(e.target.value)} />
                <input type="number" value={year} placeholder="year" onChange={(e) => setYear(e.target.value)} />
                <button onClick={onSearch} >Search </button>
            </div>
        )
    }

}