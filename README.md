<p align="center">
  <img src="images/logo.png">
</p>
<h2 align="center">A Containerize full-stack template using <a href="https://github.com/vuejs/vue">Vue.js</a> and <a href="https://github.com/expressjs/express">express</a></h2>

<p align="center">
<img alt="GitHub" src="https://img.shields.io/github/license/chutipon29301/containerize-vue-express-template">
<img alt="GitHub language count" src="https://img.shields.io/github/languages/count/chutipon29301/containerize-vue-express-template">
<img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/chutipon29301/containerize-vue-express-template">
<img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/chutipon29301/containerize-vue-express-template">
</p>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [About the Project](#about-the-project)
- [Getting Started](#getting-started)
  - [Prerequisite](#prerequisite)
  - [Usage](#usage)
    - [Develop in container](#develop-in-container)
    - [Develop on local machine](#develop-on-local-machine)
    - [Build the image](#build-the-image)
    - [Deploy the image](#deploy-the-image)
- [License](#license)

## About the Project

## Getting Started

### Prerequisite

- [git](docs/installGit.md)
- [docker](docs/installDocker.md)
- [node](docs/installNode.md)

### Usage

- Clone this repository using git clone or download as zip

   ```bash
   > git clone https://github.com/chutipon29301/containerize-vue-express-template.git
   ```

#### Develop in container

- Change directory to your repository

  ```bash
  > cd /path/to/your/project
  ```

- Use docker-compose to start all services

    ```bash
    > docker-compose up
    ```

    > Frontend application will be served on port `8080` (<http://localhost:8080>)

    > Backend application will be served on port `3000`
    (<http://localhost:3000>)

#### Develop on local machine

- Change directory to your repository

  ```bash
  > cd /path/to/your/project
  ```

- At the root directory of the project, change directory to `backend` folder
  
  ```bash
  > cd backend
  ```

- At the `backend` folder, install dependencies by using `npm` or `yarn`
  > By using `yarn` package management you need to install it using following command `npm install -g yarn`
  
  ```bash
  > npm install
  # or
  > yarn
  ```

- Start backend server in development mode (auto restart)

  ```bash
  > npm run start:dev
  # or
  > yarn start:dev
  ```

  > Backend application will be served on port `3000`
    (<http://localhost:3000>)

- **On the new terminal**, go to frontend folder
  
  ```bash
  > cd /path/to/your/project/frontend
  ```

- At the `frontend` folder, install dependencies by using `npm` or `yarn`

  ```bash
  > npm install
  # or
  > yarn
  ```

- Start frontend server in development mode

  ```bash
  > npm run serve
  # or
  > yarn serve
  ```

  > Frontend application will be served on port `8080` (<http://localhost:8080>)

#### Build the image

```bash
> docker build -t {{docker-hub-username}}/{{image-name}}
```

#### Deploy the image

## License

Distributed under the MIT License. See [LICENSE.md](LICENSE.md) for more information.
