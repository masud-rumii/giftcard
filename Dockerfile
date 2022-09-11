FROM node:14.18.1-alpine as build

WORKDIR /app

COPY package.json ./

RUN npm install
COPY . .
RUN npm run-script build


FROM nginx

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/build ./build