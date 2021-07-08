# Codeprentice-Site

The new Codeprentice website (currently in development).

## Docker Image Deployment (no Github clone needed)

Install and run the image:

```bash
docker pull devinleamy/codeprentice-web
docker run -p 4200:4200 devinleamy/codeprentice-web
```

## Project Setup

Pretty straight forward just run `npm install`
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

Build & Set ENV variables

```npm run-script build
DB=YOUR_MONGODB_CONN_STRING ACCESS_TOKEN=ADD_BACKEND_TOKEN npm start
```
