import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Sidebar extends Component {
    render() {
        const {repos, selectedRepo, loadRepo} = this.props;
        return (
            <div className="column is-one-quarter">
                <aside className="menu">
                    <p className="menu-label">
                        Repos
                    </p>
                    <ul className='menu-list'>
                        {repos.map(repo =>
                            <li key={ repo.id }>
                                <a onClick={ () => loadRepo(repo.name) } className={ selectedRepo === repo.name ? 'is-active' : ''}>
                                    { repo.name } ({ repo.watchers_count })
                                </a>
                            </li>
                        )}
                    </ul>
                </aside>
            </div>
        );
    }
}

Sidebar.propTypes = {
    repos: PropTypes.array.isRequired,
    selectedRepo: PropTypes.string,
    loadRepo: PropTypes.func.isRequired
}

export default Sidebar;
