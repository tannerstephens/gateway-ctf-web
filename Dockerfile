FROM keymetrics/pm2:8-stretch

ENV NPM_CONFIG_LOGLEVEL warn

COPY . .

RUN npm install

CMD [ "pm2-runtime", "start", "pm2.json" ]
