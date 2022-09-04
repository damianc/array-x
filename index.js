import localize from '@array-x/localize';
import localizeAll from '@array-x/localize-all';
import localizeMin from '@array-x/localize-min';
import localizeMax from '@array-x/localize-max';

import min from '@array-x/min';
import findMin from '@array-x/find-min';
import findMinIndex from '@array-x/find-min-index';

import max from '@array-x/max';
import findMax from '@array-x/find-max';
import findMaxIndex from '@array-x/find-max-index';

import count from '@array-x/count';
import avg from '@array-x/avg';

Object.defineProperty(Array.prototype, 'x', {
  get() {
    const that = this;

    return {
      localize: localize.bind(that),
      localizeAll: localizeAll.bind(that),
      localizeMin: localizeMin.bind(that),
      localizeMax: localizeMax.bind(that),

      min: min.bind(that),
      findMin: findMin.bind(that),
      findMinIndex: findMinIndex.bind(that),

      max: max.bind(that),
      findMax: findMax.bind(that),
      findMaxIndex: findMaxIndex.bind(that),

      count: count.bind(that),
      avg: avg.bind(that)
    };
  }
});