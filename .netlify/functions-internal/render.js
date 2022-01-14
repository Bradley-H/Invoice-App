const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["data.json","favicon.png","noInvoice.svg"]),
	_: {
		mime: {".json":"application/json",".png":"image/png",".svg":"image/svg+xml"},
		entry: {"file":"start-db276779.js","js":["start-db276779.js","chunks/vendor-73704a0a.js"],"css":["assets/start-61d1577b.css"]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js'))
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/([^/]+?)\/?$/,
				params: (m) => ({ invoice: m[1]}),
				path: null,
				a: [0,3],
				b: [1]
			}
		]
	}
});
