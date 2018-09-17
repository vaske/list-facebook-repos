
import {
    FETCH_REPOS,
    FETCH_REPOS_SUCCESS,
    FETCH_REPOS_FAILED,
    FETCH_REPOSITORY,
    FETCH_REPOSITORY_SUCCESS,
    FETCH_REPOSITORY_FAILED,
    FETCH_CONTRIBUTORS,
    FETCH_CONTRIBUTORS_SUCCESS,
    FETCH_CONTRIBUTORS_FAILED
  } from 'core/constants/repository';

export const fetchRepos = (username) => ({
    type: FETCH_REPOS,
    payload: { username }
});

export const fetchReposSuccess = (repos) => ({
    type: FETCH_REPOS_SUCCESS,
    payload: { repos }
});

export const fetchReposFailed = () => ({
    type: FETCH_REPOS_FAILED
});

export const fetchRepository = (username, repository) => ({
    type: FETCH_REPOSITORY,
    payload: { username, repository }
});

export const fetchRepositorySuccess = repository => ({
    type: FETCH_REPOSITORY_SUCCESS,
    payload: { repository }
});

export const fetchRepositoryFailed = () => ({
    type: FETCH_REPOSITORY_FAILED
});

export const fetchContributors = (username, repository) => ({
    type: FETCH_CONTRIBUTORS,
    payload: { username, repository }
});

export const fetchContributorsSuccess = contributors => ({
    type: FETCH_CONTRIBUTORS_SUCCESS,
    payload: { contributors }
});

export const fetchContributorsFailed = () => ({
    type: FETCH_CONTRIBUTORS_FAILED
});
