/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import API from "../utils/API"
import { Card } from "react-bootstrap"
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
            <Card>
                <h2> {userResults.name} </h2>
                <h3> {user.id} </h3>
                {console.log(userResults)}
                {console.log("USERRESULTS RIGHT HERE")}
                {console.log(props)}
                {console.log("PROPS LOGGING HERE ^^^")}
                {console.log({ user })}
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