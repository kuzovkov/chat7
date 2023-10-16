FROM node:16 as node
WORKDIR /usr/src/env
RUN npm install -g @vue/cli && npm install -g @vue/cli-service-global && npm install -g @vue/cli-init
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx:1.15-alpine
WORKDIR /web
COPY --from=node /usr/src/env/dist /web
COPY ./config/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
