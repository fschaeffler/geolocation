Package.describe({
	name: 'phund:geolocation',
	version: '1.0.2',
	summary: 'Provides geolocation on desktop and mobile. Have optional for reactive',
	git: 'https://github.com/phund/geolocation.git',
	documentation: 'README.md'
});

Cordova.depends({
	"cordova-plugin-geolocation": "2.4.3"
});

Package.onUse(function (api) {
	api.versionsFrom('1.2.1');
	api.use('reactive-var');
	api.use('tracker');
	api.use('underscore');
	api.use("isobuild:cordova@5.2.0");
	api.addFiles('geolocation.js', 'client');
	api.export("Geolocation", "client");
});
