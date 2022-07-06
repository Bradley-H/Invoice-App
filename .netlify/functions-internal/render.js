const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["data.json","favicon.png","noInvoice.svg"]),
	mimeTypes: {".json":"application/json",".png":"image/png",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"start-fb99d4e8.js","imports":["start-fb99d4e8.js","chunks/index-073ef55e.js","chunks/index-6dd8a33c.js"],"stylesheets":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "[invoice]",
				pattern: /^\/([^/]+?)\/?$/,
				names: ["invoice"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,3],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
