curdir=$(pwd)
cd node_modules/react-native-swiper/src/ && rm -rf index.js && ln -s $curdir/node_override/react-native-swiper/src/index.js index.js
cd $curdir
