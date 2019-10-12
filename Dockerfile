# build stage
FROM node:10
MAINTAINER Mikyung Jang <mjismy@gmail.com>
WORKDIR /app

RUN apt-get update

# copy package json and package-ock json
COPY package*.json ./

RUN npm install

# To bundle your app's source code inside the Docker image,
COPY . .
RUN npm run build
EXPOSE 8080

#  to run your app using CMD which defines your runtime. Here we will use node server.js to start your server
CMD [ "node", "server.js" ]