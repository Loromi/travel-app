# Travel App

## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 
The travel app asks users for the destination and start date of a desired trip/journey. On submission the app calls the APIs Geodata, Weatherbit and Pixabay. The calls return data on location, weather and an URL of an image, the returned data is printed to the UI and stored in local storage.

## Installation
1.  fork GitHub repo: **git@github.com:Loromi/travel-app.git**
2.  create local copy of repo
3.  navigate into repo directory **//:user/../travel-app**
4.  setup `.env` file into directory:
    -   `GEO_USER=${http://api.geonames.org API username}`
    -   `WEATHERBIT_KEY=${https://api.weatherbit.io API key}`
    -   `PIXABAY_KEY=${https://pixabay.com/api API key}`
5.  Bash commands:
    -   `yarn add` installs all dependencies
    -   `yarn prod` compiles the app in production environment
    -   `yarn start`runs the app on **https://localhost:3000**
    -   `yarn dev` compiles the app in development environment
        -> note: dev mode needs running prod server in another bash console
    -   `yarn test` and `yarn jest`run the test suite

## Instructions
This will require modifying the `server.js` file and the `website/app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.css` to style your application to customized perfection.

## Extras
If you are interested in testing your code as you go, you can use `tests.js` as a template for writing and running some basic tests for your code.

## Examples
#### User Input
<img width="666" alt="Screenshot 2022-01-26 at 17 17 57" src="https://user-images.githubusercontent.com/77970573/151203171-63e1d684-4169-4187-9bc3-670b49d51b0f.png">
#### Journal Entry
<img width="597" alt="Screenshot 2022-01-26 at 17 19 21" src="https://user-images.githubusercontent.com/77970573/151203147-65626fdc-c4d2-47f5-8548-2fcb88eb4dd5.png">
#### Polaroid Effect
<img width="524" alt="Screenshot 2022-01-26 at 17 19 12" src="https://user-images.githubusercontent.com/77970573/151203167-098017c6-2940-4bd8-9cb2-0aa95c99ff39.png">
