# build stage
FROM node:10
MAINTAINER Mikyung Jang <mjismy@gmail.com>
WORKDIR /temp-project

# copy package json and package-lock json
COPY package*.json ./
RUN npm install

USER node

# To bundle your app's source code inside the Docker image,
COPY --chown=node:node . .
EXPOSE 8080

#  to run your app using CMD which defines your runtime. Here we will use node server.js to start your server
CMD [ "node", "server.js" ]