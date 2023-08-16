var capacitorBGLocPermission = (function (exports, core) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
