FROM keymetrics/pm2
# FROM node:carbon

# RUN apt-get update
# RUN apt-get install gcc
# RUN apt-get install g++

COPY . .

CMD [ "pm2-runtime", "start", "pm2.json" ]
