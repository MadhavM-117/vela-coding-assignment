# REACT (ui)

Solution can be found in the `ui` directory: [SOLUTION.md](./ui/SOLUTION.md)

## Part 1
Create a simple react component that meets the following requirements:

1. Retrieve Data from the API endpoint https://reqres.in/api/users
    - NOTE: More information on this API can be found at https://reqres.in/
2. Returns a table showing the results
3. Has a control that allows the user to get the next (and previous) page of results

## Part 2
What changes would you make to ensure that the component renders properly with server-side-rendering?

## Part 3
How would you ensure we test for or catch any changes to the API during development?

NOTE: At VelaMD our development stack currently uses React (16 at time of writing) and ES6 notation. If you know this spec, please show us - otherwise whatever version you are comfortable with.


# DJANGO (api)

Solution can be found in the `api` directory: [SOLUTION.md](./api/SOLUTION.md)

## Part 1
We would like you to create a basic Django application to host a Todo-list API. The requirements are:

1. Each todo item should store:
    1. A description
    2. A 'completed' flag
    3. A created timestamp
    4. An update timestamp
2. Implement the "List", "Read", "Create" and "Update" APIs using REST practices (preferably using Django-Rest-Framework)
3. Store the results in a SQLite Database

## Part 2
1. How would you document this API to be used by other developers?
2. How would you test this API to ensure it continues to work during future development?
3. How would you add the ability to assign users to todo-items?

## Part 3
1. How would you ensure team members can quickly start using your application on a local development environment?
2. How would you implement 12-Factor principles ([https://12factor.net/](https://12factor.net/)) in a Django application?

NOTE: At VelaMD we use Python 3.7 and Django (3.2.*). If you know this spec, please show us - otherwise whatever version you are comfortable with.
