import group from '@array-x/group';

import uniq from '@array-x/uniq';
import uniqSeq from '@array-x/uniq-seq';

import collectUntil from '@array-x/collect-until';
import collectUntilReduce from '@array-x/collect-until-reduce';
import skipUntil from '@array-x/skip-until';
import skipUntilReduce from '@array-x/skip-until-reduce';

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
import countAll from '@array-x/count-all';
import avg from '@array-x/avg';
import wavg from '@array-x/wavg';

import chunk from '@array-x/chunk';
import chunkByCallback from '@array-x/chunk-by-callback';
import zip from '@array-x/zip';
import zipAll from '@array-x/zip-all';
import unzip from '@array-x/unzip';
import unzipAll from '@array-x/unzip-all';

import split from '@array-x/split';
import insert from '@array-x/insert';
import overwrite from '@array-x/overwrite';
import override from '@array-x/override';
import move from '@array-x/move';

Object.defineProperty(Array.prototype, 'x', {
  get() {
    const that = this;

    return {
      group: group.bind(that),
      
      uniq: uniq.bind(that),
      uniqSeq: uniqSeq.bind(that),

      collectUntil: collectUntil.bind(that),
      collectUntilReduce: collectUntilReduce.bind(that),
      skipUntil: skipUntil.bind(that),
      skipUntilReduce: skipUntilReduce.bind(that),
      
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
      countAll: countAll.bind(that),
      avg: avg.bind(that),
      wavg: wavg.bind(that),

      chunk: chunk.bind(that),
      chunkByCallback: chunkByCallback.bind(that),
      zip: zip.bind(that),
      zipAll: zipAll.bind(that),
      unzip: unzip.bind(that),
      unzipAll: unzipAll.bind(that),

      split: split.bind(that),
      insert: insert.bind(that),
      overwrite: overwrite.bind(that),
      override: override.bind(that),
      move: move.bind(that)
    };
  }
});