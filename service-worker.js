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
    "revision": "06d96d0dadbe9cb20b1e6146ab6fb56e"
  },
  {
    "url": "assets/css/0.styles.bfd62ff8.css",
    "revision": "ae2091e16a740727342387df46a4b4d6"
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
    "url": "assets/js/1.216637f7.js",
    "revision": "5af1e12534ef26ca82ca06fe184e37d1"
  },
  {
    "url": "assets/js/10.33f76f26.js",
    "revision": "220f65ea638281da19c0b0a7cdd4a305"
  },
  {
    "url": "assets/js/11.25089477.js",
    "revision": "4ef4bceb3f3fbc91dbae4f1f03563e71"
  },
  {
    "url": "assets/js/12.8daec512.js",
    "revision": "abef476360cee8a93e81ce167e48015d"
  },
  {
    "url": "assets/js/13.9422b4fc.js",
    "revision": "db1d989744ef17f4d6e062658e9f4508"
  },
  {
    "url": "assets/js/14.795a1ecc.js",
    "revision": "fadbf5bb18a68e25d3e4ad57655eb146"
  },
  {
    "url": "assets/js/15.6ff5bfa8.js",
    "revision": "63a1157a67f9588bcc18ea4d3ac865b9"
  },
  {
    "url": "assets/js/16.3b6077a1.js",
    "revision": "08161dced0f887df8d982fd98e479afd"
  },
  {
    "url": "assets/js/17.51d35a3e.js",
    "revision": "55481fc8883194f5debcff1a4647ed4a"
  },
  {
    "url": "assets/js/18.5ff6dd3c.js",
    "revision": "d9d762fde02169c74913a34a60a43f68"
  },
  {
    "url": "assets/js/4.809a876b.js",
    "revision": "d53d78f2915b550d3c9724e1c5de4845"
  },
  {
    "url": "assets/js/5.25ea83a1.js",
    "revision": "18b6c674cfe625f24aeaef8b3afe227b"
  },
  {
    "url": "assets/js/6.db789102.js",
    "revision": "bee0a979c6054fa7fbf12430a9a2d267"
  },
  {
    "url": "assets/js/7.e6635361.js",
    "revision": "70a7b2deffbe74dbbb2bdbd4ff3bf4d0"
  },
  {
    "url": "assets/js/8.c32581b2.js",
    "revision": "75bbb0b04f31e38bddf06c1e7f804ec4"
  },
  {
    "url": "assets/js/9.34fc3aa4.js",
    "revision": "aa9b16c5468cdd3b24805703bc036afc"
  },
  {
    "url": "assets/js/app.4b7b3a52.js",
    "revision": "2ce75e5df808fc554c8b7f5df8786bd1"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.c6937b0c.js",
    "revision": "81ef84d370addbda5a2e08aa6861f5f8"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "57c8030b4ff45b18d3e925d0afa95890"
  },
  {
    "url": "categories/java/index.html",
    "revision": "be079eafc1fb23e27672053c475e638d"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "6aa23cedb8d8134edd5bc2115b9af2b5"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "86ed1874779a8181cfd7d6321c2ef52c"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "d924221ce33eefa3d8bdac5c03a60af6"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "a87f1da5f7b0fb7d768c113c2f0f2610"
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
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
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
    "url": "index.html",
    "revision": "408b8d38383951373322ea7bc0ab9888"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "8c7068d331937b8c25059742eb80e851"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "5d53944a68350310bbee906f33308535"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "52a8e0e00a1ace60807ce9305c027075"
  },
  {
    "url": "tags/js/index.html",
    "revision": "73bafd7729a61a7ae74d2ca1ae93afcd"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "8b67ab8cfbd08960dceb691df065462d"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "ed772d69e9e325badb192953636f00fc"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "802b8660d2f1a271e4dce398d6162d38"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "00bb87e924dbaa7f2a5c185398824d39"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "d9dbeb9131914b02ace022d92afe9c1a"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "b79b00d056fb8049e2192f72075e54c3"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "d44efb3e2268075245475ebcb86fe958"
  },
  {
    "url": "timeline/index.html",
    "revision": "ca1c9c9b4315681fa0b30c59eadf6022"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "5f38057919dc3666311eec9c7fd36cd0"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "cebcab579f3c481a6aa20cdbd2a1ac2c"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "76931191087e60ae7313abcd9d6985cc"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "e19555f4f683bfb37e9ddf0f4b4d03cc"
  },
  {
    "url": "生活分享/life.html",
    "revision": "bd09082f8b40d861e5ccc8bdf2e52d28"
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
