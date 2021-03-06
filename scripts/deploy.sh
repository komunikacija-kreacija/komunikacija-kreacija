#!/bin/bash

#cd /var/www/--directory of your middleman site--

PATH=/home/maja/komunikacija-kreacija/node_modules/.bin:$PATH

date >> /home/maja/komunikacija-kreacija/scripts/latest.log
echo "ScriptStart" >> /home/maja/komunikacija-kreacija/scripts/latest.log

cd /home/maja/komunikacija-kreacija

git fetch >> /home/maja/komunikacija-kreacija/scripts/latest.log
HEADHASH=$(git rev-parse HEAD)
UPSTREAMHASH=$(git rev-parse master@{upstream})

if [ "$HEADHASH" != "$UPSTREAMHASH" ]
then
  git reset origin/master --hard
  echo '****STARTING DEPLOY****' >> /home/maja/komunikacija-kreacija/scripts/latest.log
  echo `date '+%Y-%m-%d %H:%M:%S'` >> /home/maja/komunikacija-kreacija/scripts/latest.log
  git pull 2>&1
 # /usr/local/bin/middleman build 2>&1
  cd /home/maja/komunikacija-kreacija
  echo 'Current dir' >> /home/maja/komunikacija-kreacija/scripts/latest.log
  pwd >> /home/maja/komunikacija-kreacija/scripts/latest.log
  rm -rf .cache
  gatsby build
  echo '****ENDING DEPLOY****' >> /home/maja/komunikacija-kreacija/scripts/latest.log
  exit 0
fi

date >> /home/maja/komunikacija-kreacija/scripts/latest.log
echo "ScriptEnd" >> /home/maja/komunikacija-kreacija/scripts/latest.log
