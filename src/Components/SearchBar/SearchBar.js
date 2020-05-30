import React, { Component } from 'react';
import UserContext from '../../Context/UserContext';

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
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='games'>search</label>
                <input name='games' 
                ref={node => 
                (this.inputNode = node)}
                onChange={this.handleSubmit}
                ></input>
                <button>Submit</button>
            </form>
            </>
        )
    }
}