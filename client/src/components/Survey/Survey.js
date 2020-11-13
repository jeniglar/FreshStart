import React, { useState } from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";
import { Container, Card, Row, Button } from "react-bootstrap";
import "./survey.css"
import API from "../../utils/API";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TopNav from "../Navbar";

function Survey(props) {
  console.log(props)
  const { user } = props.auth;
  const [userSurvey, setUserSurvey] = useState([
    {
      name: "Safety",
      position: 0,
      surveyID: 0,
      user: user.id
    },
    {
      name: "Education",
      position: 1,
      surveyID: 1,
      user: user.id
    },
    {
      name: "Commute",
      position: 2,
      surveyID: 2,
      user: user.id
    },
    {
      name: "Outdoors",
      position: 3,
      surveyID: 3,
      user: user.id
    },
    {
      name: "Healthcare",
      position: 4,
      surveyID: 4,
      user: user.id
    },
    {
      name: "Environmental Quality",
      position: 5,
      surveyID: 5,
      user: user.id
    },
    {
      name: "Culture",
      position: 6,
      surveyID: 6,
      user: user.id
    },
    {
      name: "Economy",
      position: 7,
      surveyID: 7,
      user: user.id
    },
    {
      name: "Housing",
      position: 8,
      surveyID: 8,
      user: user.id
    },
    {
      name: "Cost of Living",
      position: 9,
      surveyID: 9,
      user: user.id
    },
    {
      name: "Venture Capital",
      position: 10,
      surveyID: 10,
      user: user.id
    },
    {
      name: "Business Freedom",
      position: 11,
      surveyID: 11,
      user: user.id
    },
    {
      name: "Travel/Connectivity",
      position: 12,
      surveyID: 12,
      user: user.id
    },
    {
      name: "Startups",
      position: 13,
      surveyID: 13,
      user: user.id
    },
    {
      name: "Taxation",
      position: 14,
      surveyID: 14,
      user: user.id
    },
    {
      name: "Internet Access",
      position: 15,
      surveyID: 15,
      user: user.id
    },
    {
      name: "Tolerance",
      position: 16,
      surveyID: 16,
      user: user.id
    },

  ]);

  console.log(userSurvey);

  const handleFormSubmit = event => {
    event.preventDefault();
    console.log("clicked")
    console.log(API.saveSurvey())
    API.saveSurvey(
      userSurvey
    )
      .then(surveyData => {
        console.log("survey saved!")
        console.log(surveyData)
      }).catch(err => console.log(err));
  }

  const SortableItem = SortableElement(({ value, index }) => (
    <div className="list_card" index={index}>
      <div className="list__card">
        <div className="list_card_name"> {value.position + 1}. {value.name} </div>
      </div>
    </div>
  ));

  const SortableList = SortableContainer(({ items }) => {
    return (
      <div className="list">
        {items
          .sort((a, b) => a.position - b.position)
          .map((value, index) => (
            <SortableItem value={value} index={index} key={value.surveyID} />
          ))}
      </div>
    );
  });

  const onSortEnd = ({ oldIndex, newIndex }) => {
    let arr = arrayMove(userSurvey, oldIndex, newIndex);
    for (let i = 0; i < arr.length; i++) {
      arr[i].position = i;
    }
    setUserSurvey(arr);
  };


  return (
    <>
      <TopNav />
      <Container className="mt-4">
        <Row className="justify-content-center pt-4">
          <div className="text-center">
            <h3> Rank the following from most to least important to you</h3>
            <h6> Use your mouse to drag each option up (for most) or down (for least.)</h6>
          </div>
        </Row>
        <Row className="justify-content-center mt-4">
          <Card className="survey-card mr-3">
            <Card.Body>
              <SortableList items={userSurvey} onSortEnd={onSortEnd} axis="xy" />
            </Card.Body>
          </Card>
        </Row>
        <Row className="justify-content-center mt-4">
          <Button className="mr-2" onClick={handleFormSubmit}> Save </Button>
          <Button href="/home"> Search Cities </Button>
        </Row>
      </Container>
    </>
  );
};

Survey.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps
)(Survey);



