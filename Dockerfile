# node:16.4.2
# MAINTAINER datlt31@viettel.com.vn
# WORKDIR /usr/app
# COPY package*.json ./
# COPY . .
# RUN npm install
# RUN npm run build

# ## this is stage two , where the app actually runs

# FROM node:16.4.2

# WORKDIR /usr/app
# # RUN npm i -g pm2

# COPY package*.json ./
# RUN npm install --only=production
# COPY --from=0 /usr/app/public ./public
# EXPOSE 9000

# CMD npm run serve
FROM node:16 AS builder

WORKDIR /app

COPY . .

RUN yarn install && yarn build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/public .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
