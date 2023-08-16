import { registerPlugin } from '@capacitor/core';
const BGLocPermission = registerPlugin('BGLocPermission', {
    web: () => import('./web').then(m => new m.BGLocPermissionWeb()),
});
export * from './definitions';
export { BGLocPermission };
//# sourceMappingURL=index.js.map