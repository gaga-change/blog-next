FROM node:10.13-alpine
#ENV NODE_ENV production
ARG QINIU_ACCESS_KEY=
ARG QINIU_SECRET_KEY=
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install
COPY . .
RUN npm run build
RUN node ./cdn.js
EXPOSE 3000
CMD npm run server