FROM node:19.2-alpine3.15

WORKDIR /app

COPY ./package.json .

RUN npm install 

COPY . .

CMD [ "npm" ,"dev" ]
