FROM node:18.10-alpine3.15

WORKDIR /app

COPY ./package.json .

RUN yarn install && \
    yarn cache clean

COPY . .

CMD [ "yarn" ,"start" ]