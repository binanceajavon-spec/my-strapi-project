FROM node:20-slim

WORKDIR /opt/app

COPY package.json package-lock.json ./

RUN npm ci --omit=dev

COPY . .

ENV NODE_ENV production
ENV PORT 10000
ENV HOST 0.0.0.0

EXPOSE 10000

CMD ["npm", "run", "start"]