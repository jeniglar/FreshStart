import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions"
import { Container, Button } from "react-bootstrap";
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
              <Container className="justify-content-center">
              <SurveyResults />
              <Button 
                href="/home"
                className="btn btn-primary mt-2 mr-2"
              >
                Search Cities
            </Button>
              <Button href="/survey"
                className="btn btn-primary mt-2"> Take Survey </Button>
              </Container>
              
            </div>
          </div>
        </Container>
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