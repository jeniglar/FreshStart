/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import API from "../utils/API"
import { Card, ListGroup, ListGroupItem, Button, Modal } from "react-bootstrap"
import PropTypes from "prop-types";
import { connect } from "react-redux";

function SurveyResults(props) {
    // console.log(props)
    const { user } = props.auth;
    const [userResults, setUserResults] = useState({
    });



    console.log({ user })

    useEffect(() => {
        API.findAllSurveyAnswers({ user })
            .then(data => {
                console.log(data.data[1])
                console.log("////////")
                setUserResults(data.data)
            }).catch(err => console.log(err))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <>
            {console.log(userResults.data)}
            {console.log("USERRESULTS RIGHT HERE")}
            {console.log(props)}
            {console.log("PROPS LOGGING HERE ^^^")}
            {console.log({ user })}


            <Card className="scoreCard overflow-auto" style={{ width: '30rem' }}>
                {/* <Card.Img variant="top" src={this.props.image.photos[0].image.mobile} /> */}
                <Card.Title className="mt-2 pt-2 pb-2 text-center">my ranking</Card.Title>
                <ListGroup className="list-group-flush">
                    
                    <ListGroupItem variant="primary">
                        <div>Safety</div>
                        <br></br>
                    </ListGroupItem>
                    <ListGroupItem className="listbg">
                        <div>Healthcare</div>
                        <br></br>
                    </ListGroupItem>
                    <ListGroupItem variant="primary">
                        <div>Education</div>
                        <br></br>
                    </ListGroupItem>
                    <ListGroupItem>
                        <div>Culture</div>
                        <br></br>
                    </ListGroupItem>
                    <ListGroupItem variant="primary">
                        <div>Commute</div>
                        <br></br>
                    </ListGroupItem>
                    <ListGroupItem>
                        <div>Environmental Quality</div>
                        <br></br>
                    </ListGroupItem>
                    <ListGroupItem variant="primary">
                        <div>Outdoors</div>
                        <br></br>
                    </ListGroupItem>
                    <ListGroupItem>
                        <div>Economy</div>
                        <br></br>
                    </ListGroupItem>
                    <ListGroupItem variant="primary">
                        <div>Housing</div>
                        <br></br>
                    </ListGroupItem>
                    <ListGroupItem>
                        <div>Cost of Living</div>
                        <br></br>
                    </ListGroupItem>
                    <ListGroupItem variant="primary">
                        <div>Venture Capital</div>
                        <br></br>
                    </ListGroupItem>
                    <ListGroupItem>
                        <div>Business Freedom</div>
                        <br></br>
                    </ListGroupItem>
                    <ListGroupItem variant="primary">
                        <div>Travel/Connectivity</div>
                        <br></br>
                    </ListGroupItem>
                    <ListGroupItem>
                        <div>Startups</div>
                        <br></br>
                    </ListGroupItem>
                    <ListGroupItem variant="primary">
                        <div>Taxation</div>
                        <br></br>
                    </ListGroupItem>
                    <ListGroupItem>
                        <div>Internet Access</div>
                        <br></br>
                    </ListGroupItem>
                    <ListGroupItem variant="primary">
                        <div>Tolerance</div>
                        <br></br>
                    </ListGroupItem>
                    
                </ListGroup>
                <Button id="citySaveButton">Update Ranking</Button>
            </Card>


        
        </>
    )
}

SurveyResults.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps
)(SurveyResults);