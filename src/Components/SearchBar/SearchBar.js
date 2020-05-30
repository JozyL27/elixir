import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = {value: null}
    render() {
        return (
            <>
            <form>
                <label htmlFor='games'>search</label>
                <input name='games'></input>
                <button>Submit</button>
            </form>
            </>
        )
    }
}