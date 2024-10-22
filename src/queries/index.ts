import { mergeQueryKeys } from '@lukemorales/query-key-factory';

import { tmapKeys } from './tmap';

export const queryKeys = mergeQueryKeys(tmapKeys);
