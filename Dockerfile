FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ARG api_key
ENV PORT=5000
ENV API_KEY=${api_key}

EXPOSE 5000

CMD npm run dev
