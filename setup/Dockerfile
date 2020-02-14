FROM mongo:3.2-jessie

# Create app directory
WORKDIR /usr/src/configs

# Install app dependencies
COPY replicaSet.js .
COPY setup.sh .

CMD ["./setup.sh"]
