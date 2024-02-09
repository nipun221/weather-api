FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ARG api-key
ENV PORT=5000
ENV API_KEY=${api-key}

EXPOSE 5000

CMD npm run dev
