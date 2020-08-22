FROM node:12-alpine

WORKDIR /main-photo-proxy
COPY package*.json ./
RUN npm install --production

EXPOSE 4000

COPY . .

CMD [ "npm", "start" ]