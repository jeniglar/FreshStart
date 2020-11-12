import React, { Component } from 'react';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';

class CityScores extends Component {

    constructor(props) {
        super(props)
    }


    render() {
        return (
            <>
                <Card style={{ width: '30rem' }}>
                    <Card.Img variant="top" src={this.props.image.photos[0].image.mobile} />
                    <Card.Body>
                        <Card.Title>{this.props.search}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                    
                        {this.props.scores.categories.map((cityData, i) => (
                            <ListGroupItem key={i}>
                                <div>{cityData.name}</div>
                                <div>{cityData.score_out_of_10.toFixed(2)}</div>
                            </ListGroupItem>
        
                        ))}
                
                    </ListGroup>
                    <Button id="citySaveButton">Save this City</Button>
                </Card>
            </>
        )
    }

}


export default CityScores;