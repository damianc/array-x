import min from '@array-x/min';
import findMin from '@array-x/find-min';
import findMinIndex from '@array-x/find-min-index';
import localizeMin from '@array-x/localize-min';

Object.defineProperty(Array.prototype, 'x', {
  get() {
    const that = this;

    return {
      min: min.bind(that),
      findMin: findMin.bind(that),
      findMinIndex: findMinIndex.bind(that),
      localizeMin: localizeMin.bind(that)
    };
  }
});