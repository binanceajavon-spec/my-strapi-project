FROM node:18

WORKDIR /opt/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

ENV NODE_ENV production
ENV PORT 10000
ENV HOST 0.0.0.0

EXPOSE 10000

CMD ["npm", "run", "start"]