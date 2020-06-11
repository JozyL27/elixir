import React, { Component } from 'react';
import UserContext from '../../Context/UserContext';
import './SearchBar.css'

export default class SearchBar extends Component {
    static contextType = UserContext

    componentDidMount() {
        this.context.clearValue()
    }

    handleSubmit = ev => {
        ev.preventDefault()
        this.context.setValue(this.inputNode.value)
    }

    render() {
        return (
            <>
            <form onSubmit={this.handleSubmit} 
            className='searchBar'>
                <label htmlFor='games'>search</label>
                <input name='games' 
                ref={node => 
                (this.inputNode = node)}
                onChange={this.handleSubmit}
                placeholder='search'
                ></input>
                <button>Submit</button>
            </form>
            </>
        )
    }
}