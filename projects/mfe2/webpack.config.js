const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    uniqueName: "mfe2"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mfe2",
      filename: "remoteEntry.js",
      exposes: {
        './Component': './projects/mfe2/src/app/app.component.ts',
        './Module': './projects/mfe2/src/app/events/events.module.ts'
      },
      shared: {
        "@angular/core": { singleton: true, strictVersion: true },
        "@angular/common": { singleton: true, strictVersion: true },
        "@angular/router": { singleton: true, strictVersion: true },
        "@c1/gravity-icons": { singleton: true, strictVersion: true },
        "@c1/gravity-wc": { singleton: true, strictVersion: true }
      }
    }),
  ],
};
