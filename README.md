<p align="center"> 
  <img src="https://i.ibb.co/T1B2pf5/Mern-logo-repo.png" alt="Mern-logo-repo">
</p>

<h1 align="center" 21io</h1>
  
<p align="center">
    <img src="https://img.shields.io/badge/javascript-red" />
    <img src="https://img.shields.io/badge/mongoDB-orange" />
    <img src="https://img.shields.io/badge/express-yellow" />
    <img src="https://img.shields.io/badge/react-purple" />
    <img src="https://img.shields.io/badge/node-blue" />
    <img src="https://img.shields.io/badge/graphQL-green" />
    <img src="https://img.shields.io/badge/apollo-white" />
</p>
   
## Description

🔍 A MERN stack application, 21io is an application that allows it's users to login, search for & save movies to a library then pay for a movie if they choose to stream it when online.

**[Deployed Application](https://movie-21io.herokuapp.com/)**
  
💻 Below is a screenshot of the application:
  
![movie_search_app](____________)

## User Story

```
GIVEN a movie search engine
WHEN I load the search engine
THEN I am presented with a navbar with options to "Search for Movies", "Signup", "Login" and an input area and "Search" button
WHEN I enter key search terms into the input area and select "Search" 
THEN I am presented with several search results, each featuring a movie title, description, image, and a link to that movie's trailer
WHEN I click on the Signup option
THEN I am presented with two inputs:  email address and a password then a Submit button
WHEN I enter a valid email address and create a password and click on the Signup button
THEN my user account is created and I am logged in to the site
WHEN the Login option is selected
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter my account’s email address and password and select the Login button
THEN I am logged in to the site
WHEN I am logged in to the site
THEN the navbar options change to "Search for Movies","Wish List", "History", and "Logout"
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a movie's title, description, image, and a link to that movie's trailer and a "Save" button
WHEN I click on the "Save" button on a movie
THEN that movie’s information is saved to my wish list 
WHEN I click on the "Wish List" Navbar option
THEN I am presented with all of the movies I have saved to my wish list, each featuring the movie's title, description, image, and a link to that movies trailer on the Movies site and a "Remove" button and "Stream" button
WHEN I click on the "Stream" button for a movie
THEN I am taken to the payment screen to pay online
WHEN I complete the payment 
THEN that movie is deleted from my movie wish list and added to my history
WHEN I click on the "Remove" button for a movie
THEN that movie is deleted from my saved wish list
WHEN I click on the "History" navbar option
THEN I am presented with all the movies I have streamed by : Movie name, Purchase amount, Date, and Time of Purchase
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options "Search for Movies", "Signup", "Login" and an input area and "Search" button

```

## Acceptance Criteria

```
Use React for the front end.
Use GraphQL with a Node.js and Express.js server.
Use MongoDB and the Mongoose ODM for the database.
Use queries and mutations for retrieving, adding, updating, and deleting data.
Be deployed using Heroku (with data).
Meet the minimum requirements of a PWA:
Uses a web manifest
Uses a service worker for offline functionality
Is installable
Have a polished UI.
Be responsive.
Be interactive (i.e., accept and respond to user input).
Include authentication (JWT).
Protect sensitive API key information on the server.
Have a clean repository that meets quality coding standards (file structure, naming conventions, best practices for class and id naming conventions, indentation, quality comments, etc.).
Have a high-quality README (with unique name, description, technologies used, screenshot, and link to deployed application).
```
   
## Table of Contents
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Table of Contents](#table-of-contents)
- [Available Scripts](#available-scripts)
  - [`npm start`](#npm-start)
  - [`npm test`](#npm-test)
  - [`npm run build`](#npm-run-build)
  - [`npm run eject`](#npm-run-eject)
- [Testing](#testing)
- [Contributing](#contributing)
- [Learn More](#learn-more)
  - [Code Splitting](#code-splitting)
  - [Analyzing the Bundle Size](#analyzing-the-bundle-size)
  - [Making a Progressive Web App](#making-a-progressive-web-app)
  - [Advanced Configuration](#advanced-configuration)
  - [Deployment](#deployment)
  - [`npm run build` fails to minify](#npm-run-build-fails-to-minify)

## Available Scripts

In the project root directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Both the server and react will start and populate as localhost in browser.
Open [http://localhost:3000](http://localhost:3000) to view in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Testing
✏️ To be defined or added at a later date

## Contributing
:octocat: [Jenifer Queen](https://github.com/queen-stack)
:octocat: [Nathalie](https://github.com/natswatch)
:octocat:[Michael Dreesen](https://github.com/mdreesen)


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


