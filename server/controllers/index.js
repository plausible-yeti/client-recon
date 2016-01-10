'use strict';

/**
 * A map of all controllers. Requiring `controllers` will connect you to all controllers in the directory.
 * @type {Object}
 */
module.exports = {
	dashboard: require('./dashboard-controller'),
	user: require('./user-controller'),
	client: require('./client-controller'),
	feed:require('./feed-controller')
}
