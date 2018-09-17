import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Project extends Component {
    render() {
        const project = this.props.project;
        return (
              <div className="card">
                <div className="card-content">
                    <div className="content">
                        Project Name: <strong>{ project.name }</strong><br />
                        Project Open Issues: { project.open_issues }<br />
                        Private Privacy: { project.private ?
                                <span className="tag is-danger">Private</span> :
                                <span className="tag is-success">Public</span>
                            }<br />
                        Updated: <time dateTime={ project.updated_at }>{ project.updated_at }</time><br />
                        <a className="button is-link" href={ project.html_url } target="_blank">View Project on Github</a>
                    </div>
                </div>
            </div>
        );
    }
}

Project.propTypes = {
    project: PropTypes.object.isRequired
}

export default Project;
