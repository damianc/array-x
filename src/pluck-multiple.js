import { objectPath } from '@utils';

export default function pluckMultiple(...paths) {
  return this.map(item => {
    return paths.map(p => objectPath(item, p));
  });
}