import React, { Component } from 'react';
import API from "../utils/API";
import { Card } from 'react-bootstrap';

class CityScores extends Component {

   constructor(props) {
        super(props)
   }


    render() {
        return (
            <>
                        <div>
                            {this.props.scores.categories.map(cityData => (
                                cityData.categories.name,
                                cityData.categories.score_out_of_10
                                // cityData.categories[i].color;
                            ))}
                        </div>
            </>
        )
    }

}


export default CityScores;