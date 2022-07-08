const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["data.json","favicon.png","noInvoice.svg"]),
	mimeTypes: {".json":"application/json",".png":"image/png",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"start-cfa96ccd.js","imports":["start-cfa96ccd.js","chunks/index-c31d24eb.js","chunks/index-c0292bc6.js"],"stylesheets":[]},
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
