FROM node:10.13-alpine
#ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# RUN npm --registry https://registry.npm.taobao.org install
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["run.sh"]