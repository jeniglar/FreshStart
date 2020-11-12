import React, { useState, useEffect } from "react";
import API from "../utils/API"
import {Card} from "react-bootstrap"
import PropTypes from "prop-types";
import { connect } from "react-redux";

function SurveyResults(props) {
    const [userResults, setUserResults] = useState({
        name: "",
        position: 0
    })


    useEffect(() => {
        API.findSurvey(props)
            .then(results => {
                console.log("##########")
                console.log(results.data)
            })
    }).catch(err => console.log(err))

    return (
        <>
            <Card>
                <h1> Hello </h1>
                <h2> {userResults.name} </h2>
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