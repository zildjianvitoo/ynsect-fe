if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let r={};const c=e=>a(e,t),o={module:{uri:t},exports:r,require:c};s[t]=Promise.all(n.map((e=>o[e]||c(e)))).then((e=>(i(...e),r)))}}define(["./workbox-c06b064f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/0e762574-93048512ed070c99.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/1126-d3919768f52accf3.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/136-e8d59160b18512f9.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/1749-4d283b8afe8dc301.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/1844-128f4303096cbb89.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/2387-a0b5821b26b56cde.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/2987-6779780297b61ed3.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/2f6dbc85-fce227c5c7354793.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/3156-474d4696d334ac69.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/3380-b73a1f8e84be437e.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/3844-18761705c623c901.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/479ba886-6c1c8f86dc54e91f.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/4902-fd9d1b8c518ea3a9.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/5203-3c33d498913dbfb0.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/5250-729cf3e4a7c7d14f.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/53c13509-7cb5198964ac1e63.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/5468-66b1c0d891387281.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/5948-9ea51c858271cd98.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/6288-1e3f615ed073c074.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/66ec4792-7748341065393cff.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/703-a68af3fb3a23d4b2.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/7234-60f52a244641dc14.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/795d4814-505166735b3c5f04.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/8378-21344177c6e65659.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/8645-b4f45803bc999b72.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/8682-bfa22a0a2c5350b1.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/8929-972640af5e78362b.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/8e1d74a4-08fe04eb955b909c.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/9033-f25d5b23bfe110b0.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/94730671-aa3e06a4268ddf68.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/9c4e2130-8f3e938d9c3c0f09.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/app/(auth)/(routes)/login/page-68ef956bbff3d874.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/app/(auth)/(routes)/register/page-cca10306c2b1ebf5.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/app/(dashboard)/(routes)/agenda/page-9b1e89c017806880.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/app/(dashboard)/(routes)/ask-the-pro/%5BproId%5D/page-1f5a13bff6948d05.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/app/(dashboard)/(routes)/ask-the-pro/page-efff730095fc51a6.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/app/(dashboard)/(routes)/dashboard/page-da98f680decfd43c.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/app/(dashboard)/(routes)/pengaturan/page-2cac585bc6586348.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/app/(dashboard)/(routes)/waste-database/page-781c058d81471332.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/app/(dashboard)/layout-9e251a4afd88bf6a.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/app/(root)/(routes)/about/page-5d450ab2ba29ff49.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/app/(root)/(routes)/cart/page-b377fee5cea22427.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/app/(root)/(routes)/forum/%5BforumId%5D/page-08f07ab44a9f5052.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/app/(root)/(routes)/forum/page-62edf842ac2db532.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/app/(root)/(routes)/forum/saved/%5BuserId%5D/page-60d10cc4f78dd5a2.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/app/(root)/(routes)/forum/user/%5BuserId%5D/page-242d66b5e748ada2.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/app/(root)/(routes)/page-c14708fb4db7013b.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/app/(root)/(routes)/products/%5BproductId%5D/page-a7266686912b699d.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/app/(root)/(routes)/products/page-6ee1a3aec584d427.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/app/(root)/(routes)/services/%5BserviceName%5D/page-efb324eb7e9b38cd.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/app/(root)/(routes)/services/page-001cf1ff3d337d56.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/app/(root)/layout-70b0254d0d7e1913.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/app/_not-found-9b3879d8bc146759.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/app/layout-bf29086b4b7bf1a4.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/e34aaff9-d76edf4f7813ed06.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/eeac573e-7534c43e3fe0ecdf.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/eec3d76d-9cf175df2d090c87.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/f25cdb8d-11b6a0146d4c1d18.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/f8025e75-595a65d04781c239.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/f97e080b-a23a6f752e1ba86b.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/fc2f6fa8-2fefe827b7f33cb4.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/fd9d1056-bf7028132388eed9.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/framework-20adfd98f723306f.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/main-13daf0069020d8f1.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/main-app-6fc1fbac8852cf42.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/pages/_app-794d85baa83ca682.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/pages/_error-5fb63848e0136a02.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-7412785180a39b11.js",revision:"rqgzy27SBsD5JyJT_ZLtn"},{url:"/_next/static/css/078a3e803d009620.css",revision:"078a3e803d009620"},{url:"/_next/static/css/397234a531230092.css",revision:"397234a531230092"},{url:"/_next/static/media/034043092db1e233-s.woff2",revision:"985e9b4713be3b0c3210a2f4a316492d"},{url:"/_next/static/media/2b3f1035ed87a788-s.p.woff2",revision:"03e877e75c5a1213e13a56b59471c946"},{url:"/_next/static/media/65053818c3abcf97-s.woff2",revision:"9b02c436a26a8afe2e94314fdaa6d6bd"},{url:"/_next/static/media/eed6db14ac3b93a0-s.woff2",revision:"bf5e9d3da99a28e7391571987186e6ea"},{url:"/_next/static/rqgzy27SBsD5JyJT_ZLtn/_buildManifest.js",revision:"e57a59d253dabd0e0d31ccdad4b9a2b4"},{url:"/_next/static/rqgzy27SBsD5JyJT_ZLtn/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/font.ts",revision:"d80d2277b54db66c6b1bb8954f54280d"},{url:"/images/Service/bayi-larva.png",revision:"e0f6ede7efba7f9c99ab90dac23c3ed6"},{url:"/images/Service/induka-dewasa-bsf.png",revision:"211ffa8b99d87ab4573248d5401e41b2"},{url:"/images/Service/larva-dewasa.png",revision:"0ccd8304bbe7bf15adf7399a053212f2"},{url:"/images/Service/prepupa.png",revision:"e693dc537787bf15c382ba3af0e08612"},{url:"/images/Service/pupa.png",revision:"fb4a879d9bf067c06fd85d02e9dfbca4"},{url:"/images/Service/telur-bsf.webp",revision:"2a8347afbc0c8caf0a9af1edc44e6c71"},{url:"/images/about-1.jpeg",revision:"d184c9792fa16f5b2551416b5fad89e6"},{url:"/images/about-2.jpeg",revision:"72a5cb585fe4a852d1d35a7ed7dc467e"},{url:"/images/about-3.jpeg",revision:"0f02939d2b65cab5f47f5433a788e9a7"},{url:"/images/about-4.jpeg",revision:"47e7baffcf1ef892f7a8942fece5e96e"},{url:"/images/about-5.jpeg",revision:"273c31c5cf037bbdc23961b3c4ccce04"},{url:"/images/about-6.jpeg",revision:"29235811a991456cfecab19e1299c87a"},{url:"/images/about-page.jpg",revision:"bd85b3afee57d7f2d51f4da605516fd5"},{url:"/images/biobox.jpg",revision:"f9c21949be3149ec07bd1fbd61bdd673"},{url:"/images/cta.jpg",revision:"ede589cfd33ecf49b06e7b18b41a8e07"},{url:"/images/gallery-1.jpg",revision:"d184c9792fa16f5b2551416b5fad89e6"},{url:"/images/gallery-2.jpg",revision:"72a5cb585fe4a852d1d35a7ed7dc467e"},{url:"/images/gallery-3.jpg",revision:"0f02939d2b65cab5f47f5433a788e9a7"},{url:"/images/insects-login.png",revision:"5ef1f6d217db6f18e639185e6ee4265a"},{url:"/images/kemandirian-pangan.jpeg",revision:"bc4a15eb588357db9d54adcca18040fc"},{url:"/images/kemudahan-pangan.jpeg",revision:"2c6aaa6bb3959039747bf3095abe7014"},{url:"/images/landing-hero.jpg",revision:"a7878afd166b1f248b56342b3368fbde"},{url:"/images/larva-bsfkering.webp",revision:"0320d09242a8ff31f720f3a24df6509c"},{url:"/images/logo-dark.png",revision:"e86234186f4def16f5b755c1de73800a"},{url:"/images/logo-white.png",revision:"6c4d2d93298d4c4436028eecb461a84e"},{url:"/images/logo-ynsect-footer.svg",revision:"bcf7f89cf13714ac90cd42118c8f02a9"},{url:"/images/logo.png",revision:"d3225d1fd8bd6be337448d9ad8ebb0d0"},{url:"/images/maps.png",revision:"61ca367d88cbbfffccf8283c5430d8b5"},{url:"/images/pro-1.jpg",revision:"ed06145ac42f1e63a55c52f628dd2f46"},{url:"/images/pro-2.jpg",revision:"ceaaea50f640642f2d78a3d7f0fa89f5"},{url:"/images/pro-3.jpg",revision:"86baf1f92a1bc9caea8cfe87aab478d3"},{url:"/images/pro-4.jpeg",revision:"6ef448ebcc7899c4eca78ac368c97ce8"},{url:"/images/pro-5.jpeg",revision:"5b1038e0fb1f89a961f7288c82bbb4d1"},{url:"/images/pro-6.jpeg",revision:"64e5c2592dfa56540811eaf151d18f63"},{url:"/images/setor-sampah.jpg",revision:"827b8ec8670ddbbf5d44ec8d2a3d1d17"},{url:"/images/testi-1.jpg",revision:"432556eb6bd8d4be3baa886b07d7739a"},{url:"/images/testi-2.jpg",revision:"f8e46fc88de0d56d53416401d267e327"},{url:"/images/user-1.jpg",revision:"9e4c81db403cc930ea15e1f2c80181da"},{url:"/images/user-2.jpg",revision:"e0b58ddecb256ea354967e801cf150ca"},{url:"/images/waste-management.jpg",revision:"3f157f649c49e82c2930b7258fa31e1f"},{url:"/manifest.json",revision:"39495e7252bd616bf107cd0df17ba1e7"},{url:"/swe-worker-5c72df51bb1f6ee0.js",revision:"5a47d90db13bb1309b25bdf7b363570e"},{url:"/ynsect-192.png",revision:"6d9b0e391e0ff39c813e06c0e1905b65"},{url:"/ynsect-256.png",revision:"a8ccf34f8af243024b28c4932819e7a1"},{url:"/ynsect-512.png",revision:"fb79b954a560adf38966b61713100074"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
