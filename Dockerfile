FROM keymetrics/pm2:latest

# Bundle app files
#COPY pm2.json .
#COPY package.json .
#COPY 02-no-comment 02-no-comment/
#COPY 03-dysfunctional 03-dysfunctional/
#COPY 04-get-my-dl 04-get-my-dl/
#COPY 05-i-love-eating-cookies 05-i-love-eating-cookies/
COPY . .

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install
# RUN npm install express body-parser cookie-parser

# Show current folder structure in logs
RUN ls -al #-R

CMD [ "pm2-docker", "start", "pm2.json" ]
