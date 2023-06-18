# Harry Potter Web App

## Description

The Harry Potter Web App is a web application that allows users to explore the world of Harry Potter. Users can log in or sign up, view their profile, access a dashboard with separate links to view the list of all items from the two entities in separate views or sections, and view the details of each entity.

The application utilizes several services, such as a file that manages API calls, Firebase for user session management, and Local Storage to manipulate information that will be managed from the browser.

For the workflow, the list of items should be managed using Local Storage, so that the API is only called the first time the application is accessed. Users should be able to create, edit, or delete an entity. Additionally, there should be a button that allows "synchronizing" the NASA API again to reset all changes made.

Users can also add or remove entities from their favorites. Each user has their own favorites list.

In terms of styles, styled-components should be used to implement the styles. Optionally, third-party CSS libraries such as Material-UI or Bootstrap can be used. All views should be responsive, and a strong emphasis will be placed on design.

The repository workflow should be managed with GitHub, ensuring a good commit history with descriptive messages. Care should be taken with the commit messages for better understanding of the work done. The team should use the same code style using Prettier to maintain code consistency. Additionally, environment variables should be used to manage API keys in a .env file.
