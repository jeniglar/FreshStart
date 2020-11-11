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
                            {this.props.scores.categories.map((cityData,i) => (
                                <div key={i}>
                                    <div>{cityData.name}</div>
                                    <div>{cityData.score_out_of_10}</div>
                                </div>
                                // cityData.categories[i].color;
                            ))}
                        </div>
            </>
        )
    }

}


export default CityScores;