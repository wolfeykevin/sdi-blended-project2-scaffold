# **Welcome to SDI #10: Project 2, Martian Rover Exploration**
##### Project By:  Cybyl Hancock, Daniel Salazar, Zachary Haines, Darius DeSpain, and Kevin Wolfe

#### **Repository Directions:**
1)  Ensure you're connected to the internet; the project requires an internet connection for API fetch requests and testing.

2)  Navigate to where you want to clone the repository.

2)  Fork and clone the repository by opening your terminal and entering:

    >git clone (github address of the repository)

    Enter your github credentials and clone the repository.

3)  Navigate to the created git clone directory and install required dependencies by entering the following commands in your terminal, one at a time:

    >npm install react-router-dom

    >>Installs router package

    >npm install --save styled-components

    >>Installs Styled components

    >npm install @mui/material

    >>Installs MUI

    >npm install @mui/styles --force

    >>Installs MUI styling

    >npm install @mui/icons-materials

    >>Installs MUI icons

    >npm install @emotion/react @emotion/styled

    >>Installs CSS/JS Emotion library

    >npm install --save-dev cypress @testing-library/cypress

    >>Installs Cypress for testing

    >npm install --save-dev @testing-library/react

    >>Installs React testing library for unit testing

    >npm install msw

    >>Installs Mock Service Worker for mock testing

#### Project Objectives:
>1)  Should utilize functional Hooks-based React Components.
>2)  Should implement standard hooks such as useState, useEffect, and useContext.
>3)  Should recognize situations and implement custom hooks where they can provide dynamic reusable hooks for multiple components to utilize.
>4)  Should implement at least 3 separate routes using React Router.
>5)  Should handle wildcard/dynamic routes client-side.
>6)  Should gracefully handle page refreshes on non-root routes.
>7)  Should implement testing on all top-level components.
>8)  Unit testing should be implemented for any functionality deemed critical to a component.
>9)  End to end testing should be implemented to ensure that the different components can work properly together to achieve their intended purpose.
>10)  UI testing with Cypress should be implemented to ensure that the application as a whole behaves functionally as intended as well as behaving as expected for a         potential user.
>11)  Should effectively implement styling
>12)  Feel free to use any styling libraries and/or philosophies that seems appropriate to your app, as long as your group stays consistent and you are able to achieve       an effective implementation and appealing, visually cohesive final product.
>>12a)  You may utilize a library like styled-components or material-ui. If you'd like to make use of a different library or approach than those covered in the                 curriculum thus far, keep in mind that troubleshooting from instructors may be more limited depending on your choice.
>>
>>12b)  No hard styling guides or requirements will be assessed, just ensure that the styling for each component matches well with the rest of the application.
        Should implement live data from a third party API or utilize dummy data that you create.
