FROM node:18.5.0-alpine3.15
WORKDIR /app

# install gcc
RUN apk add --update build-base

ENV JWT_SECRET = "bjhfewf74926966jheufuf"
ENV MONGO_URL = "mongodb+srv://dazedtree372gamer:LCH69mcV6MEd70Rs@cluster0.ekhzfby.mongodb.net/?retryWrites=true&w=majority"

# install python3
RUN apk add --update python3

COPY package*.json ./
RUN npm install 
COPY . .

EXPOSE 8000

CMD ["npx", "nodemon", "index"];