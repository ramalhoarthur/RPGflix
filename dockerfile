FROM node:24-alpine

RUN apk add git bash --no-cache

WORKDIR /app

COPY project-rpgflix/package.json project-rpgflix/yarn.lock ./

RUN yarn install

COPY project-rpgflix/ ./

EXPOSE 5173

CMD ["yarn", "dev", "--host"]