# Etap 1: Budowanie aplikacji
FROM node:14-alpine AS build

LABEL maintainer="Grzegorz Poleszak"

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Etap 2: Tworzenie ostatecznego obrazu
FROM node:14-alpine
LABEL maintainer="Grzegorz Poleszak"

WORKDIR /app
COPY --from=build /app /app

# Informacje o uruchomieniu serwera
RUN echo "Grzegorz Poleszak Serwer Dzień Dobry :)" > /app/author.txt

# Healthcheck
HEALTHCHECK CMD curl --fail http://localhost:8080 || exit 1

# Uruchomienie serwera
CMD ["node", "index.js"]
