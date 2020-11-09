FROM node:12

WORKDIR /

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "run-script", "build" ]

EXPOSE 4200
CMD [ "npm", "start" ]