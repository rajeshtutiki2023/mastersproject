FROM node:18.16.1
WORKDIR /usr/src/app
COPY package*.json ./
COPY . ./
RUN npm install
CMD npm run dev
EXPOSE 3000