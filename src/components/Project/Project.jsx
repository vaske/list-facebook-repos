import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ 
  project: {
    name, 
    updated_at, 
    html_url, 
    private: privateProject,
    open_issues
  }
}) => (
            <div className="card">
                <div className="card-content">
                    <div className="content">
                        Project Name: <strong>{ name }</strong><br />
                        Project Open Issues: { open_issues }<br />
                        Private Privacy: { privateProject ?
                                <span className="tag is-danger">Private</span> :
                                <span className="tag is-success">Public</span>
                            }<br />
                        Updated: <time dateTime={ updated_at }>{ updated_at }</time><br />
                        <a className="button is-link" href={ html_url } target="_blank">View Project on Github</a>
                    </div>
                </div>
        </div>
)

Project.propTypes = {
    project: PropTypes.object.isRequired
}

export default Project;
