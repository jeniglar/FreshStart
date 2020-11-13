/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import CityScores from '../components/ScoreCard';
import API from "../utils/API";
import { Container, Form, Button, Row } from "react-bootstrap";
import TopNav from "../components/Navbar";


class CitySearch extends Component {
    state = {
        scores: {},
        image: {},
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
        this.displayCityImage();
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

    displayCityImage = () => {
        API.getImage(this.state.search)
            .then(res => {
                this.setState({ image: res.data });
                console.log(res.data);
            }
            )
            .catch(err => console.log(err));
    };

    render() {
    return (
        <>
        <TopNav/>
        <Container className="mt-4">
            <Row className="mt-4 mb-2"> 
                <h2> Search Cities </h2>
            </Row>
            <Form>
                <input className="pt-2"onChange={this.handleInputChange} id="cityName" placeholder="e.g. 'omaha'"></input>
                <Button className="ml-2 mb-2" onClick={this.handleFormSubmit} id="citySearchButton">Search</Button>
            </Form>
            {Object.keys(this.state.scores).length > 0 ? (
                <CityScores scores={this.state.scores} search={this.state.search} image={this.state.image} />
                 ) : (
                    <div></div>)}
        </Container>
        </>
    )
}
}

export default CitySearch;