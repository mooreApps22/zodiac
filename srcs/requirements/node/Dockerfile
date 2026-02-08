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

RUN npm run build

RUN cp -r .next/static .next/standalone/.next/ \
	&& cp -r public .next/standalone/

CMD ["node", ".next/standalone/server.js"]
