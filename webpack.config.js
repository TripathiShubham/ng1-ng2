const webpack = require('webpack');
const path = require('path');

let config = {
    entry: {
        index: "./src/index.js"
    },
    output: {
        filename: "./main.js"
    },
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "src")
        ],
        extenstions: [".js"]
    },
    resolve: {
        extensions: ['.js'],
        alias: {
          "@angular/upgrade/static": "@angular/upgrade/bundles/upgrade-static.umd.js"
        }
      }
}

module.exports = config;