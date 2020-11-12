/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import API from "../utils/API"
import { Card } from "react-bootstrap"

function SurveyResults(props) {
    const [userResults, setUserResults] = useState({
        name: "",
        position: 0
    });

    console.log(props)
    // const { user } = props.auth;

    useEffect(() => {
        API.findAllSurveyAnswers(props.user)
            .then(data => {
                console.log(data)
            }).catch(err => console.log(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // useEffect(() => {
    //     API.findSurvey(props.user)
    //         .then(data => {
    //             console.log(`@@@@@@@`)
    //             console.log(data.data)
    //             if (data.data[0]) {
    //             setUserResults(data.data)
    //             }
    //         })
    //         .catch(err => console.log(err));
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);
    // useEffect(() => {
    //     console.log(props);
    //     API.findSurvey(props.user)
    //         .then(results => {
    //             console.log("##########")
    //             console.log(results.data)
    //         })
    // }).catch(err => console.log(err))

    return (
        <>
            <Card>
                <h2> {userResults.name} </h2>
                {console.log(userResults)}
                {console.log(props)}
            </Card>
        </>
    )
}

export default SurveyResults;