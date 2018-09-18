import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    fetchRepos,
    fetchRepository,
    fetchContributors
} from 'core/store/repository/actions/repository';
import * as Selectors from 'core/store/repository/selectors/repository';
import {GITHUB_USER} from 'core/constants/general';

import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import Main from 'components/Main';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRepo: undefined,
        };
    }

    componentWillMount() {
        this.props.fetchRepos(GITHUB_USER);
    }

    loadRepo = (name) => {
        this.props.fetchRepository(GITHUB_USER, name);
        this.setState({selectedRepo: name});
    }

    render() {
        const { selectedRepo } = this.state;
        const { repos, loadingContributors, selectedRepository, contributors } = this.props;
        return (
            <section className="section">
                <div className="container">
                    <Header repos={ repos }/>
                    <div className="columns is-multiline is-mobile">
                        <Sidebar repos={ this.props.repos } selectedRepo={ selectedRepo } loadRepo={ this.loadRepo } />
                        {selectedRepo &&
                            <Main
                                loadingContributors={ loadingContributors }
                                selectedRepository={ selectedRepository }
                                contributors={ contributors }
                            />
                        }
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => ({
  details: Selectors.getDetails(state),
  repos: Selectors.getRepos(state),
  selectedRepository: Selectors.getSelectedRepository(state),
  contributors: Selectors.getContributors(state),
  loadingContributors: Selectors.getrLoadingContributors(state)
});

const mapDispatchToProps = {
  fetchRepos,
  fetchRepository,
  fetchContributors
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
