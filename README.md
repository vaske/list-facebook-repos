# GitHub Preview App

This is a sample application which combines usage of React, Redux and RxJS with Bulma CSS Framework
main purpose is to list all public repos owned by Facebook and allow user to see project details and contributors on click to project name.


## Installation:
1. `yarn`
2. `yarn start` if port 3000 is in use it will ask you do you want to open it on other port
3. Open `http://localhost:3000`

## Testing
1. `yarn test`

In case that you found errors when running test you should then install `brew install watchman`

## Project structure

```
my-app/
  README.md
  node_modules/
  package.json
  .env
  public/
    index.html
    favicon.ico
  src/
    components/
      Contributor/
      Loader/
      Project/
      App.jsx
      App.test.js
    core/
      api/
        get.js
      constants/
        general.js
        repository.js
      epics/
        repository/
      store/
        repository/
          actions/
          reducers/
          selectors/
    sass/
      index.scss
    index.js
```

In `components` we keep React components, and under `core` we keep main application functionality like `epics` RxJS calls to API and `store` Redux store with actions, reducers and selectors.



