# Installs the current application on a Node Image.
FROM node:10.15
# The qq is for silent output in the console
# You are welcome to modify this part as it
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev vim
# Sets the path where the app is going to be installed
ENV NODE_ROOT /usr/src/app/
# Creates the directory and all the parents (if they don't exist)
RUN mkdir -p $NODE_ROOT
# Sets the /usr/app as the active directory
WORKDIR $NODE_ROOT

# Copies all the content
# COPY package.json /usr/src/app/

# RUN npm install

#COPY . /usr/src/app/
# Install all the packages
RUN npm install -g @angular/cli

# RUN npm rebuild node-sass --force
#RUN npm rebuild node-sass --force

# The default port from ng serve (4200)
# and 49153 for Webpack Hot Module Reload.
EXPOSE 4200 49153 