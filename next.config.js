const withCSS = require('@zeit/next-css')
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");

const withBA = withBundleAnalyzer({
  analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../bundles/server.html'
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html'
    }
  },
  // serverless for Zeit Now deployment, regular server otherwise
  target: process.env.NEXT_SERVERLESS ? "serverless" : "server"
});

module.exports = withCSS(withBA);