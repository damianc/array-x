import group from '@array-x/group';
import index from '@array-x/index';

import pivot from '@array-x/pivot';
import join1to1 from '@array-x/join1to1';
import joinManyTo1 from '@array-x/joinmanyto1';
import join1ToMany from '@array-x/join1tomany';

import uniq from '@array-x/uniq';
import uniqAdjacent from '@array-x/uniq-adjacent';

import takeUntil from '@array-x/take-until';
import takeUntilReduce from '@array-x/take-until-reduce';
import skipUntil from '@array-x/skip-until';
import skipUntilReduce from '@array-x/skip-until-reduce';
import extractSub from '@array-x/extract-sub';

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
import chunkByReduce from '@array-x/chunk-by-reduce';
import chunkByPattern from '@array-x/chunk-by-pattern';
import chunkByGroup from '@array-x/chunk-by-group';
import partition from '@array-x/partition';
import zip from '@array-x/zip';
import zipAll from '@array-x/zip-all';
import unzip from '@array-x/unzip';
import unzipAll from '@array-x/unzip-all';

import split from '@array-x/split';
import splitByPattern from '@array-x/split-by-pattern';
import cut from '@array-x/cut';
import chop from '@array-x/chop';
import insert from '@array-x/insert';
import overwrite from '@array-x/overwrite';
import override from '@array-x/override';
import move from '@array-x/move';
import shuffle from '@array-x/shuffle';
import random from '@array-x/random';
import wrapAlter from '@array-x/wrap-alter';
import adapt from '@array-x/adapt';
import adaptByCallback from '@array-x/adapt-by-callback';
import cork from '@array-x/cork';
import precede from '@array-x/precede';
import follow from '@array-x/follow';

import pluck from '@array-x/pluck';
import pluckMultiple from '@array-x/pluck-multiple';
import glue from '@array-x/glue';
import glueHeads from '@array-x/glue-heads';
import glueTails from '@array-x/glue-tails';
import clamped from '@array-x/clamped';
import fold from '@array-x/fold';
import iterator from '@array-x/iterator';
import revIterator from '@array-x/rev-iterator';
import refIterator from '@array-x/ref-iterator';
import cyclicIterator from '@array-x/cyclic-iterator';
import echoIterator from '@array-x/echo-iterator';
import frozen from '@array-x/frozen';
import fixed from '@array-x/fixed';
import dwarf from '@array-x/dwarf';
import alterable from '@array-x/alterable';

import flat from '@array-x/flat';
import sort from '@array-x/sort';
import reversed from '@array-x/reversed';
import forEach from '@array-x/for-each';
import reduce from '@array-x/reduce';
import spreadMap from '@array-x/spread-map';
import filterMapped from '@array-x/filter-mapped';
import replace from '@array-x/replace';
import findIndexes from '@array-x/find-indexes';
import includes from '@array-x/includes';
import mapReduce from '@array-x/map-reduce';
import pop from '@array-x/pop';
import shift from '@array-x/shift';
import pull from '@array-x/pull';
import frame from '@array-x/frame';
import scan from '@array-x/scan';
import sample from '@array-x/sample';
import audit from '@array-x/audit';
import auditChunks from '@array-x/audit-chunks';
import expandTo from '@array-x/expand-to';
import expandToLength from '@array-x/expand-to-length';
import toString from '@array-x/to-string';
import toJSON from '@array-x/to-json';
import fill from '@array-x/fill';
import padLeft from '@array-x/pad-left';
import padRight from '@array-x/pad-right';
import join from '@array-x/join';
import matchSome from '@array-x/match-some';
import matchEvery from '@array-x/match-every';

import chunkReduce from '@array-x/chunk-reduce';
import frameReduce from '@array-x/frame-reduce';
import forEachChunk from '@array-x/for-each-chunk';
import forEachFrame from '@array-x/for-each-frame';
import everyNth from '@array-x/every-nth';

import select from '@array-x/select';
import thick from '@array-x/thick';
import sparse from '@array-x/sparse';

import union from '@array-x/union';
import intersection from '@array-x/intersection';
import diff from '@array-x/diff';
import symDiff from '@array-x/sym-diff';
import complement from '@array-x/complement';

import minPairDiff from '@array-x/min-pair-diff';
import maxPairDiff from '@array-x/max-pair-diff';
import minDiff from '@array-x/min-diff';
import maxDiff from '@array-x/max-diff';
import minDiffAhead from '@array-x/min-diff-ahead';
import maxDiffAhead from '@array-x/max-diff-ahead';

Object.defineProperty(Array.prototype, 'x', {
  get() {
    const that = this;

    const aliased = {
      // readony(), readOnly()
      frozen: frozen.bind(that),
      // each()
      forEach: forEach.bind(that),
      // pad()
      padLeft: padLeft.bind(that)
    };

    return {
      group: group.bind(that),
      index: index.bind(that),

      pivot: pivot.bind(that),
      joinOneToOne: join1to1.bind(that),
      joinManyToOne: joinManyTo1.bind(that),
      joinOneToMany: join1ToMany.bind(that),

      uniq: uniq.bind(that),
      uniqAdjacent: uniqAdjacent.bind(that),

      takeUntil: takeUntil.bind(that),
      takeUntilReduce: takeUntilReduce.bind(that),
      skipUntil: skipUntil.bind(that),
      skipUntilReduce: skipUntilReduce.bind(that),
      extractSub: extractSub.bind(that),

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
      chunkByReduce: chunkByReduce.bind(that),
      chunkByPattern: chunkByPattern.bind(that),
      chunkByGroup: chunkByGroup.bind(that),
      partition: partition.bind(that),
      zip: zip.bind(that),
      zipAll: zipAll.bind(that),
      unzip: unzip.bind(that),
      unzipAll: unzipAll.bind(that),

      split: split.bind(that),
      splitByPattern: splitByPattern.bind(that),
      cut: cut.bind(that),
      chop: chop.bind(that),
      insert: insert.bind(that),
      overwrite: overwrite.bind(that),
      override: override.bind(that),
      move: move.bind(that),
      shuffle: shuffle.bind(that),
      random: random.bind(that),
      wrapAlter: wrapAlter.bind(that),
      adapt: adapt.bind(that),
      adaptByCallback: adaptByCallback.bind(that),
      cork: cork.bind(that),
      precede: precede.bind(that),
      follow: follow.bind(that),

      pluck: pluck.bind(that),
      pluckMultiple: pluckMultiple.bind(that),
      glue: glue.bind(that),
      glueHeads: glueHeads.bind(that),
      glueTails: glueTails.bind(that),
      clamped: clamped.bind(that),
      fold: fold.bind(that),
      iterator: iterator.bind(that),
      revIterator: revIterator.bind(that),
      refIterator: refIterator.bind(that),
      cyclicIterator: cyclicIterator.bind(that),
      echoIterator: echoIterator.bind(that),
      frozen: aliased.frozen,
      readonly: aliased.frozen,
      readOnly: aliased.frozen,
      fixed: fixed.bind(that),
      dwarf: dwarf.bind(that),
      alterable: alterable.bind(that),

      flat: flat.bind(that),
      sort: sort.bind(that),
      reversed: reversed.bind(that),
      forEach: aliased.forEach,
      each: aliased.forEach,
      reduce: reduce.bind(that),
      spreadMap: spreadMap.bind(that),
      filterMapped: filterMapped.bind(that),
      replace: replace.bind(that),
      findIndexes: findIndexes.bind(that),
      includes: includes.bind(that),
      mapReduce: mapReduce.bind(that),
      pop: pop.bind(that),
      shift: shift.bind(that),
      pull: pull.bind(that),
      frame: frame.bind(that),
      scan: scan.bind(that),
      sample: sample.bind(that),
      audit: audit.bind(that),
      auditChunks: auditChunks.bind(that),
      expandTo: expandTo.bind(that),
      expandToLength: expandToLength.bind(that),
      toString: toString.bind(that),
      toJSON: toJSON.bind(that),
      fill: fill.bind(that),
      pad: aliased.padLeft,
      padLeft: aliased.padLeft,
      padRight: padRight.bind(that),
      join: join.bind(that),
      matchSome: matchSome.bind(that),
      matchEvery: matchEvery.bind(that),

      chunkReduce: chunkReduce.bind(that),
      frameReduce: frameReduce.bind(that),
      forEachChunk: forEachChunk.bind(that),
      forEachFrame: forEachFrame.bind(that),
      everyNth: everyNth.bind(that),

      select: select.bind(that),
      thick: thick.bind(that),
      sparse: sparse.bind(that),

      union: union.bind(that),
      intersection: intersection.bind(that),
      diff: diff.bind(that),
      symDiff: symDiff.bind(that),
      complement: complement.bind(that),

      minPairDiff: minPairDiff.bind(that),
      maxPairDiff: maxPairDiff.bind(that),
      minDiff: minDiff.bind(that),
      maxDiff: maxDiff.bind(that),
      minDiffAhead: minDiffAhead.bind(that),
      maxDiffAhead: maxDiffAhead.bind(that)
    };
  }
});