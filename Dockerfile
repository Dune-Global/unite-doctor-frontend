FROM node:lts-alpine3.19
WORKDIR /app
COPY . ./
RUN yarn
COPY . .
EXPOSE 3002
CMD yarn dev