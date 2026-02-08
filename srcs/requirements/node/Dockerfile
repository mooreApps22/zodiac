FROM alpine:3.22

RUN apk add --no-cache nodejs npm tini

RUN addgroup -S nodeapp && adduser -S -G nodeapp nodeapp

WORKDIR /app

COPY app/package*.json ./

RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

COPY app/ ./

RUN chown -R nodeapp:nodeapp /app

USER nodeapp

EXPOSE 3000

ENTRYPOINT ["/sbin/tini", "--"]
CMD ["node", "server.js"]
