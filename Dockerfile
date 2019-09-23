# base image
FROM node:10-alpine as builder

RUN apk update

RUN apk add yarn

RUN rm -rf /var/cache/apk/*

RUN yarn config set registry https://registry.npm.taobao.org/

# set working directory
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json ./

RUN yarn

COPY . .

CMD ["npm","run","start"]

ENTRYPOINT [ "sh" ]