'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "ee5e9c5944b2d65a8fa62b864ffdec37",
"assets/FontManifest.json": "71a4a82de411f155107da3f8dac64ebd",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "4371182da3ce29ac5f6df23a787ca182",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/en.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_update_dialog/assets/update_bg_app_top.png": "55c14a0a8dc55c20f5eb49443c248348",
"assets/packages/flutter_update_dialog/assets/update_ic_close.png": "cef2924be0e145da7ab1eba16043decc",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/resources/images/app_icons/android_icon.png": "9baf6ce48012acb3cf40e2f62947cc08",
"assets/resources/images/app_icons/ios_icon.png": "cbd5fa0c3dc8504e8186b99a17469a5b",
"assets/resources/images/back_icon.png": "5b9f2e6dfda4423492283b71d7d931b0",
"assets/resources/images/bill.png": "f28dfd979fd3d0d9d5abc30282f25281",
"assets/resources/images/chevron-right.png": "52b25482382c726216ad5af1da15c97d",
"assets/resources/images/icon.png": "1f6687b31ffb28913c7797d7a9b0ee30",
"assets/resources/images/ic_arrow_back-black.png": "1c7f4c0ce104374036a200f54eb7f841",
"assets/resources/images/ic_arrow_down.png": "f8aa18140ab88758029f2faee9a8de42",
"assets/resources/images/ic_arrow_up.png": "a965f3eef111c0c81e71fa6e57fa887b",
"assets/resources/images/ic_card.png": "18c4fa007fb5c581c9f06c67e24b4a8f",
"assets/resources/images/ic_contract.png": "e6a03a564dabbcf7c374f559c9f55055",
"assets/resources/images/ic_copy.png": "f38a816c6f503d3aaf7c65adbd1c1823",
"assets/resources/images/ic_danger_triangle.png": "5a8ea2e81dfcf98b1947aee9b98a0070",
"assets/resources/images/ic_delete.png": "269c54722ff1657d375fb1a4cd465ec4",
"assets/resources/images/ic_dollar.png": "a00af5d07fa89cc39bafbd601d8e53a2",
"assets/resources/images/ic_exchange.png": "c8371a7264f198cea20ca4c702d8c7b8",
"assets/resources/images/ic_idea.png": "cebdad2dde761c95ff58688b2ec89714",
"assets/resources/images/ic_increase.png": "c47ec8aa05e17c29773c553350c88209",
"assets/resources/images/ic_lock.png": "2c9473c964522f9e1900f285e4d393e7",
"assets/resources/images/ic_mailbox.png": "d0c711eecd77fe4c2b98b718787afcca",
"assets/resources/images/ic_menu.png": "308edbaa2bc4eb619580238121a2df0f",
"assets/resources/images/ic_option.png": "26450fc87a3b7a9f14e1729c2f82e799",
"assets/resources/images/ic_search.png": "9917d2620a9ff4d5727ad56713600694",
"assets/resources/images/ic_service.png": "50f8a9a8727aef220b1ef265a90d1ebe",
"assets/resources/images/ic_star.png": "8b9e8aa40696914d5fee4e62715450af",
"assets/resources/images/ic_star_fill.png": "7462508442273e51de31c34af56c5c1b",
"assets/resources/images/ic_swap-fill.png": "06e0904d34f0d30a9a84cf7967a43131",
"assets/resources/images/ic_verified.png": "ec23c846204363cbc5627cac74a9010f",
"assets/resources/images/language.png": "7c7ab34a35c727ddd02fba06cb89ff77",
"assets/resources/images/login_bg.png": "a78c79ae6ae6ab6548baa3e997db2f96",
"assets/resources/images/markets-banner-example.png": "a6fa88bf4fe724fae53473a7945b1987",
"assets/resources/images/markets-user-icon.png": "c7dc84242cb1897ec30ab64f36b90105",
"assets/resources/images/markets_coin_example.png": "d2a054cd9e4cf564107d815d8bde9f77",
"assets/resources/images/markets_deposit.png": "a00af5d07fa89cc39bafbd601d8e53a2",
"assets/resources/images/markets_mine.png": "8a02a93941c8bf49ba0228856563d9c1",
"assets/resources/images/markets_subscription.png": "a2385143d215698e78f518f4c422f4a0",
"assets/resources/images/markets_volume.png": "639b5bebb826a579903882f9aed9c74c",
"assets/resources/images/markets_withdraw.png": "a8290c900d32d5c3520950139acb305d",
"assets/resources/images/message_notification.png": "6069e5a5f174fbab508569becec670ef",
"assets/resources/images/mine_details_card1_bg.png": "c2ec56eb693506ddf4c733d35b82e297",
"assets/resources/images/no_data.png": "c8bf11275c35dfa9bfa81c3bbcb04d21",
"assets/resources/images/security_ceter.png": "6e0e266533a8eb3de8bd877d71913d8c",
"assets/resources/images/subscription_header_bg.png": "d1f195ce9258d0901350ca8d69bf3663",
"assets/resources/images/tab/assets.png": "c210940a26ad2ca62af00e49d282c09c",
"assets/resources/images/tab/assets_active.png": "ffa58f2ecbfa09600c0593b7e0cb5778",
"assets/resources/images/tab/contract.png": "447d62de9548ad1ec1ca96638d8da2b9",
"assets/resources/images/tab/contract_active.png": "91dd4dc8b85ea9a063bcbc75257595e9",
"assets/resources/images/tab/markets.png": "5d679abd35fc7dee9ba205e3f4e7f21d",
"assets/resources/images/tab/markets_active.png": "a3187166da1ee1123321331d679c5f1b",
"assets/resources/images/tab/mine.png": "714914e8bb7970ac2ed9342b883d941a",
"assets/resources/images/tab/mine_active.png": "6988a5482d090c091d47e2c814153500",
"assets/resources/images/tab/option.png": "0cc66c6402607651a17688205a5011fc",
"assets/resources/images/tab/option_active.png": "feff18ea5b459d995ff4209fd7fad53c",
"assets/resources/images/tab/subscription.png": "a1d5de41b91b6038529c9e684bab0e55",
"assets/resources/images/tab/subscription_active.png": "e104e9ffbb0a04754f4d7afdd6b7e8c4",
"assets/resources/images/tab/trade.png": "b2b954ad4e7ddf72ad1c953365cfb8a9",
"assets/resources/images/tab/trade_active.png": "be36cc8be4b9f3829913bd3a6a6e0c42",
"assets/resources/images/uncertification_bg.png": "f2ec8c67fe306bf098e83159f075d418",
"assets/resources/images/verified.png": "4e838edeb0511295edfb9d8efa1aa234",
"assets/resources/images/verified_face.png": "5774484f734eebbf14212947dafd1e89",
"assets/resources/images/verified_front.png": "9bb5ab5619d7254789a771d95cad6698",
"assets/resources/images/wave.png": "f8d760914908c7aeca096f00be54b8b8",
"assets/resources/images/withdraw_address.png": "aca5a0299f9bcb508339b1e73b8eab32",
"assets/resources/langs/ar-AE.json": "e88b07208dd35023e8afdbb48def940d",
"assets/resources/langs/de-DE.json": "83636835d32392b6a7aa9d5f353f3b1d",
"assets/resources/langs/en-US.json": "90d81d430822ba7b7eebd65b0e47f692",
"assets/resources/langs/es-ES.json": "4f25045b5aca53b179e1134ac7ae6845",
"assets/resources/langs/fr-FR.json": "6b4f887616d9916c2ee86b90928059e8",
"assets/resources/langs/pt-PT.json": "15d2bc496d8dd74284bab80a8a94e536",
"assets/resources/langs/ru-RU.json": "8232b86bde544977ecb5e6ee8048700f",
"assets/resources/langs/tr-TR.json": "c002b4deb8f0c49d35837b64f9973549",
"assets/resources/langs/zh-TW.json": "7eb886e37788d1080cd037d9a8d6b8a2",
"favicon.ico": "f7cce78717b1625724c11b2bcafb1406",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "53b3b60fa1bb92ce0e4d38997ca0d223",
"/": "53b3b60fa1bb92ce0e4d38997ca0d223",
"main.dart.js": "7967923d26463d9d4023a544f22c0e27",
"manifest.json": "343bed41338a3fddef35e958b85a8a78",
"version.json": "f9b4f87fbaddad81d0240292f6539c90"
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
