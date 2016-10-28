Package.describe({
  name: 'phund:geolocation',
  version: '1.0.1',
  // Brief, one-line summary of the package.
  summary: 'Provides geolocation on desktop and mobile. Have optional for reactive',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/phund/geolocation.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Cordova.depends({
  "cordova-plugin-geolocation": "2.4.0"
});

Package.onUse(function(api) {
  api.use(["reactive-var"]);
  api.versionsFrom("METEOR@1.2");
  api.use("isobuild:cordova@5.2.0");
  api.add_files(["geolocation.js"], "client");
  api.export("Geolocation", "client");
});
