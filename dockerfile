FROM node:alpine as build
WORKDIR /client
COPY package.json .
RUN npm cache clean --force && npm i
COPY . .
RUN ls -la
RUN npm list
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
