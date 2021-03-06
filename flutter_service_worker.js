'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "d497f7408d725a59cb7d561188bd3fc9",
"favicon.ico": "5fef7d3443edc27e340ae2669d5dc51d",
"index.html": "211d74a1678dfa89181dff7920c5f9f5",
"/": "211d74a1678dfa89181dff7920c5f9f5",
"main.dart.js": "b1df582144835305f988ff75d652041b",
"manifest.json": "02ab603ad9e1c1a57d5e63093879b418",
".git/config": "eee31ac8d772a0c7bc559d28730826ec",
".git/objects/03/da267fa1ddd56c7fa5b0a6c0ef75c7045707bb": "3da0afe08873521c8c2cfd288b7fec5d",
".git/objects/56/2a398055bd89f83c12258484bd98bceb7128a7": "fe88f67d061777b0f99172579960c4f8",
".git/objects/51/7a10815403c014b1009dae80f159c6c93ab24a": "3cc3f1d7be95556ccd63039d8e4978ed",
".git/objects/9c/c0673fd4b4d41955111426dd2d98fff13e8988": "66776e1fb4d1a0b8cc77b42b510108e3",
".git/objects/ac/4700a9594b6bfa3bd332df1bdf8efbfd456e51": "e279670302682099cfaf00b6b110cff8",
".git/objects/da/e38bf59115a6e4b8d9b95509d0041a56b34518": "76cc7793a02496dac0b56c6e0bca3c0c",
".git/objects/ca/1b37f238628d14ca461a5fa68a44f7d7d7c2ea": "1491cd96d6491e0364c58d8b729dc3de",
".git/objects/ed/dd2b6a0c9429187c16df90d7d5073486b4dc73": "175ff80077e61103287f0a33eb8474a7",
".git/objects/c6/c04bd168739b7ad19ecb1860a44c1831806fd7": "6820e51ba28bd93d5c79e174501baf63",
".git/objects/pack/pack-e59068b731f7a353523259e42e6719f8bb84de87.pack": "d155bd4211a48bde450ad70e79631085",
".git/objects/pack/pack-e59068b731f7a353523259e42e6719f8bb84de87.idx": "d88cc13452bdf6ed51dda5390a99c4ad",
".git/objects/7c/6922e62b6768d2bd1b82db3a5ebc381f8e0490": "4487915e11a91ac888e546eabd0e6376",
".git/objects/45/9cc905e643841241e4f9ddbd88f26f151aed1e": "773d98eec284c41a78633c0b5b87c23b",
".git/objects/73/3abd01495e75a9873c5cbb05286231fe2c5286": "7f492959073748275124d560279bdd2d",
".git/objects/19/26b8e00c4d220d039070c0165b1bfd1c8632a9": "33286ec0456532dee5ff0424d3b2ce10",
".git/objects/54/13f31648148c6fc318db1a7f391fa3e166e7f7": "48f2c1d60889a03ba290f8564285565c",
".git/objects/3f/85e519c4cf0ec9631b1616a2b402af62cfbe4f": "f88d63812db9d3e76e7f307e625a0df4",
".git/objects/08/7d9b48f7021ed21088344e9dad4f0adad67a53": "1b08dc7335c5317cf25b85a24a94f0c3",
".git/objects/06/49870f1dad4915e146a8787fede46ed0e32ed5": "f02aa40261f344e39f019a4a80e3a36f",
".git/objects/39/82a981a35c78400d1bf2c5a9b69fa1c26c1190": "beea1e474a066ab91ad548e817eae71b",
".git/objects/64/4f606cd07316f2bb13c8722531d7ffea16aa59": "5611d27f2a2fbb7804c2926ad254b68e",
".git/objects/dd/09359b56dee401307cc0ed2f41639bfb0ba869": "170c0a06b5a7d89cd9ed431b11922499",
".git/objects/d5/fd457352df8783def3e7fceba44b030ba16909": "8eb69afe9ff32d2c77fe348f347e5e34",
".git/objects/af/a9d88be0303d979dc8ed0b95c76d5bd8c9fdac": "15ef44cfd42faee17f581532b7e895f6",
".git/objects/e6/ce8da90e0055cba10a3aee11eb361e56b44041": "ce620a13f9855a4e4f077f3ad06932e0",
".git/objects/1e/74799156d92b613cce8201c912c5acc97fa723": "b17484f79d2ae1a18078443deda1aebb",
".git/objects/84/2df68abb2c33601d1e6e7b04c1998888cbc645": "896642e8e64fe1d1ef2149180c205cb7",
".git/objects/15/fcee2bd91aaf6e33334576e55e6f7a3687a8a7": "ca45a3e87aa24ef70cb4f012c683ba69",
".git/objects/82/96089bbcdf3e7956224289a7a5d691e134d44d": "7754516250e57cda84455c46e0b290e0",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9bd029acb74444aea965433e76951880",
".git/logs/refs/heads/master": "9bd029acb74444aea965433e76951880",
".git/logs/refs/remotes/origin/HEAD": "984165f27ba1b9796a20e76ec4bf173e",
".git/logs/refs/remotes/origin/master": "aac1ba5e4c2804e7c5f64c28f543e4be",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/refs/heads/master": "5dcf1e2befcb348fe2963431ec7f6445",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "5dcf1e2befcb348fe2963431ec7f6445",
".git/index": "d14ea0450e01637fc12519b299766af2",
".git/packed-refs": "0a358b08977261f747ebb00fe47c4244",
".git/COMMIT_EDITMSG": "d3971bc28c9ac7f4c8e077fd6c446ee9",
"assets/AssetManifest.json": "00e8d8ec697a659d5eef8eb213e80583",
"assets/NOTICES": "639443c7ff4d9a0ad8c71ad60b0bd39c",
"assets/FontManifest.json": "a4f545d12abc3befa336db5902755cfd",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/menu_icon.png": "87375b451f15be8a243714374f678022",
"assets/assets/images/battery_medium.png": "923618be29882a1914601b9ffc093cb9",
"assets/assets/images/ds_logo.png": "dfd6211b4a6c98737223ca8e32c1e3c4",
"assets/assets/images/ds_logo_tr.png": "254baf1823220a0b2d2c77230b40bc3e",
"assets/assets/images/background.png": "530d596888843e7accf989f72b127942",
"assets/assets/images/pentagon.png": "4d56f188810818719e0ba20bf15a85b8",
"assets/assets/images/battery_low.png": "5e35260c95427e474351361d1c7559c2",
"assets/assets/images/battery_high.png": "128fa43e9a0a6b3278742f8d3fb1eb77",
"assets/assets/images/battery_full.png": "b8056fb585534c9408b4e79135bb1d6f",
"assets/assets/images/error.png": "815111fb503a105d2ebabda7fa14f8bb",
"assets/assets/images/battery_empty.png": "cdc013b3ad4dfee79f170935e9677753",
"assets/assets/images/account_icon.png": "caab483acc9db7aa918b603f9588e2ed",
"assets/assets/images/battery_charging.png": "e6c0f2bb39ad481f8424799868abec69",
"assets/assets/images/pentagon_1.png": "09773ea8759f09e3f271aa96bfe83179",
"assets/assets/images/marker.png": "a30f29ac20ba098f4d4be111da61bc05",
"assets/assets/fonts/Poppins-Regular.ttf": "41e8dead03fb979ecc23b8dfb0fef627",
"assets/assets/fonts/Poppins-Bold.ttf": "c23534acbeddbaadfd0ab2d2bbfdfc84",
"assets/assets/fonts/Poppins-SemiBold.ttf": "342ba3d8ac29ac8c38d7cef8efbf2dc9"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
