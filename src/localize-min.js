import { val } from '@utils';

export default function localizeMin(mapper = null) {
    const $ = val(mapper);

    const idx = this.x.findMinIndex(mapper);

    if (idx === -1) return null;
    return [idx, this[idx]];
}