FROM node:10.13-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
# COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# RUN npm install --production --silent && mv node_modules ../
COPY . .
RUN npm i
RUN npm run build
EXPOSE 3000
CMD npm run server