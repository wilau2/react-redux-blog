#!/bin/sh
pwd=`pwd`
osascript -e "tell application \"Terminal\" to do script \"mongod\""
osascript -e "tell application \"Terminal\" to do script \"cd $pwd/ClientBlog;npm start\""
osascript -e "tell application \"Terminal\" to do script \"cd $pwd/ServerBlog;npm run dev\""