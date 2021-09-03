'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "d497f7408d725a59cb7d561188bd3fc9",
"favicon.ico": "5fef7d3443edc27e340ae2669d5dc51d",
"index.html": "42776ce2aecead89cea78894e7593c81",
"/": "42776ce2aecead89cea78894e7593c81",
"main.dart.js": "0b5d95b1aaf46973c2539ee495739bd4",
"manifest.json": "02ab603ad9e1c1a57d5e63093879b418",
".git/config": "eee31ac8d772a0c7bc559d28730826ec",
".git/objects/3e/4e17b4a49bfe4171988a029dda69007ea5fa25": "470f4b14a4ead1dd0ee0a506c9ffb455",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/3b/8622f67bffda70fc2d7f6ff2f2ad6f3078fd08": "731b64a59569a859ccc7057722b737a4",
".git/objects/6f/86e6500e221ee26af01f8b04275a2f929493bd": "b74d99bbc0ce435680a4a7b38a88c3d8",
".git/objects/32/2b9d08d8d1d6c4bb1bb9596e8c6108423ec67e": "19a8224df29ac548a719856e6c07b620",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3c/587f019c151f0c8b4d9ea7c1a92a90c228a613": "c48be36cff02941b9871271088f2e004",
".git/objects/93/eb6acffe5839c8669a695af22137e8017e727e": "f29b203493d74349b44db0b4391cb52f",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "be1bc3e11d0c0b656515e7f4197a90d5",
".git/objects/9d/1f906fd55a474bfb609ded6050bb6d3e8a8485": "d15052516cd3b0c3e0d98e6354d492c4",
".git/objects/b5/f1d2c67f796d6b64c98d56b9f0855af1049c95": "544d813c691bc626a41650422550ef35",
".git/objects/b3/ed4ca7fe0e4a24d0b629b05c196620a02a75e5": "e0d64f9451560cc2e9ac2bb50c1a5040",
".git/objects/a5/ea6c5389d3998139a80e00f01ff0c14de7e727": "afce4f8db228a8240ed339005e31be9a",
".git/objects/d1/bcc6bb683eb77b844fecc8c523cf21c5f13dcb": "4c93d7cdce062703b9a9f3087d8aa8f5",
".git/objects/ae/0247bf5226d74170fdddd10ec1c013a5656314": "c5f6c3b1e0232757c39b1b06e63b5747",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/cf/bd19a4d2869bace2260021bbe318b823a7785a": "afa40c3a917e5738728ae0b6d8468c5f",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/89/039b85baef572a38add26e5b899ccf3a706efe": "6a0ab275b7ce5da1bf400341aa38e8ad",
".git/objects/89/a82ba97a4c212392ae7cf85a1ec4c71c6e6093": "e0c67a25f97ddc3a0be755fe69390635",
".git/objects/1f/cf65351da5359928cc740d809a2c253c470ee2": "7fd127fa2dc80c6725386860f8aa4b01",
".git/objects/1a/284186b1e6370e293d0163a9db6c390bedb04f": "6ca433be60207a796672242b9f8e77ea",
".git/objects/17/4c7efe95be25f4b41afee4fe3adc04c12a2392": "c215deae99e67203aa940a4d56f6a5a8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/44/1d3baab4f3bfc1ce251942e420988fac12a8f4": "ac3a2ba50af07d40313ad29d8023a3b1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6e/26de76d46d7e4c28d19acb691cc8a4b41b4287": "9ce195e87d87f63da6937cdbbc944c14",
".git/objects/9a/b975662dc48dea040691f0cb43f5480395171e": "a45c48bb8971b74b8d1684c5f85c93e4",
".git/objects/36/537d2f4fb7a8c0dac685669a6ba3b4efcd9b5b": "a553e22db5dde61e3d8d8bf9a5f743a1",
".git/objects/36/a188f5be56520caa0466f434372f43e4d8b3ff": "5bc864ef3d3c87662be042bf7b352b67",
".git/objects/30/ec14c253deb6884bae5b7760bdf9fb02d62aa7": "fdae4ea8fa83e3c53d5bb3704d404710",
".git/objects/37/da5231e7500aaca8ca06b85a488192d3099e7a": "70992ae5813e9e79fbb4779d5e06401a",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "92a1272697ebd8e8828980bccd9688af",
".git/objects/6d/bff324a217965acabfba52694eab47f5eaa360": "27338b136ad697bbcc0202a127746cd6",
".git/objects/01/f289d4636fa3138f474fe2469d8bfd37705bbe": "77c6992eadb65cd10373df4697d11173",
".git/objects/99/c7701374c6799f6de7fb953988d35047edcc03": "1aef9591ce0601481854d2150ad306d3",
".git/objects/0f/8617d5736df28e6402db60d540e19186bcf8e0": "21a0d17c21587a2aa051b307c5dac61f",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/d4/49700c100efdb6c0cda0a2519177e8562c42bc": "39c05baaddf5837fb4a5b9fab1ce9436",
".git/objects/ba/88dc6306ea855bc57d1ed8ce9d4ad0fd6eaac9": "70942baf89c3d3443d97f450c8080a7e",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
".git/objects/a9/2a06f487f9ecc02c22d67b548b235e351af70e": "a9dc2e9bf8a0f86e379863cfc05d15e3",
".git/objects/af/d621b9128c095d155028a538c142cc686c2019": "eba3f12a8f4e46ec117f983e57336834",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/8db9d9d27290fc139af80ade8acfa162a76b1a": "f16fb60eb92664d5ebb0ebe20c037afc",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "e96f96a6941aeae74366875f450c7680",
".git/objects/e6/c3a4129b57957d607ca06e23342fe1e5af703f": "b620131aa690cb93a73d4adfaf58f62b",
".git/objects/e8/f74f979e342e416180415215bc4d7011d581f8": "447db5c617255251a7ce13d6587f6d93",
".git/objects/e9/a179cfdd153c813713f15c078ca8159af2acab": "897a4a5d744bee48d1087e4df3359a2f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/9882b9d776d5c7f213364f7e346e08ff09ea3b": "542729da1c2d057b4d5bc0a2f594f75f",
".git/objects/1e/3b712f63ae0b3a8aa3476c9a9644b6a408d348": "bf4c8c04bd27cb72a5c67699d94ef847",
".git/objects/24/4fdf40ef313e6bc913916e618ffa7eabd28af4": "1a71f88edce5205937910a35c0d470a7",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
".git/objects/2b/4570f3e47a6ca7c8011c40cc866baac3572587": "cd4f21ce7972f964f1628003af6392fc",
".git/objects/78/8e830d40d090f3855ea8781f41680c257df3f0": "a0aa8e6f844c1ba120ff1b7d0bdbf4da",
".git/objects/8e/fcf816d1970369a10698ad61d64efd06549d87": "0e3f1feb16a83255444cd17e0124a42c",
".git/objects/25/bd58afd30ab344af4c432894635384bf36880d": "bdefedd43d6bb18bb2d9c0ad16338673",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "63706a5f89cd7c5810961685d2c28916",
".git/logs/refs/heads/master": "63706a5f89cd7c5810961685d2c28916",
".git/logs/refs/remotes/origin/HEAD": "63706a5f89cd7c5810961685d2c28916",
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
".git/refs/heads/master": "5a819458e5b101f0abeac42e20242c9a",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/index": "61b96f499c5a59b17a03c505c5bdfc16",
".git/packed-refs": "06648d1309fc9c760a81392f131540cd",
"assets/AssetManifest.json": "9f9d6a283deb52d1f2fdf961c0a0b2b4",
"assets/NOTICES": "048a6f4bf3d0f2bd2866865613f5744f",
"assets/FontManifest.json": "e514cd989254ec4e89866947ded41367",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/menu_icon.png": "87375b451f15be8a243714374f678022",
"assets/assets/images/battery_medium.png": "923618be29882a1914601b9ffc093cb9",
"assets/assets/images/ds_logo.png": "dfd6211b4a6c98737223ca8e32c1e3c4",
"assets/assets/images/ds_logo_tr.png": "30e7eefb81684d3d5be8aea89330e16f",
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
