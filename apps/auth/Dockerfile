FROM node:alpine as development

WORKDIR /usr/src/app

# Étape 1 : Copier les fichiers nécessaires
COPY package.json .
COPY pnpm-lock.yaml .

# Étape 2 : Installer PNPM et les dépendances
RUN npm install -g pnpm
RUN pnpm install

# Étape 3 : Copier le code source
COPY . .

# Étape 4 : Build de l'application
RUN pnpm build

# Vérifier que les fichiers sont générés
RUN ls -R /usr/src/app/dist

# Étape 5 : Étape de production
FROM node:alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

# Copier les fichiers nécessaires
COPY package.json .
COPY pnpm-lock.yaml .

# Installer les dépendances de production
RUN npm install -g pnpm
RUN pnpm install --prod

# Copier les fichiers générés depuis l'étape de développement
COPY --from=development /usr/src/app/dist ./dist

# Vérifier la structure de dist dans l'image de production
RUN ls -R /usr/src/app/dist

# Commande de démarrage
CMD ["node", "dist/apps/auth/main"]
