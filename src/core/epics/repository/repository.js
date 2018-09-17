import { ofType } from 'redux-observable';
import { empty } from "rxjs/observable/empty";
import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { map, mergeMap, catchError, retry, expand } from 'rxjs/operators';
import { get } from "core/api/get";

import {
    FETCH_REPOS,
    FETCH_REPOSITORY,
    FETCH_CONTRIBUTORS
} from 'core/constants/repository';

import { GITHUB_API_URL } from 'core/constants/general';

import {
    fetchReposSuccess,
    fetchReposFailed,
    fetchRepositorySuccess,
    fetchRepositoryFailed,
    fetchContributorsSuccess,
    fetchContributorsFailed
} from 'core/store/repository/actions/repository';

export const fetchRepos = action$ =>
    action$.pipe(
        ofType(FETCH_REPOS),
        mergeMap(action =>
            get(`${GITHUB_API_URL}/users/${action.payload.username}/repos`).pipe(
                expand(({ next }) => next ? get(next) : empty()),
                map(repos => fetchReposSuccess(repos)),
                retry(2),
                catchError(error => of(fetchReposFailed()))
            )

        )
    );

export const fetchRepository = action$ =>
    action$.pipe(
        ofType(FETCH_REPOSITORY),
        mergeMap(action =>
            ajax(`${GITHUB_API_URL}/repos/${action.payload.username}/${action.payload.repository}`).pipe(
                map(repository => fetchRepositorySuccess(repository)),
                retry(2),
                mergeMap(action => of(action, { type: FETCH_CONTRIBUTORS, payload: action.payload.repository })),
                catchError(error => of(fetchRepositoryFailed()))
            )
        ),
    );

export const fetchRepositoryContributors = action$ =>
    action$.pipe(
        ofType(FETCH_CONTRIBUTORS),
        mergeMap(action =>
            ajax(`${action.payload.response.contributors_url}`).pipe(
                map(repository => fetchContributorsSuccess(repository)),
                retry(2),
                catchError(error => of(fetchContributorsFailed()))
            )
        )
    );
