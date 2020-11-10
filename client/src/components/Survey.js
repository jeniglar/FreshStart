import React, { Component } from "react";
import TopNav from "./Navbar";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions"


class Survey extends Component {

    render() {
        return (
            <>
            <TopNav />
            First time users are directed to the survey.
            </>
        )
    }
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
    { logoutUser }
  )(Survey);




