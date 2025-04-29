FROM node:14.15.0-alpine

WORKDIR /usr/app
COPY package.json ./
RUN npm install -g @angular/cli@14
RUN npm install
RUN npm install typescript@4.6.4 --save-dev --force

COPY . ./

CMD ["npm", "start"]
