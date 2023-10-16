FROM node:16
WORKDIR /usr/src/app
RUN npm install -g @vue/cli && npm install -g @vue/cli-service-global && npm install -g @vue/cli-init
COPY package.json ./
RUN npm install --force
COPY . .
EXPOSE 8080
CMD ["npm", "run", "dev"]
