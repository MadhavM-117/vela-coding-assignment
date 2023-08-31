# Solution (UI)

This directory contains the solution for the UI part of the project.

## Part 1

The component that is required to address the requirements in the `DisplayUsers` component. 

It will fetch the users data from the API and display it in a table, with a control to get the next and previous page of results.
The display & navigation logic, and styling is handled by the `UserTable` component.

The `DisplayUsers` component is a functional component, and uses the `useEffect` hook to fetch the data from the API.
In case of error, or while the data is being fetched, appropriate placeholders are shown which can be improved upon. 

## Part 2

For server-side rendering, we only require the `UserTable` component. 
It can be passed the appropriate data, and it will be shown.

Data should be fetched and passed on to the `UserTable` component. 
On navigation to a separate page, the server must make the call, populate the props, and render the `UserTable` with the new data.

# Part 3

For ensuring API changes are caught, we can use tests.
However, we must be careful to ensure the right amount of flexibility in the tests. 

Snapshot tests are not viable, as they will break on any change in the data.
Instead, we use tests to verify that the data being passed has the appropriate 'type' or 'shape' that the component expects.

This has been done in `src/api/index.test.js` using jest.
