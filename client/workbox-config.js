module.exports = {
  "globDirectory": "src/",
  "globPatterns": [
    "**/*.{css,js,png,svg,jpeg,jpg}"
  ],
  "swDest": "build/sw.js",
  "swSrc": "src/sw.js",
  //"injectionPointRegexp": /(const precacheManifest = )\[\](;)/
};