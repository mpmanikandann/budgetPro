FROM node:18.10-alpine3.15

WORKDIR /app

COPY ./package.json .

RUN npm install 

COPY . .

CMD [ "npm" ,"dev" ]
