import { WebPlugin } from '@capacitor/core';
import type { BGLocPermissionPlugin } from './definitions';
export declare class BGLocPermissionWeb extends WebPlugin implements BGLocPermissionPlugin {
    reqPerm(): Promise<void>;
}
