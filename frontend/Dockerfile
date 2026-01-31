# Stage 1 — Build Next app
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2 — Serve static site with tiny nginx image
FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# docker build -t rdsa-frontend-service:latest .
# docker run -p 5173:80 rdsa-frontend-service:latest