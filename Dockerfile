
FROM node:16.4.2
MAINTAINER datlt31@viettel.com.vn
WORKDIR /usr/app
COPY package*.json ./
COPY . .
RUN npm install
RUN npm run build

## this is stage two , where the app actually runs

FROM node:16.4.2

WORKDIR /usr/app
# RUN npm i -g pm2

COPY package*.json ./
RUN npm install --only=production
COPY --from=0 /usr/app/public ./public
EXPOSE 9000

CMD npm run serve
