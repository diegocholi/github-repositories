FROM node:current-alpine3.13

WORKDIR /usr/app

COPY package*.json ./

RUN npm install
RUN npm install --save typescript @types/node @types/react @types/react-dom @types/jest

COPY . .

EXPOSE 3000

CMD ["npm", "start"]