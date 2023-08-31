# Solution (API)

This directory contains the solution for the API part of the project.

## Part 1

The API has been implemented using Django with Django Rest Framework.
It can be found in [`src/`](./src).

The Views are defined in [`src/vela/todolist/views.py`](./src/vela/todolist/views.py).

## Part 2

1. For documentation, the best way would be to use dynamically generated docs using OpenAPI. Here, 
I've done it using swagger. It can be accessed at [`/swagger-ui/`](http://localhost:8000/swagger-ui/) when the server is running. 

The required config can be found at [`src/vela/urls.py`](./src/vela/urls.py).

2. Given a set of well-defined behaviour for an API, we must test the API to ensure that it follows the behaviour.
In this case, we can use Django's inbuilt testing framework to test the API endpoints behaviour. 
The tests can be found in [`src/vela/todolist/tests/test_views.py`](./src/vela/todolist/tests/test_views.py).

3. To assign users to todo-items, you would create a ManyToMany relationship between the User model and the TodoItem model.
The implementation can be found here: [`src/vela/todolist/models.py`](./src/vela/todolist/models.py).

However, this will require further updates in the serializer and views to handle the new relationship.

## Part 3

1. For ensuring team members can quickly start the application on a local dev environment, it is generally best to 
have the application run in a container. This ensures that the application can be run on any machine, regardless of 
OS and other variables. 

Another approach is to have OS specific instructions for setting up the dev environment.
Here, I've used [`poetry`](https://python-poetry.org/) to manage the dependencies, and have included the instructions, 
and once `poetry` is installed, the dependencies can be installed using `poetry install`.

Once the project gets bigger, it is best to have a containerized setup, as it will be easier to manage, and allows you to 
easily include test databases, and other services that the application might require.

2. To ensure that we create a 12-factor app: 

1. Codebase: The codebase is stored in a git repository, and is version controlled.
Developers should work in their own feature branches, and merge into the main branch once the feature is complete. 

If required, there can be 2 or 3 main branches, one for development, one for staging, and one for production.

2. Dependencies: The dependencies are managed using `poetry`, and are stored in the `pyproject.toml` file.

3. Config: The configuration is stored in environment variables, and can be found in the `.env` file.
Variables such as the path to the database, the secret key, etc. should be stored as environment variables.
When running locally, it can be in a `.env` file, and in production, it can be stored in the environment.
For Django, ensure as much of the configuration ([`src/vela/settings.py`](./src/vela/settings.py)) is stored in environment variables.

4. Backing services: Treat backing services as attached resources.
All services and resources should be able to be replaced easily by changing a config variable.
Avoid hardcoding any values, and use environment variables instead.

5. Build, release, run: The application should be built and released using a CI/CD pipeline.
The application should be built and tested on every commit to a main branch, and should be released to a staging environment.
Tests should run as part of the build process, and every release should have an appropriately tagged output artifact, 
ideally a docker image or a zip file.

6. Processes, 8. Concurrency: The application should be stateless, and should not store any state in the application itself.
Avoid storing any state in the application, and use a backing service instead. 
Ensure any databases used can work with connections to multiple instances of the application.
Use transactions to avoid any inconsistencies.

7. Port binding: The application should be able to run on any port, and should not be hardcoded to a specific port.
The port should be configurable using an environment variable. 

9. Disposability: The application should be able to be started and stopped easily, and should not require any manual intervention.
Containerizing the application is the best way to ensure this. To ensure we know when the application is ready to serve requests,
ensure there is some sort of regular health check (a `GET /health` that returns a 204 response if server is running).

10. Dev/prod parity: Avoid using different databases for development and production.
If possible, use backups from production to seed the development database. Ensure software and hardware parity between dev and prod.

11. Logs: Logs should be in a structured format. Avoid storing logs as files, and instead stream everything to STDOUT. 
This can be done by configuring Django's logging settings. 

12. Admin processes: Admin processes should be run as one-off processes, and should not be run as part of the application.
The best way to do this is to integrate it into the build pipeline, and run it in the same environment as the application runs in. 
In the case of Django, this can be done using Django's management commands for running migrations and other admin tasks.
