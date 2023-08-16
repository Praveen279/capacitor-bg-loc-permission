import { WebPlugin } from '@capacitor/core';

import type { BGLocPermissionPlugin } from './definitions';

export class BGLocPermissionWeb
  extends WebPlugin
  implements BGLocPermissionPlugin
{
  async reqPerm(): Promise<void> {}
}
