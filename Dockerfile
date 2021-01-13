# build environment
FROM node:14-alpine as builder
WORKDIR /app

COPY ./presentation-app/package.json ./
COPY ./presentation-app/package-lock.json ./

RUN npm ci --silent

COPY ./presentation-app/ ./
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html