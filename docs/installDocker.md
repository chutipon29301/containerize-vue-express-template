# Install docker on your local machine

## Mac OS X

1. Create docker hub account from [Sign up page](https://hub.docker.com/signup/)
2. Download [Docker Desktop for Mac](https://hub.docker.com/?overlay=onboarding)
3. Double click the download file to attach installer, then copy `Docker.app` file into `Applications` folder
4. Click `Docker.app` in `Applications` folder to start docker service
5. Test your installation
   - Verify the version of installed docker. The output should be similar to the following

     ```bash
     > docker --version
     Docker version 19.03.5, build 633a0ea
     ```

   - Start `hello-world` container

      ```bash
      > docker run hello-world
     Hello from Docker!
     This message shows that your installation appears to be working correctly.
      ```

For more information please visit [Install Docker Desktop on Mac](https://docs.docker.com/docker-for-mac/install/)

## Windows

1. Create docker hub account from [Sign up page](https://hub.docker.com/signup/)
2. Download [Docker Desktop for Windows](https://hub.docker.com/?overlay=onboarding)
3. Double click `Docker Desktop Installer.exe` and follow installation wizard
4. Press start button and search for `Docker Desktop`, click it to start docker service
5. Test your installation
   - Verify the version of installed docker. The output should be similar to the following

     ```bash
     > docker --version
     Docker version 19.03.5, build 633a0ea
     ```

   - Start `hello-world` container

      ```bash
      > docker run hello-world
     Hello from Docker!
     This message shows that your installation appears to be working correctly.

For more information please visit [Install Docker Desktop on Windows](https://docs.docker.com/docker-for-windows/install/)
