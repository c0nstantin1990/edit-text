import { precacheAndRoute } from "workbox-precaching/precacheAndRoute";
import { CacheFirst, StaleWhileRevalidate } from "workbox-strategies";
import { registerRoute } from "workbox-routing";
import { CacheableResponsePlugin } from "workbox-cacheable-response";
import { ExpirationPlugin } from "workbox-expiration";
import { warmStrategyCache } from "workbox-recipes";

// Precache assets defined in __WB_MANIFEST
precacheAndRoute(self.__WB_MANIFEST);

// Create a CacheFirst caching strategy for pages
const pageCache = new CacheFirst({
  cacheName: "page-cache",
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});

// Warm the cache with specific URLs using the pageCache strategy
warmStrategyCache({
  urls: ["/index.html", "/"],
  strategy: pageCache,
});

// Register a route for navigate requests using the pageCache strategy
registerRoute(({ request }) => request.mode === "navigate", pageCache);

// Set up assets cache using StaleWhileRevalidate strategy
registerRoute(
  // Define the callback function that will filter the requests we want to cache (e.g., JS and CSS files)
  ({ request }) => ["style", "script", "worker"].includes(request.destination),
  new StaleWhileRevalidate({
    // Cache storage name
    cacheName: "asset-cache",
    plugins: [
      // Cache responses with specified statuses to a maximum-age of 30 days
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);
