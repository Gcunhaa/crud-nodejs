FROM node:16

WORKDIR /usr/src/app

COPY /app/package*.json ./

RUN npm install

COPY ./app .

CMD ["node", "start"]