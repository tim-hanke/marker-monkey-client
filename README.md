# Marker Monkey

_"Let the Monkey remember it for you!"_

![Mockup-greybackground](https://user-images.githubusercontent.com/64292589/105615134-39be8280-5d9c-11eb-968e-7f07afe28312.png)

This is the client side of Marker Monkey, a bookmarking web app.

The server side repo is at [github.com/tim-hanke/marker-monkey-server](https://github.com/tim-hanke/marker-monkey-server).

The live version is hosted at [marker-monkey-client.vercel.app](https://marker-monkey-client.vercel.app/).

## Why?

I wanted a simple, visually-appealing way to keep track of things I wanted to read online, but didn't have time to read in the moment.

After registering for an account, a user can bookmark a webpage by pasting an URL into the Add Article page on Marker Monkey. Marker Monkey will then attempt to retrieve an image, title, description, and canonical URL for the page and save that info for that user. When viewing their list of saved articles, the user can open them in a new window or delete them from their list.

## Technical Details

This project was created with React, and bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Therefore, the normal Create React App scripts are all available:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
