import React, { Component } from 'react'


const UserContext = React.createContext({
    searchValue: null,
    games: [],
    genres: [],
    error: null,
    setValue: () => {},
    clearValue: () => {},
    setGames: () => {},
    clearGames: () => {},
    setError: () => {},
    clearError: () => {},
    setGenres: () => {},
    clearGenres: () => {},
})

export default UserContext

export class UserProvider extends Component {
    state = {searchValue: null, games: [], genres: [], error: null}

    setValue = searchValue => {
        this.setState({ searchValue })
    }

    clearValue = () => {
        this.setState({ searchValue: null })
    }

    setGames = games => {
        this.setState({ games })
    }

    clearGames = () => {
        this.setState({ games: [] })
    }

    setError = error => {
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    setGenres = genres => {
        this.setState({ genres })
    }

    clearGenres = () => {
        this.setState({ genres: [] })
    }

    render() {
        const value = {
            searchValue: this.state.searchValue,
            setValue: this.setValue,
            clearValue: this.clearValue,
            setError: this.setError,
            clearError: this.clearError,
            setGames: this.setGames,
            clearGames: this.clearGames,
            setGenres: this.setGenres,
            clearGenres: this.clearGenres,
            games: this.state.games,
            genres: this.state.genres,
            error: this.state.error,
        }
        return (
            <UserContext.Provider value={value}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}