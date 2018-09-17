import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contributor extends Component {
    render() {
        const contributor = this.props.contributor;
        return (
            <div className="card">
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                                <img src={ contributor.avatar_url } alt="avatar" />
                            </figure>
                        </div>
                    </div>

                    <div className="content">
                        <a
                            href={ `http://github.com/${ contributor.login }` }
                            target="_blank"
                        >{ contributor.login }</a>
                    </div>
                </div>
            </div>
        );
    }
}

Contributor.propTypes = {
    contributor: PropTypes.object.isRequired
}

export default Contributor;
