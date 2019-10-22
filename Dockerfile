FROM node:8

WORKDIR /

COPY ./packages/server app

COPY ./packages/server/package.json package.json

RUN npm i --ignore-scripts

RUN npm run build

RUN npm run dev
