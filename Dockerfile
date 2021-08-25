FROM node:current-alpine3.13

WORKDIR /usr/app

COPY package*.json ./
COPY . .

RUN npm install
RUN npm install --save typescript @types/node @types/react @types/react-dom @types/jest
RUN npm rebuild node-sass

EXPOSE 3000

CMD ["npm", "start"]