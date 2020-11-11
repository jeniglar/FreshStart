import React, { Component } from 'react';
import CityScores from '../components/ScoreCard';
import API from "../utils/API";


class CitySearch extends Component {
    state = {
        scores: {},
        search: "",
    };

    handleInputChange = event => {
        const { search, value } = event.target;
        this.setState({
            search: value
        });
        console.log(this.state.search);
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.displayCityScores();
    };

    displayCityScores = () => {
        API.getCity(this.state.search)
            .then(res => {
                this.setState({ scores: res.data });
                console.log(res.data);
            }
            )
            .catch(err => console.log(err));
    };

    componentDidMount() {
        this.displayCityScores();
    }

    render() {
    return (
        <>
            <h1>HOMEPAGE</h1>
            <form>
                <input onChange={this.handleInputChange} id="cityName" placeholder="Search City..."></input>
                <button onClick={this.handleFormSubmit} id="citySearchButton">Search</button>
            </form>
            {this.state.scores.length ? (
                <CityScores />
                 ) : (
                    <div>Sorry, there are currently no results for this city.</div>)}
        </>
    )
}
}

export default CitySearch;