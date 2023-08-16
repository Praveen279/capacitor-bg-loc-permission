import { registerPlugin } from '@capacitor/core';

import type { BGLocPermissionPlugin } from './definitions';

const BGLocPermission = registerPlugin<BGLocPermissionPlugin>(
  'BGLocPermission',
  {
    web: () => import('./web').then(m => new m.BGLocPermissionWeb()),
  },
);

export * from './definitions';
export { BGLocPermission };
