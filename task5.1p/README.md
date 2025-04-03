# SimpleServer - Dockerized Node.js Application
## Getting Started

This guide will walk you through setting up and running the **SimpleServer** application using Docker.

## Prerequisites
Before proceeding, ensure that:
- **Node.js** is installed on your system. You can check by running:
  ```sh
  node -v
  ```
- **Docker Desktop** is installed and running.
- **Git** is installed to clone the repository.

## Setup and Run

### 1. Clone the Repository
```sh
git clone https://github.com/sakthiarajapandian27/sit737-2025-prac2p.git
cd sit737-2025-prac2p
```

### 2. Build and Run the Application with Docker
```sh
docker compose up -d --build
```
This command:
- Builds the Docker image.
- Runs the container in detached mode (`-d`).

### 3. Check the Running Container Logs
```sh
docker logs simpleserverz
```
This verifies that the server is running and listening on the correct port.

### 4. Check the Health Status of the Container
```sh
docker inspect --format='{{json .State.Health}}' simpleserverz
```
If successful, you should see output like:
```json
{"Status":"healthy", "FailingStreak":0, "Log":[...]}
```

## Health Check Implementation
The application includes a **health check endpoint** to monitor its status:
- In `server.js`, a health check route is added:
  ```js
  app.get('/health', (req, res) => {
      res.status(200).send('OK');
  });
  ```
- The `Dockerfile` contains a **HEALTHCHECK** instruction:
  ```Dockerfile
  HEALTHCHECK --interval=30s --timeout=10s --retries=3 --start-period=10s \
      CMD curl -f http://localhost:80/health || exit 1
  ```

## Stopping and Cleaning Up
To stop the container, run:
```sh
docker compose down
```
This will stop and remove all running containers.

## Conclusion
You have successfully built, run, and monitored a Dockerized Node.js application. 🎉 Happy coding! 🚀

