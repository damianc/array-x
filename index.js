import group from '@array-x/group';
import index from '@array-x/index';

import join1to1 from '@array-x/join1to1';
import joinManyTo1 from '@array-x/joinmanyto1';
import join1ToMany from '@array-x/join1tomany';

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
import sum from '@array-x/sum';

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

import iterator from '@array-x/iterator';
import frozen from '@array-x/frozen';
import fixed from '@array-x/fixed';
import dwarf from '@array-x/dwarf';
import alterable from '@array-x/alterable';

import reverse from '@array-x/reverse';
import forEach from '@array-x/for-each';

import forEveryChunk from '@array-x/for-every-chunk';
import forEveryN from '@array-x/for-every-n';

Object.defineProperty(Array.prototype, 'x', {
  get() {
    const that = this;

    const aliased = {
      // readony(), readOnly()
      frozen: frozen.bind(that),
      // each()
      forEach: forEach.bind(that)
    };

    return {
      group: group.bind(that),
      index: index.bind(that),

      join1to1: join1to1.bind(that),
      joinManyTo1: joinManyTo1.bind(that),
      join1ToMany: join1ToMany.bind(that),

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
      sum: sum.bind(that),

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
      move: move.bind(that),

      iterator: iterator.bind(that),
      frozen: aliased.frozen,
      readonly: aliased.frozen,
      readOnly: aliased.frozen,
      fixed: fixed.bind(that),
      dwarf: dwarf.bind(that),
      alterable: alterable.bind(that),

      reverse: reverse.bind(that),
      forEach: aliased.forEach,
      each: aliased.forEach,

      forEveryChunk: forEveryChunk.bind(that),
      forEveryN: forEveryN.bind(that)
    };
  }
});