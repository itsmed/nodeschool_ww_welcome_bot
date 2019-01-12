FROM node:10.15-alpine

WORKDIR /dist

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
