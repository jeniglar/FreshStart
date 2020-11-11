import React, { useState } from "react";
import "./survey.css"
// import TopNav from "../Navbar";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions"
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import { Container, Card, Row, Button } from "react-bootstrap";


function Survey (props) {
  console.log(props);
  const { user } = props.auth
  
    return (
      <>

        <Container className="flex">
          <Row className="justify-content-center">
            <div className="text-center">
              <h4> Rank the following from 1-10</h4>
              <h6> With one being the most important to you and 10 being the least.</h6>
            </div>
          </Row>
          <Row className="justify-content-center mt-4">
            <Card className="mr-3">
              <Card.Body>
                <h6 className="text-center"> Options </h6>
                <ul>
                  
                  {/* <li className="mb-2"> Healthcare </li>
                  <li className="mb-2"> Environmental Quality</li>
                  <li className="mb-2"> Safety</li>
                  <li className="mb-2"> Commute </li>
                  <li className="mb-2"> Education </li>
                  <li className="mb-2"> Cost of Living</li>
                  <li className="mb-2"> Housing </li>
                  <li className="mb-2"> Culture </li>
                  <li className="mb-2"> Economy </li>
                  <li className="mb-2"> Outdoors </li> */}
                </ul>
              </Card.Body>
            </Card>


            <Card>
              <Card.Body className="text-center">
                <h6> Users answers</h6>
              </Card.Body>

            </Card>

          </Row>
          <Row className="justify-content-center mt-4">
          <Button> Search Cities </Button>
          </Row>

        </Container >

      </>
    )
  
}

Survey.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
)(Survey);




