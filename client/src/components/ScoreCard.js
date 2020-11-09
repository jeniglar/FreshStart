import React, { Component } from 'react';
import API from "../utils/api/api";


class CityScores extends Component {
    state = {
        scores: {},
        search: "Philadelphia",
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.setState({
            search: ""
        }) ;
        this.displayCityScores();
    };

    displayCityScores = () => {
        API(this.state.search)
        .then(res => 
            this.setState( {scores: res.data} )
          )
          .catch(err => console.log(err));
      };
 
 
    render() {
        return (
            <>
            {this.state.scores.length ? (
            <div> 
            {this.state.scores.map(cityData => (
                cityData.categories.name
                // cityData.categories[i].score_out_of_10;
                // cityData.categories[i].color;
            ))}
            </div>
            
            ) : (
            
            <div>False Section</div>)}
            </>
        )
    }
       
    }


    export default CityScores;