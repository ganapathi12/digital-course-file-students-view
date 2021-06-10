FROM node:15 as build
WORKDIR /app
COPY package.json .
RUN npm install 
COPY . .
EXPOSE 3000

FROM nginx
EXPOSE 80
ENV SKIP_PREFLIGHT_CHECK=true
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html

