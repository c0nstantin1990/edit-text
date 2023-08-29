const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const { InjectManifest } = require("workbox-webpack-plugin");

module.exports = {
  // Set the development mode
  mode: "development",

  // Define entry points for different parts of the application
  entry: {
    main: "./src/js/index.js",
    install: "./src/js/install.js",
    database: "./src/js/database.js",
    editor: "./src/js/editor.js",
    header: "./src/js/header.js",
  },

  // Specify output configuration
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  // Configure plugins for webpack
  plugins: [
    // Generate HTML file and inject bundles
    new HtmlWebpackPlugin({
      template: "./index.html",
      title: "JATE",
    }),

    // Inject custom service worker
    new InjectManifest({
      swSrc: "./src-sw.js",
      swDest: "src-sw.js",
    }),

    // Generate manifest.json for PWA
    new WebpackPwaManifest({
      fingerprints: false,
      inject: true,
      name: "Just Another Text Editor",
      short_name: "JATE",
      description: "Just another text editor",
      background_color: "#225ca3",
      theme_color: "#225ca3",
      start_url: "/",
      publicPath: "./",
      icons: [
        {
          src: path.resolve("src/images/logo.png"),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join("assets", "icons"),
        },
      ],
    }),
  ],

  // Configure module rules for different file types
  module: {
    rules: [
      // Handle CSS files
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

      // Transpile JS files using Babel
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              "@babel/plugin-proposal-object-rest-spread",
              "@babel/transform-runtime",
            ],
          },
        },
      },
    ],
  },
};
