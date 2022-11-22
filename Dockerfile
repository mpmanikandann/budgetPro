FROM node:19.1-alpine3.15

WORKDIR /app

COPY ./package.json .

RUN npm install 

COPY . .

CMD [ "npm" ,"dev" ]
