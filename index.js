import min from '@array-x/min';
import findMin from '@array-x/find-min';
import findMinIndex from '@array-x/find-min-index';
import localizeMin from '@array-x/localize-min';

import max from '@array-x/max';
import findMax from '@array-x/find-max';
import findMaxIndex from '@array-x/find-max-index';
import localizeMax from '@array-x/localize-max';

import avg from '@array-x/avg';

Object.defineProperty(Array.prototype, 'x', {
  get() {
    const that = this;

    return {
      min: min.bind(that),
      findMin: findMin.bind(that),
      findMinIndex: findMinIndex.bind(that),
      localizeMin: localizeMin.bind(that),

      max: max.bind(that),
      findMax: findMax.bind(that),
      findMaxIndex: findMaxIndex.bind(that),
      localizeMax: localizeMax.bind(that),

      avg: avg.bind(that)
    };
  }
});