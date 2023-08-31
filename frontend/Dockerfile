### STAGE 1: Build ###
FROM node:latest AS build

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

RUN ng serve --host 0.0.0.0 --port 4200

#RUN pwd

#RUN ls -laR

### STAGE 2: Run ###
#FROM nginx:latest

#### copy nginx conf
#COPY ./nginx.conf /etc/nginx/nginx.conf

#### copy artifact build from the 'build environment'
#COPY --from=build ./src/app/dist/portfolio-frontend/ /usr/share/nginx/html

#RUN ls -laR

#EXPOSE 3000 80

#ENTRYPOINT ["nginx", "-g", "daemon off;"]