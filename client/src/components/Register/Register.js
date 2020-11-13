import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions"
import classnames from "classnames";
import { Container, Row, Form, Button } from 'react-bootstrap';

class Register extends Component {
  constructor() {
    super();
    this.state = {

      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {

    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }


  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const newUser = {

      email: this.state.email,
      password: this.state.password,

    };
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <Container className="mt-4">
        <Row className="pt-4">
          <h1> Discover your <b>Fresh Start</b> </h1>
        </Row>
        <Row>
          <h6> ...find the cities that line up with what's most important to you. </h6>
        </Row>
        <Row className="mt-4">
          <div className="col-sm-12 pl-11.250px">
      
            <p>
              Already a member? <Link to="/login">Log in</Link>
            </p>
          </div>

          <Form noValidate onSubmit={this.onSubmit}>
            <div className="input-field col-sm-12">
              <input
                onChange={this.onChange}
                value={this.state.email}
                error={errors.email}
                id="email"
                type="email"
                className={classnames("", {
                  invalid: errors.email
                })}
              />
              <label className="pl-2" htmlFor="email"> Email</label>
              <span className="pl-2 text-danger">{errors.email}</span>
            </div>
            <div className="input-field col-sm-12">
              <input
                onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
                id="password"
                type="password"
                className={classnames("", {
                  invalid: errors.password
                })}
              />
              <label className="pl-2" htmlFor="password"> Password</label>
              <span className="pl-2 text-danger">{errors.password}</span>
            </div>

            <div className="pt-2 col-sm-12 pl-11.250px">
              <Button
                type="submit"
                className="btn btn-large"
              >
                Sign up
                </Button>
            </div>
          </Form>

        </Row>

      </Container>
    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));