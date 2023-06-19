# Harry Potter Web App

## Description

The Harry Potter Web App is a web application that allows users to explore the world of Harry Potter. Users can log in or sign up, view their profile, access a dashboard with separate links to view the list of all items from the two entities in separate views or sections, and view the details of each entity.

The application utilizes several services, such as a file that manages API calls, Firebase for user session management, and Local Storage to manipulate information that will be managed from the browser.

For the workflow, the list of items should be managed using Local Storage, so that the API is only called the first time the application is accessed. Users should be able to create, edit, or delete an entity. Additionally, there should be a button that allows "synchronizing" the NASA API again to reset all changes made.

Users can also add or remove entities from their favorites. Each user has their own favorites list.

In terms of styles, styled-components should be used to implement the styles. Optionally, third-party CSS libraries such as Material-UI or Bootstrap can be used. All views should be responsive, and a strong emphasis will be placed on design.

The repository workflow should be managed with GitHub, ensuring a good commit history with descriptive messages. Care should be taken with the commit messages for better understanding of the work done. The team should use the same code style using Prettier to maintain code consistency. Additionally, environment variables should be used to manage API keys in a .env file.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).