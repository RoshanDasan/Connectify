FROM node:18.12.1

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

EXPOSE 5173

CMD ["yarn", "dev"]