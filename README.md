# Meteor Geolocation Package

Add it to your [Meteor](http://meteor.com) app with `meteor add mdg:geolocation`.

## API Documentation

There are currently no options to set. Some methods are reactive using [Tracker](http://docs.meteor.com/#tracker), and will automatically update with new location data from the device if pass isWatching parameters is true.

### Geolocation.setOptions()

Set options for Geolocation before is used (includes: enableHighAccuracy, maximumAge, timeout)

### Geolocation.error()

Returns the [position error](https://developer.mozilla.org/en-US/docs/Web/API/PositionError) that is currently preventing position updates.

### Geolocation.error()

Returns the [position error](https://developer.mozilla.org/en-US/docs/Web/API/PositionError) that is currently preventing position updates.

### Geolocation.currentLocation(isWatching)

Returns the [position](https://developer.mozilla.org/en-US/docs/Web/API/Position) that is reported by the device, or null if no position is available.

### Geolocation.latLng(isWatching)

A simple shorthand for currentLocation() when all you need is the latitude and longitude. Returns an object that has `lat` and `lng` keys

### Geolocation.loc()

Returns the [position] that is reactive in meteor.

### Geolocation.startWatching()

Automatically update with new location data from the device if not yet watched

### Geolocation.stopWatching()

Stop update with new location data from the device