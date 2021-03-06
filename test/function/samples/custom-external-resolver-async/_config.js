const assert = require('assert');
const path = require('path');

module.exports = {
	description: 'uses a custom external path resolver (asynchronous)',
	options: {
		plugins: [
			{
				resolveId(id, importer) {
					if (importer && id[0] !== '.')
						return Promise.resolve(path.join(__dirname, 'js_modules', id + '.js'));
				}
			}
		]
	},
	exports(exports) {
		assert.ok(exports.success);
	}
};
