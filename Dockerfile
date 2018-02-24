FROM keymetrics/pm2:latest
# FROM node:carbon

COPY . .

RUN npm install

# RUN npm start

# RUN node ./02-no-comment/app.js && \
#     node ./03-dysfunctional/app.js && \
#     node ./04-get-my-dl/app.js && \
#     node ./05-i-love-eating-cookies/app.js && \
#     node ./06-jwt-quotes/app.js && \
#     node ./07-sql-vaccine/app.js


# RUN pm2 start pm2.json

CMD [ "pm2-runtime", "start", "pm2.json" ]

# CMD ["echo", "", "t"]