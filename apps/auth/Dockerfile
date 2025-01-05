FROM node:18 AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g pnpm

RUN pnpm install

COPY . .

RUN npm run build

FROM node:18 AS production

WORKDIR /usr/src/app

COPY --from=development /usr/src/app/dist ./dist

COPY package*.json ./

RUN npm install --production

CMD ["node", "dist/apps/auth/main.js"]