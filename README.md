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

- Clone this repository using git clone

   ```bash
   > git clone https://github.com/chutipon29301/containerize-vue-express-template.git
   ```

#### Develop in container

- Use docker-compose to start all services

    ```bash
    > docker-compose up
    ```

    Frontend application will be served on port `8080`

    Backend application will be served on port `3000`

#### Develop on local machine

- 

#### Build the image

```bash
> docker build -t <<docker-hub-username>>/<<image-name>>
```

#### Deploy the image

## License

Distributed under the MIT License. See [LICENSE.md](LICENSE.md) for more information.
