import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions"
import { Container, Button } from "react-bootstrap";
import TopNav from "./Navbar";
// import SurveyResults from "./SurveyResults"


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
        {/* <SurveyResults /> */}
        <Container className="mt-4">
          <div className="row">
            <div className="col-sm-12 center-align">
              <h3 className="mb-4">
                <b>Welcome to your Fresh Start,</b> {user.email}!
            </h3>
              <Button
                onClick={this.onCitiesClick}
                className="btn btn-large"
              >
                Search Cities
            </Button>
            <Button onClick={this.onSurveyClick}
                className="btn btn-large"> Take Survey </Button>
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