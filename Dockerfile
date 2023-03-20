FROM node:10
WORKDIR /app
RUN mkdir -m 777 Models
COPY package.json .
RUN npm install
COPY . .
CMD node server.js
#echo test
