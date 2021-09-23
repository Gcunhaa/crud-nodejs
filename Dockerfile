FROM node:16

WORKDIR /usr/src/app

COPY /app/package*.json ./

RUN npm install

ADD app .

CMD ["npm", "start"]