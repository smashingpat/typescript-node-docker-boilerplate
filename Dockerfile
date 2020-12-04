FROM node:14 as base
WORKDIR /usr/app
COPY package.json package-lock.json* ./
RUN npm install && npm cache clean --force

COPY . .
RUN npm run build

FROM base as dev
CMD ["npm", "run", "dev"]

FROM base as prod
CMD ["node", "./dist/server.js"]
