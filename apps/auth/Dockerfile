# Étape 1 : Build
FROM node:18 as development

WORKDIR /usr/src/app

# Copier les fichiers nécessaires
COPY package.json pnpm-lock.yaml ./
COPY tsconfig.json nest-cli.json ./
COPY apps/auth ./apps/auth
COPY libs ./libs

# Installer pnpm et les dépendances
RUN npm install -g pnpm
RUN pnpm install

# Build de l'application
RUN pnpm build auth

# Étape 2 : Production
FROM node:18 as production

WORKDIR /usr/src/app

# Copier les dépendances de production
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install --prod

# Copier les fichiers générés
COPY --from=development /usr/src/app/dist ./dist

# Lancer l'application
CMD ["node", "dist/apps/auth/main"]
