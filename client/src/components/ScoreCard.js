import React, { Component } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

class CityScores extends Component {

    constructor(props) {
        super(props)
    }


    render() {
        return (
            <>
                <Card style={{ width: '30rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                    
                        {this.props.scores.categories.map((cityData, i) => (
                            <ListGroupItem key={i}>
                                <div>{cityData.name}</div>
                                <div>{cityData.score_out_of_10}</div>
                            </ListGroupItem>
        
                        ))}
                
                    </ListGroup>
                </Card>
            </>
        )
    }

}


export default CityScores;