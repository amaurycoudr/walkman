# walkman

## Run Dev Server

- cd walkman
- python ./runserver.py
- scan QR code

## Install Project
- **prerequisite**

to install this project you must have docker install, 
to check if it is install on your computer :
```
docker version
```
if it is not, check out on [Docker](https://docs.docker.com/get-docker/) how to install it.
- **back**
```bash
git clone git@github.com:amaurycoudr/walkman.git

cd back/
# --build only necessary the first time or if you edit 
# the docker config
docker-compose up --build

```
## GitHub workflow
1. Create a branch for your feature/task :
From master run : git checkout -b $branch-name

2. Commit changes on your branch
git commit "message"

3. Push on your branch
git push origin $branch-name

4. Create a pull request and manage merge issues on gitHub

5. Merge to master