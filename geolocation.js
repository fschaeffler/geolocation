// is location refreshing currently on?
var watchingPosition = false;

// current watchId
var watchId = null;

// current location variable and dependency
var location = new ReactiveVar(null);

// error variable and dependency
var error = new ReactiveVar(null);

// options for watchPosition
var options = {
	enableHighAccuracy: true,
	maximumAge: 0,
	timeout: 10000
};

var onError = function (newError) {
	error.set(newError);
};

var onPosition = function (newLocation) {
	location.set(newLocation);
	error.set(null);
};

var startWatchingPosition = function () {
	if (! watchingPosition && navigator.geolocation) {
		watchId = navigator.geolocation.watchPosition(onPosition, onError, options);
		watchingPosition = true;
	}
};

var stopWatchingPosition = function () {
	if (watchId && navigator.geolocation) {
		navigator.geolocation.clearWatch(watchId);
	}
	watchingPosition = false;
}

var getCurrentPosition = function () {
	if (! watchingPosition && navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(onPosition, onError, options);
	}
}

// exports

/**
 * @summary The namespace for all geolocation functions.
 * @namespace
 */
Geolocation = {
	setOptions: function (opts) {
		if (opts) {
			options.enableHighAccuracy =  opts.enableHighAccuracy || true,
			options.maximumAge =  opts.maximumAge || 0,
			options.timeout =  opts.timeout || 10000
		}
		return options;
	},
	/**
	 * @summary Get the current geolocation error
	 * @return {PositionError} The
	 * [position error](https://developer.mozilla.org/en-US/docs/Web/API/PositionError)
	 * that is currently preventing position updates.
	 */
	error: function () {
		startWatchingPosition();
		return error.get();
	},

	/**
	 * @summary Get the current location
	 * @return {Position | null} The
	 * [position](https://developer.mozilla.org/en-US/docs/Web/API/Position)
	 * that is reported by the device, or null if no position is available.
	 */
	currentLocation: function (isWatching) {
		if (isWatching) {
			startWatchingPosition();
		} else {
			stopWatchingPosition();
			getCurrentPosition();
		}
		return location.get();
	},
	// simple version of location; just lat and lng

	/**
	 * @summary Get the current latitude and longitude
	 * @return {Object | null} An object with `lat` and `lng` properties,
	 * or null if no position is available.
	 */
	latLng: function (isWatching) {
		var loc = Geolocation.currentLocation(isWatching);

		if (loc) {
			return {
				lat: loc.coords.latitude,
				lng: loc.coords.longitude
			};
		}

		return null;
	},

	loc: function () {
		return location.get();
	},

	stopWatching: function() {
		stopWatchingPosition();
		return null;
	},

	startWatching: function() {
		startWatchingPosition();
		return null;
	}
};
