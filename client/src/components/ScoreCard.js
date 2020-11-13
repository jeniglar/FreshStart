/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { Card, ListGroup, ListGroupItem, Button, Row, Container } from 'react-bootstrap';

class CityScores extends Component {

    constructor(props) {
        super(props)
    }


    render() {
        return (
            <>
                <Container>
                    {/* <img src={this.props.image.photos[0].image.mobile}/> */}
                    <Row>
                        <Card className="scoreCard mr-5" style={{ width: '30rem' }}>
                            {/* <Card.Img variant="top" src={this.props.image.photos[0].image.mobile} /> */}
                            <Card.Title className="mt-2 text-center">{this.props.search}</Card.Title>
                            <ListGroup className="list-group-flush">

                                {this.props.scores.categories.map((cityData, i) => (
                                    <ListGroupItem key={i}>
                                        <div>{cityData.name}</div>
                                        <div className="text-primary">{cityData.score_out_of_10.toFixed(2)} / 10</div>
                                    </ListGroupItem>

                                ))}

                            </ListGroup>
                            <Button id="citySaveButton">Save this City</Button>
                        </Card>

                        <Card className="scoreCard overflow-auto" style={{ width: '30rem' }}>
                            {/* <Card.Img variant="top" src={this.props.image.photos[0].image.mobile} /> */}
                            <Card.Title className="mt-2 text-center">my ranking</Card.Title>
                            <ListGroup className="list-group-flush">

                                {this.props.scores.categories.map((cityData, i) => (
                                    <ListGroupItem key={i}>
                                        <div>{cityData.name}</div>
                                        <div className="text-primary">{cityData.score_out_of_10.toFixed(2)} / 10</div>
                                    </ListGroupItem>

                                ))}

                            </ListGroup>
                            <Button id="citySaveButton">Update Ranking</Button>
                        </Card>
                    </Row>
                </Container>

            </>
        )
    }

}


export default CityScores;