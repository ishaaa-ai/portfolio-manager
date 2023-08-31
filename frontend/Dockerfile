### STAGE 1: Build ###
FROM node:lts-alpine AS build

#### make the 'app' folder the current working directory
WORKDIR ./src/app

#RUN pwd && ls

#### copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

#### install angular cli
RUN npm install -g @angular/cli

#### install project dependencies
RUN npm install

RUN echo "hello"

#### copy things
COPY . .

#### generate build --prod
RUN npm run build

#RUN pwd

#RUN ls -laR

### STAGE 2: Run ###
FROM nginxinc/nginx-unprivileged

#### copy nginx conf
#COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

#### copy artifact build from the 'build environment'
COPY --from=build ./src/app/dist/portfolio-frontend/ /usr/share/nginx/html

#RUN ls -laR

EXPOSE 3000 80