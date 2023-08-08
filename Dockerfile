FROM node:16-alpine3.16 AS deps
RUN apk add --no-cache git openssh

RUN mkdir -p /app

WORKDIR /app

COPY package.json yarn.lock* ./

# Install dependencies in /app
RUN yarn install

COPY . /app

EXPOSE 3000

CMD ["yarn", "dev"]