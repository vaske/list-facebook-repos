import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Loader from 'components/Loader/Loader';
import Project from 'components/Project/Project';
import Contributor from 'components/Contributor/Contributor';

class Main extends Component {
    render() {
        const {loadingContributors, selectedRepository, contributors} = this.props;
        return (
            <Loader loaded={ loadingContributors }>
                <div className="column">
                    {selectedRepository &&
                        <Project project={ selectedRepository } />
                    }

                    { contributors &&
                        <div>
                            <h2>List of Contributors</h2>
                            <div className="columns is-multiline is-mobile">
                                {contributors.map(contributor =>
                                    <div className="column" key={ contributor.id }>
                                        <Contributor contributor={ contributor } />
                                    </div>
                                )}
                            </div>
                        </div>
                    }
                </div>
            </Loader>
        );
    }
}

Main.propTypes = {
    contributors: PropTypes.array,
    loadingContributors: PropTypes.any,
    selectedRepository: PropTypes.object
}

export default Main;
