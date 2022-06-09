/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5f5b1f8d668ac13cd6699eb9a9bda3b4"
  },
  {
    "url": "assets/css/0.styles.014dd7a1.css",
    "revision": "fedc4ffeafcf174e49689a2b010615cf"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.9a580317.js",
    "revision": "588778058d10f7e6f1388fad1c2b1d06"
  },
  {
    "url": "assets/js/10.f2ca287c.js",
    "revision": "d125c13fe3e7a1ad4b91a4cd6d41dcbf"
  },
  {
    "url": "assets/js/11.51ff36a1.js",
    "revision": "7e6fbc4f4626785b8afcc96894898163"
  },
  {
    "url": "assets/js/12.65a9777a.js",
    "revision": "0fbacc91a2b0881323baefb6dc3b2894"
  },
  {
    "url": "assets/js/13.540671c9.js",
    "revision": "1d83e378ba25abd2df62bb4b09105973"
  },
  {
    "url": "assets/js/14.bb688160.js",
    "revision": "2e632a631977a8234e6d96539ee4735e"
  },
  {
    "url": "assets/js/15.322cee0f.js",
    "revision": "909bdc410ffe19ff4236fbcf35145265"
  },
  {
    "url": "assets/js/16.312abed2.js",
    "revision": "4bfae72aec6d6acfa0d739f08fb35c61"
  },
  {
    "url": "assets/js/17.2f9a91db.js",
    "revision": "752682432aa8710855c2b507462552f6"
  },
  {
    "url": "assets/js/18.5ec14502.js",
    "revision": "fc437d55863a2d32f8c262e277471917"
  },
  {
    "url": "assets/js/19.dc6ced6a.js",
    "revision": "cd62f26b731530b22da8429527d3b646"
  },
  {
    "url": "assets/js/20.75760845.js",
    "revision": "f6cb08f31054112ed3f8038f1f43dde9"
  },
  {
    "url": "assets/js/21.41588483.js",
    "revision": "186ec0e83a471083697d8c05ec5aac12"
  },
  {
    "url": "assets/js/4.9114c169.js",
    "revision": "491061ccbbf44a54faf4b0e5d9a1db9d"
  },
  {
    "url": "assets/js/5.40dda6ce.js",
    "revision": "aa0259ee48c1e9ca1fdb080370c27dd7"
  },
  {
    "url": "assets/js/6.961577e1.js",
    "revision": "9e465535e0e47906cb64168ec13fd1f9"
  },
  {
    "url": "assets/js/7.6ca2a339.js",
    "revision": "0582ebc055f87b26da35d841e01e9cb1"
  },
  {
    "url": "assets/js/8.5897098d.js",
    "revision": "bbbd21e25368acef582d40530508c24a"
  },
  {
    "url": "assets/js/9.de94ad00.js",
    "revision": "b10f6ce38d623ee8bd2266024e125028"
  },
  {
    "url": "assets/js/app.5e36e219.js",
    "revision": "826d196d36b19e83e4ec1e0a3bb9907b"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.7cc080b4.js",
    "revision": "18b4765322c1f53636eab4f8b269f0d0"
  },
  {
    "url": "avatar.png",
    "revision": "5fb61b3469db9619ceac2b9446a01f4c"
  },
  {
    "url": "categories/index.html",
    "revision": "03f9669ed1b824955a032b9ebefd94c5"
  },
  {
    "url": "categories/java/index.html",
    "revision": "c7d06af7c6017d3425560a1be26f7079"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "412a92494a96a6c21c6bccee03bca29a"
  },
  {
    "url": "categories/Webpack/index.html",
    "revision": "dd213a5b39b054e94b83be977f730f76"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "1222c07eda36b4615e56a382beb7f750"
  },
  {
    "url": "css/style.css",
    "revision": "258210718dc904a0f6c0657ec23c6406"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/banner.jpg",
    "revision": "f83c2538363d1b1353afe56b11b6abe1"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "148467b2a8fe86c22a7af03318920002"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "img/网页标签栏.jpg",
    "revision": "2dff2444a527eb1cf15e3764403d7992"
  },
  {
    "url": "index.html",
    "revision": "40b9de88f6020404920697ef9de19508"
  },
  {
    "url": "js/custom.js",
    "revision": "9d30dcad31abdd69ad17e161d5b5b5cd"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "450bf88ac03215ae8a8430d9f61f5917"
  },
  {
    "url": "leetcode/动态规划.html",
    "revision": "d20a7e46a247d325a882e8c9a13027f3"
  },
  {
    "url": "live2d/hijiki/assets/moc/hijiki.2048/texture_00.png",
    "revision": "817ca52e35fef3ef3a452127d1c88f43"
  },
  {
    "url": "tag/index.html",
    "revision": "6fbb44ae44157d0742630099f22ac9d2"
  },
  {
    "url": "tags/AMD/index.html",
    "revision": "c3d264ad30d34fd5a946288728085d0f"
  },
  {
    "url": "tags/CommonJS/index.html",
    "revision": "29fb010fee4b98d1a6cbb3e9e01b526d"
  },
  {
    "url": "tags/ES6/index.html",
    "revision": "94a23643b5e0473755dfd57c6142f0a0"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "252362fbff43b73c32257d4307c1a466"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "29b2aa3f5cc04ed04817c0cedc2d00b3"
  },
  {
    "url": "tags/leetcode/index.html",
    "revision": "0eeec6c0ce092862ccead5b2cbe03e63"
  },
  {
    "url": "tags/webpack/index.html",
    "revision": "68430bb0c811f5783251de54eb578039"
  },
  {
    "url": "tags/性能优化/index.html",
    "revision": "0199dd1790be65c6992631d4de08374e"
  },
  {
    "url": "tags/模块化/index.html",
    "revision": "6a52927274740e8c218082e7dae5b036"
  },
  {
    "url": "tags/算法/index.html",
    "revision": "65aa1494ddf581fa58bb8badf9611261"
  },
  {
    "url": "tags/部署/index.html",
    "revision": "2faa72e73ae2f9ce2b1a60ea5183b2a7"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "1f82ff34e1e5b889e016be08e89ad4fd"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "ad1962fcd9aa22135b8ee4665ff51321"
  },
  {
    "url": "timeline/index.html",
    "revision": "90b632604125faa8b363c999db596f70"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "Webpack/<深入浅出 webpack> 读书笔记 一.html",
    "revision": "a356340e66133a8ad7821480d07e1c60"
  },
  {
    "url": "Webpack/<深入浅出 webpack> 读书笔记 三.html",
    "revision": "edd617eb425db6ed3d7a021b7e96fc5e"
  },
  {
    "url": "Webpack/<深入浅出 webpack> 读书笔记 二.html",
    "revision": "3ed641c24344b30f194f549f18f49ac0"
  },
  {
    "url": "Webpack/webpack 动态加载原理解析.html",
    "revision": "0e75e4885cff2efd8710df83e1f6d06c"
  },
  {
    "url": "Webpack/webpack 模块热更新原理解析.html",
    "revision": "a116bca968e9dc9b3aad509cd4bbd008"
  },
  {
    "url": "Webpack/wepack 持久化缓存实践.html",
    "revision": "441076c80695c238e82ae9e809850631"
  },
  {
    "url": "技术文章/index.html",
    "revision": "378f361f2b1192b8ee2b98ab68195a1b"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "0230dff2b972bb25b40fc299d3ceda37"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
