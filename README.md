# Veteran Status Checker

### Requirements:

This project requires `nodejs` and `npm`. Once the repo is cloned, please run `npm i` to install dependencies.

A `.env` file will also need to be created with the following variables:

```
REACT_APP_BASE_URL = https://sandbox-api.va.gov/services/veteran_confirmation/v0/
REACT_APP_API_KEY = <va.gov api key here>
```

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
A browser window will open to [http://localhost:3000](http://localhost:3000) to view the app. If no browser opens, please manually navigate to the address mentioned.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run test:coverage`

Launches `npm test` with coverage. The project currently have roughly 50% test coverage (Sept 26, 2021).
