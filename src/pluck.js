import { objectPath } from '@utils';

export default function pluck(path = '') {
  return this.map(item => objectPath(item, path));
}