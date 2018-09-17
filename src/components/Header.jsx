import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    render() {
        const repos = this.props.repos;
        return (
            <div>
                <h1 className="title">List all repos owned by Facebook</h1>
                <h2 className="subtitle">
                    Repos: <strong>{ repos.length }</strong>
                </h2>
            </div>
        );
    }
}

Header.propTypes = {
    repos: PropTypes.array.isRequired
}

export default Header;
