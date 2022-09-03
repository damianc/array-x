import { val } from '@utils';

export default function localizeMax(mapper = null) {
    const $ = val(mapper);

    const idx = this.x.findMaxIndex(mapper);

    if (idx === -1) return null;
    return [idx, this[idx]];
}