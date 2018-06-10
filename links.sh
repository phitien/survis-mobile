curdir=$(pwd)
ln -s index.js index.ios.js
ln -s index.js index.android.js
cd node_modules/react-native-swiper/src/ && rm -rf index.js
ln -s $curdir/node_override/react-native-swiper/src/index.js index.js
cd $curdir
