FROM node:13.5
LABEL author="Iann Santos <iannsantos8@gmail.com> | www.iann.dev"

WORKDIR '/app'

EXPOSE 3333

COPY ./entrypoint /usr/local/bin

RUN chmod +x /usr/local/bin/entrypoint

ENTRYPOINT [ "entrypoint" ]
