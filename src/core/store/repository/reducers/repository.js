import { combineReducers } from 'redux';
import {
    FETCH_REPOS_SUCCESS,
    FETCH_REPOSITORY,
    FETCH_REPOSITORY_SUCCESS,
    FETCH_CONTRIBUTORS_SUCCESS,
} from 'core/constants/repository';

const initialState = {
    repos: [],
    selectedRepository: undefined,
    contributors: [],
    loadingContributors: undefined
};

export const details = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REPOS_SUCCESS:
            const repos = state.repos.concat(action.payload.repos.content).sort(function(a, b) {
                return b.watchers_count - a.watchers_count;
            });
            return {
                ...state,
                repos: repos
            }
        case FETCH_REPOSITORY:
          return {
            ...state,
            selectedRepository: undefined,
            contributors: [],
            loadingContributors: false
        }
        case FETCH_REPOSITORY_SUCCESS:
            return {
                ...state,
                selectedRepository: action.payload.repository.response,
                loadingContributors: true
            }
        case FETCH_CONTRIBUTORS_SUCCESS:
            return {
                ...state,
                contributors: action.payload.contributors.response
            }
        default:
            return state;
    }
};

export default combineReducers({
    details
});
