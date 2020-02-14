#!/bin/bash
echo ************************************************
echo Starting Replica Set
echo ************************************************

sleep 10 | echo Sleeping
mongo mongodb://mongo-rs0-1:27017 replicaSet.js
