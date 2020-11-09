# Codeprentice-Site
The new Codeprentice website (currently in development).

## Docker Image Deployment (no Github clone needed)
Install and run the image:
```bash
docker pull devinleamy/codeprentice-web
docker run -p 4200:4200 devinleamy/codeprentice-web
```

## Project Setup
Pretty straight forward just run ```npm install```
<br/>
Make sure you check out the CONTRIBUTING.md file 

## Various Commands  
Run compile and start server: 
```bash
npm start
```
Run nodemon (after building): 
```bash
nodemon server.js
```
Build: 
```bash
npm run-script build
```

## Local Deployment (from GitHub clone)
Prerequisites: must have docker and docker-compose installedv
<br/>
Deployment with Docker:
```bash
docker network create codeprentice-network
```
```bash
docker-compose up -d [--build]
```
App can be accessed @ http://localhost:4200
<br/>
To stop running locally:
```bash
docker-compose down
```

