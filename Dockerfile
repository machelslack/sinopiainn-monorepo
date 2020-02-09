FROM node:10

WORKDIR /app

COPY ./ /app

COPY ./package.json package.json

RUN npm i --ignore-scripts

RUN npm run build

WORKDIR /app/packages/server

EXPOSE 3000

CMD ["npm","run","dev"]
