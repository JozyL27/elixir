import React, { Component } from 'react'


const UserContext = React.createContext({
    searchValue: null,
    setValue: () => {},
    clearValue: () => {},
})

export default UserContext

export class UserProvider extends Component {
    state = {searchValue: null}

    setValue = searchValue => {
        this.setState({ searchValue })
    }

    clearValue = () => {
        this.setState({ searchValue: null })
    }

    render() {
        const value = {
            searchValue: this.state.searchValue,
            setValue: this.setValue,
            clearValue: this.clearValue,
        }
        return (
            <UserContext.Provider value={value}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}