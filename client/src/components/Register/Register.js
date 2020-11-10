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
        <Row>
          <div className="col-sm-12 pl-11.250px">
            <h2> <b>Sign up</b> for an account </h2>

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
                <label htmlFor="email">Email</label>
                <span className="red-text">{errors.email}</span>
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
                <label htmlFor="password">Password</label>
                <span className="red-text">{errors.password}</span>
              </div>

              <div className="col-sm-12 pl-11.250px">
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
        { registerUser}
)(withRouter(Register));