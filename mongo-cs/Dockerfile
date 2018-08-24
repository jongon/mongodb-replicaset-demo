FROM mongo:3.2-jessie as FINAL
ARG replSet_name=default
ENV REPLSET_NAME $replSet_name
# COPY ./*.js /docker-entrypoint-initdb.d
# CMD [ "--configsvr", "--replSet", "${REPLSET_NAME}"]
ENTRYPOINT mongod