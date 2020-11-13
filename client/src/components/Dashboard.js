import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions"
import { Container, Button, Row, Card } from "react-bootstrap";
import TopNav from "./Navbar";
// eslint-disable-next-line no-unused-vars
import SurveyResults from "./SurveyResults"


class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };


  render() {

    const { user } = this.props.auth;
    console.log(this.props.auth.user);
    return (
      <>
        <TopNav />

        <Container className="mt-4">
          <div className="row">
            <div className="col-sm-12 center-align">
              <h3 className="mb-4">
                <b>Welcome to your Fresh Start,</b> {user.email}!
            </h3>
              <Container>
                <Row className="justify-content-center">
                <Card className="mt-4 pt-4 pb-4">
                  <Card.Body>
                  <Row className="justify-content-center text-center">
                    <div className="pl-2 pr-2"> <p>Start out your search by first ranking the options (e.g. commute, cost of living, safety) provided. When you search a city you're intersted in, you will see it's ranking in each category, plus the overall ranking versus your ranking so you can determine which spots best line up with what is most important to you!</p>
                    <p> We use the teleport API to determine the score for each category. Visit <a target="_blank" href ="https://teleport.org/"> Teleport</a> to learn more! </p>
                      
                     </div>
                  </Row>
                  <Row className="justify-content-center pt-4">
                    
                    <Button href="/survey"
                      className="btn btn-primary mt-2"> Complete Ranking </Button>
                    
                    <Button
                      href="/home"
                      className="btn btn-primary mt-2 ml-2"
                    >
                      Search Cities
                    </Button>
                    
                  </Row>
                  </Card.Body>
                </Card>
                </Row>
              </Container>

            </div>
          </div>
        </Container>
        {/* <SurveyResults /> */}
      </>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);