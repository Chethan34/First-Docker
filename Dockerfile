FROM node:19-alpine

COPY package.json ./
COPY . .

WORKDIR /server

RUN npm install 

CMD ["node", "server.js"]