#Clicky Game
This app prompts the user to click on one of nine internet browser icons; each time shuffling the order of the icons, continuing until they click on an icon that has already been clicked once. This resets the game. Current score (the number of consecutive icons clicked correctly) and high score (highest number for that session) are displayed as well.

The app is build using React primarily, and is stateful; using he App.js file as it's primary controlling component. Within that file several helper functions are utilized to handle the logic of the game. 'handleClick' is passed into the Clickable Component's onClick function to handle the logic of the game; and it uses both a 'reset' and 'increment' function to either handle the resetting of the game in case of an incorrect click and a correct click respectively.

Additionally a 'shuffle' and 'setValue' function exist. With 'shuffle' handling shuffling the contents of the clickable object array in the state around to change their order after each click and 'setValue' setting the individual 'Clickable' objects 'clicked' value to true of false.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Components and Data
  *Clickable: Coponent which takes in object data to display and be clicked for the game to proceed.

  *clickables.json: json file containing array of clickable objects, each with an id property, a src property containing a link to a source image, and a clicked properties initially set to false which tracks whether the object has been clicked.

## Helper Functions
  *componentDidMount: modified to automatically set the state of the clickables array to the imported json object array

  *handleClick: function passed into Clickable component's onClick to handle logic of game. Checks whether it is the start of the game, through the state's 'start' property, and whether the item clicked has already been clicked in the state, utilizes two additional helper functions ('reset' and 'increment') to progress the game.

  *reset: resets game completely, setting the score to 0 and resetting the clickable objects 'clicked' properties to false once again using the 'setValue' helper function.

  *increment: increments the score by one, checks whether the current score exceeds the current highscore and then updates the state of both. Alters clicked property of corresponding clickable object in the array through 'setValue' and then uses 'shuffle' helper function to shuffle order of objects.

  *shuffle: takes the current current array of clickable objects, shuffles the order and sets 'clickable' array to the new, shuffled, array

  *setValue: takes in an index value and a boolean true or false value and sets the 'clicked' property of the corresponding object in the clickable array, then updates state with the changed array

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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
