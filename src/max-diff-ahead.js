import { maxDiffer } from '@utils';

export default function maxDiffAhead(cb = null) {
  return maxDiffer.globalAhead(this, cb);
}