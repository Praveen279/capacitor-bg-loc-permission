'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const BGLocPermission = core.registerPlugin('BGLocPermission', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.BGLocPermissionWeb()),
});

class BGLocPermissionWeb extends core.WebPlugin {
    async reqPerm() { }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    BGLocPermissionWeb: BGLocPermissionWeb
});

exports.BGLocPermission = BGLocPermission;
//# sourceMappingURL=plugin.cjs.js.map
