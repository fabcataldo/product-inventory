FROM node:14.15.0-alpine

WORKDIR /usr/app
COPY package.json ./
RUN npm install -g @angular/cli@14
RUN npm install

COPY . ./

CMD ["npm", "start"]
