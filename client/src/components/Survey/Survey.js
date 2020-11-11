import React, { useState } from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";
import { Container, Card, Row, Button } from "react-bootstrap";
import "./survey.css"
import API from "../../utils/API";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function Survey(props) {
  const { user } = props.auth;
  const [userSurvey, setUserSurvey] = useState([
    {
      name: "Safety",
      position: 0,
      id: 0
    },
    {
      name: "Education",
      position: 1,
      id: 1,
    },
    {
      name: "Commute",
      position: 2,
      id: 2
    },
    {
      name: "Outdoors",
      position: 3,
      id: 3
    },
    {
      name: "Healthcare",
      position: 4,
      id: 4
    },
    {
      name: "Environmental Quality",
      position: 5,
      id: 5
    },
    {
      name: "Culture",
      position: 6,
      id: 6
    },
    {
      name: "Economy",
      position: 7,
      id: 7
    },
    {
      name: "Housing",
      position: 8,
      id: 8
    },
    {
      name: "Cost of Living",
      position: 9,
      id: 9
    },

  ]);

  console.log(userSurvey);

  const SortableItem = SortableElement(({ value, index }) => (
    <div className="list__card" index={index}>
      <div className="list__card-right">
        <div className="list__card-right--name"> {value.name} </div>
      </div>
    </div>
  ));

  const SortableList = SortableContainer(({ items }) => {
    return (
      <div className="list">
        {items
          .sort((a, b) => a.position - b.position)
          .map((value, index) => (
            <SortableItem value={value} index={index} key={value.id} />
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
    <Container className="mt-4 flex">
      <Row className="justify-content-center">
        <div className="text-center">
          <h4> Rank the following from top to bottom</h4>
          <h6> With the top being the most important to you and the bottom being the least.</h6>
        </div>
      </Row>
      <Row className="justify-content-center mt-4">
      <Card className="mr-3">
        <Card.Body>
          <h6 className="text-center"> Options </h6>
          <SortableList items={userSurvey} onSortEnd={onSortEnd} axis="xy" />
        </Card.Body>
      </Card>
      </Row>
    </Container>
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



