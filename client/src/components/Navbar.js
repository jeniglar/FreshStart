import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

class TopNav extends Component {
    onLogout = event => {
        event.preventDefault();
        this.props.logoutUser();
    }

    render() {
        return(
            <>
            <header>
                <Navbar collapseOnSelect expand="lg" className="pt-2 pb-2 navbar bg-none">
                
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto navlink">

                        <Nav.Link onClick={this.onLogout} id="logout"> Logout </Nav.Link>


                        </Nav>
                    </Navbar.Collapse>

                </Navbar>

            </header>
            </>
        )
    }
}

TopNav.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
) (TopNav);