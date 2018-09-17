import { combineEpics } from 'redux-observable';
import {
    fetchRepos,
    fetchRepository,
    fetchRepositoryContributors
} from 'core/epics/repository/repository';


export const rootEpic = combineEpics(
    fetchRepos,
    fetchRepository,
    fetchRepositoryContributors
);
