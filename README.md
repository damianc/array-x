# `array-x`

Collecting:
- [`group()`](#grouplabelFactory)
- [`index()`](#indexkeySelector-valueSelector--null-fallbackKey--__unindexed)
- [`collectUntil()`](#collectUntilitemOrMatcher-inclusive--true)
- [`collectUntilReduce()`](#collectUntilReduceaccTester-reducer-reducerInit-inclusive--true)
- [`skipUntil()`](#skipUntilitemOrMatcher-inclusive--true)
- [`skipUntilReduce()`](#skipUntilReduceaccTester-reducer-reducerInit-inclusive--true)
- [`uniq()`](#uniqselector)
- [`uniqSeq()`](#uniqseqselector)
- [`pluck()`](#pluckpath)
- [`pluckMultiple()`](#pluckMultiplepaths)
- [`glue()`](#glueotherArray---headSize-tailSize)
- [`glueHeads()`](#glueHeadsotherArray---leftSize-rightSize--leftSize)
- [`glueTails()`](#glueTailsotherArray---leftSize-rightSize--leftSize)
- [`iterator()`](#iterator)
- [`revIterator()`](#revIterator)
- [`refIterator()`](#refIteratorrefKey-nextKey-initItemIdx--0)
- [`cyclicIterator()`](#cyclicIterator)
- [`echoIterator()`](#echoIteratorsticky--false)
- [`everyNth()`](#everyNthn--1-from--0-to)
- [`select()`](#selectfrom--0-to---1-step--1)

Searching:
- [`localize()`](#localizeitemOrMatcher)
- [`localizeAll()`](#localizeAllitemOrMatcher)
- [`localizeMin()`](#localizeMinmapper)
- [`localizeMax()`](#localizeMaxmapper)

Examining:
- [`count()`](#countitemOrMatcher)
- [`countAll()`](#countAlllabelFactory)
- [`avg()`](#avgmapper)
- [`wavg()`](#wavgweightsArrOrWeightSelector-selector)
- [`sum()`](#summapper)

Clustering:
- [`chunk()`](#chunksize-rejectStickingTail--false)
- [`chunkByCallback()`](#chunkByCallbackcb-matchedItemOpening--true)
- [`chunkByPattern()`](#chunkByPatternsizes-rejectStickingTail--false)
- [`zip()`](#zipotherArrays)
- [`zipAll()`](#zipAllotherArrays)
- [`unzip()`](#unzip)
- [`unzipAll()`](#unzipAll)
- [`split()`](#splitmatcher--null)
- [`splitByPattern()`](#splitByPatterntake-skip-from--null-rejectStickingTail--false)
- [`cut()`](#cutindex)
- [`chop()`](#chopcuts)

Altering:
- [`wrapAlter()`](#wrapAlterprocessor)
- [`adapt()`](#adaptotherArray---adaptations--1)
- [`adaptByCallback()`](#adaptByCallbackotherArray---tester--null-adaptations--1-lazy--false)
- [`random()`](#randomcount--1)
- [`shuffle()`](#shuffle)
- [`move()`](#movesourceIndex-count-targetIndex--0)
- [`insert()`](#insertindex-items)
- [`overwrite()`](#overwriteindex-items)
- [`override()`](#overrideindex-items)
- [`precede()`](#precedeappendix---fillWithUndefined--false)
- [`follow()`](#followappendix---fillWithUndefined--false)
- [`frozen()`](#frozen)
- [`fixed()`](#fixed)
- [`dwarf()`](#dwarf)
- [`alterable()`](#alterable)
- [`clamped()`](#clampedmin-max)
- [`fold()/unfold()`](#foldcoverSelectorunfoldindex)
- [`sparse()`](#sparseslots--1)
- [`thick()`](#thick)

Sets:
- [`union()`](#unionotherSet--)
- [`intersection()`](#intersectionotherSet--)
- [`diff()`](#diffotherSet--)
- [`symDiff()`](#symDiffotherSet--)
- [`complement()`](#complementotherSet--)

Redefined built-ins:
- [`reduce()`](#reducereducer-finalizer--null-init)
- [`scan()`](#scanreducer-init--null)
- [`reversed()`](#reversed)
- [`forEach()`](#forEachcb)
- [`spreadMap()`](#spreadMapmapper)
- [`filterMapped()`](#filterMappedmapper--null-filter--null)
- [`replace()`](#replacematcher--x--x-replacer--x--x)
- [`findIndexes()`](#findIndexesmatcher--null)
- [`includes()`](#includesmatcher--null)
- [`mapReduce()`](#mapReducechunkSize--2-reducer--null-init--null-rejectStickingTail--false)
- [`pop()`](#popn--1)
- [`shift()`](#shiftn--1)
- [`frame()`](#framesize-rejectIncomplete--true)
- [`audit()`](#audittester-frameSize--2)
- [`auditChunks()`](#auditChunkstester-chunkSize-2-rejectSticking--true)
- [`audit()` vs. `auditChunks()`](#audit-vs-auditChunks)

Iteration:
- [`forEveryChunk()`](#forEveryChunkchunkSize-cb)
- [`forEveryN()`](#forEveryNblockSize-cb-fullBlocksOnly--false)

Min and Max:
- [`min()`](#minmapper)
- [`max()`](#maxmapper)
- [`findMin()`](#findMinmapper)
- [`findMax()`](#findMaxmapper)
- [`findMinIndex()`](#findMinIndexmapper)
- [`findMaxIndex()`](#findMaxIndexmapper)

Difference:

- [`minPairDiff()`](#minPairDiffcomparer--null)
- [`maxPairDiff()`](#maxPairDiffcomparer--null)
- [`minDiff()`](#minDiffcomparer--null)
- [`maxDiff()`](#maxDiffcomparer--null)
- [`minDiffAhead()`](#minDiffAheadcomparer--null)
- [`maxDiffAhead()`](#maxDiffAheadcomparer--null)
- [`maxPairDiff()` vs. `maxDiff()` vs. `maxDiffAhead()`](#maxPairDiff-vs-maxDiff-vs-maxDiffAhead)

## `group(labelFactory...)`

```
[1, 2, 3, 4].x.group(x => x % 2 === 0 ? 'even' : 'odd')
// {
//   odd: [1, 3],
//   even: [2, 4]
// }

[1, 2, 30, 45].x.group(
  x => x % 2 === 0 ? 'even' : 'odd',
  x => x > 9 ? 'multidigit' : 'digit'
)
// {
//   odd: [1, 45],
//   even: [2, 30],
//   digit: [1, 2],
//   multidigit: [30, 45]
// }

[1, 2, 30, 45].x.group(
  x => x % 2 === 0 ? 'even' : 'odd',
  x => x > 9 ? 'multidigit' : null
)
// {
//   odd: [1, 45],
//   even: [2, 30],
//   multidigit: [30, 45]
// }

[
  { name: 'Mark', city: 'LA' },
  { name: 'John', city: 'NY' },
  { name: 'Adam', city: 'LA' }
].x.group(u => u.city)
// {
//   LA: [{ name: 'Mark', city: 'LA' }, { name: 'Adam', city: 'LA' }],
//   NY: [{ name: 'John', city: 'NY' }]
// }
```

## `index(keySelector, valueSelector = null, fallbackKey = '__unindexed')`

- `keySelector`: `string` or `(item: any, index: number) => string`
- `valueSelector`: `string` or `(item: any, index: number) => string`
- `fallbackKey`: `string`

```
[
  { id: 1, name: 'John', city: 'NY' },
  { id: 2, name: 'Mark', city: 'LA' },
  { id: 3, name: 'Adam', city: 'LA', extraKey: 'foo' }
].x.index('city');

/*
{
  NY: [ { id: 1, name: 'John', city: 'NY' } ],
  LA: [
    { id: 2, name: 'Mark', city: 'LA' },
    { id: 3, name: 'Adam', city: 'LA', extraKey: 'foo' }
  ]
}
*/
```

```
[
  { id: 1, name: 'John', city: 'NY' },
  { id: 2, name: 'Mark', city: 'LA' },
  { id: 3, name: 'Adam', city: 'LA', extraKey: 'foo' }
].x.index(
  u => u.city.toLowerCase(),
  'id'
);

/*
{
  ny: [ 1 ],
  la: [ 2, 3 ]
}
*/
```

```
[
  { id: 1, name: 'John', city: 'NY' },
  { id: 2, name: 'Mark', city: 'LA' },
  { id: 3, name: 'Adam', city: 'LA', extraKey: 'foo' }
].x.index('extraKey', 'name');

/*
{
  foo: [ 'Adam' ],
  __unindexed: [ 'John', 'Mark' ]
}
*/
```


## `collectUntil(itemOrMatcher, inclusive = true)`

```
[1, 2, 3, 4, 5, 6].x.collectUntil(4)
// [1, 2, 3, 4]

[1, 2, 3, 4, 5, 6].x.collectUntil(4, false)
// [1, 2, 3]

[1, 3, 2, 4].x.collectUntil(x => x % 2 === 0)
// [1, 3, 2]

[1, 3, 2, 4].x.collectUntil(x => x % 2 === 0, false)
// [1, 3]

[1, 2, 3, 4, 5, 6].x.collectUntil(10)
// [1, 2, 3, 4, 5, 6]
```

## `collectUntilReduce(accTester, reducer, reducerInit, inclusive = true)`

```
// collect numbers until their average equals 5

const res = [6, 5, 4, 3, 2, 1].x.collectUntilReduce(
  (acc) => acc.x.avg() === 5,
  (a, b) => [...a, b],
  []
);
// [6, 5, 4]
```

```
[1, 2, 3, 4, 5, 6].x.collectUntilReduce(
  sum => sum >= 10,
  (a, b) => a + b,
  0
)
// [1, 2, 3, 4]

[1, 2, 3, 4, 5, 6].x.collectUntilReduce(
  sum => sum >= 10,
  (a, b) => a + b,
  0,
  false
)
// [1, 2, 3]

[10, 20, 30, 40].x.collectUntilReduce(
  sum => sum >= 10,
  (a, b) => a + b,
  0
)
// [10]

[10, 20, 30, 40].x.collectUntilReduce(
  sum => sum >= 10,
  (a, b) => a + b,
  0,
  false
)
// []
```

## `skipUntil(itemOrMatcher, inclusive = true)`

```
[1, 2, 3, 4, 5, 6].x.skipUntil(4)
// [4, 5, 6]

[1, 2, 3, 4, 5, 6].x.skipUntil(4, false)
// [5, 6]

[1, 3, 2, 4].x.skipUntil(x => x % 2 === 0)
// [2, 4]

[1, 3, 2, 4].x.skipUntil(x => x % 2 === 0, false)
// [4]

[1, 2, 3, 4, 5, 6].x.skipUntil(10)
// []
```

## `skipUntilReduce(accTester, reducer, reducerInit, inclusive = true)`

```
[1, 2, 3, 4, 5, 6].x.skipUntilReduce(
  sum => sum >= 10,
  (a, b) => a + b,
  0
)
// [4, 5, 6]

[1, 2, 3, 4, 5, 6].x.skipUntilReduce(
  sum => sum >= 10,
  (a, b) => a + b,
  0,
  false
)
// [5, 6]

[10, 20, 30, 40].x.skipUntilReduce(
  sum => sum >= 10,
  (a, b) => a + b,
  0
)
// [10, 20, 30, 40]

[10, 20, 30, 40].x.skipUntilReduce(
  sum => sum >= 10,
  (a, b) => a + b,
  0,
  false
)
// [20, 30, 40]

[1, 2, 1, 2].x.skipUntilReduce(
  sum => sum >= 10,
  (a, b) => a + b,
  0
)
// []
```

## `uniq([selector])`

```
[1, 2, 3, 2, 1].x.uniq()
// [1, 2, 3]

[{x:10,y:10}, {x:10,y:20}, {x:20,y:20}, {x:20,y:10}].x.uniq(coords => coords.x)
// [{x:10,y:10}, {x:20,y:20}]
```

## `uniqSeq([selector])`

```
[1, 2, 3, 2, 1].x.uniqSeq()
// [1, 2, 3, 2, 1]

[1, 2, 3, 3, 2, 2, 1, 1].x.uniqSeq()
// [1, 2, 3, 2, 1]

[
  { x: 1, id: 100 },
  { x: 2, id: 101 },
  { x: 3, id: 102 },
  { x: 3, id: 103 },
  { x: 2, id: 104 },
  { x: 2, id: 105 },
  { x: 1, id: 106 },
  { x: 1, id: 107 }
].x.uniqSeq(obj => obj.x)
// [
//   { x: 1, id: 100 },
//   { x: 2, id: 101 },
//   { x: 3, id: 102 },
//   { x: 2, id: 104 },
//   { x: 1, id: 106 }
// ]
```

### `uniq()` vs. `uniqSeq()`

```
const arr = [1, 2, 2, 3, 3, 2, 1, 1];

arr.x.uniq()
// [1, 2, 3]

arr.x.uniqSeq()
// [1, 2, 3, 2, 1]
```

## `pluck(path)`

```
[
  { foo: { bar: [1,2,{ baz: 120 }] } },
  { foo: { bar: [3,4,{ baz: 340 }] } },
  { foo: { bar: [5,6,{ baz: 560 }] } }
].x.pluck('foo.bar[2].baz')
// other working variant: pluck('foo.bar.2.baz')

// [120, 340, 560]
```

```
[
  [1,2,3],
  [2,3,5],
  [3,4,7],
  [4,5,9]
].x.pluck(2)
// other working variants: pluck('2'), pluck('[2]')

// [3, 5, 7, 9]
```

## `pluckMultiple(...paths)`

```
[
  { foo: { bar: [1,2,{ baz: 120 }] } },
  { foo: { bar: [3,4,{ baz: 340 }] } },
  { foo: { bar: [5,6,{ baz: 560 }] } }
].x.pluckMultiple('foo.bar[0]', 'foo.bar[1]', 'foo.bar[2].baz')

// [ [1,2,120], [3,4,340], [5,6,560] ]
```

```
[
  [1,2,3],
  [2,3,5],
  [3,4,7],
  [4,5,9]
].x.pluckMultiple(0, 2)

// [ [1,3], [2,5], [3,7], [4,9] ]
```

## `glue(otherArray = [], headSize, tailSize)`

```
[1,2,3,4].x.glue([5,6,7,8], 2, 2)
// [1,2,7,8]

[1,2,3,4].x.glue([5,6,7,8], 1, 3)
// [1,6,7,8]

[1,2,3,4].x.glue([5,6,7,8], 3, 1)
// [1,2,3,8]
```

## `glueHeads(otherArray = [], leftSize, rightSize = leftSize)`

```
[1,2,3,4].x.glueHeads([5,6,7,8], 2)
// [1,2,5,6]

[1,2,3,4].x.glueHeads([5,6,7,8], 1, 3)
// [1,5,6,7]

[1,2,3,4].x.glueHeads([5,6,7,8], 3, 1)
// [1,2,3,5]
```

## `glueTails(otherArray = [], leftSize, rightSize = leftSize)`

```
[1,2,3,4].x.glueTails([5,6,7,8], 2)
// [3,4,7,8]

[1,2,3,4].x.glueTails([5,6,7,8], 1, 3)
// [4,6,7,8]

[1,2,3,4].x.glueTails([5,6,7,8], 3, 1)
// [2,3,4,8]
```

## `iterator()`

```
const iter = [1,2,3,4].x.iterator();

[...iter]
// [1,2,3,4]

[...iter]
// []
```

```
const iter = [1,2,3,4].x.iterator();

iter.next()
// {value: 1, done: false}

iter.next()
// {value: 2, done: false}

[...iter]
// [3,4]

iter.next()
// {value: undefined, done: true}

[...iter]
// []
```

## `revIterator()`

```
const revIter = [1,2,3,4].x.revIterator();

[...revIter]
// [4,3,2,1]

[...revIter]
// []
```

## `refIterator(refKey, nextKey, initItemIdx = 0)`

```
const blocks = [
  { id: 1, next: 2, data: 'A' },
  { id: 3, next: 4, data: 'C' },
  { id: 4, data: 'D' },
  { id: 2, next: 3, data: 'B' }
];

const chain = blocks.x.refIterator('id', 'next');
const path = [...chain].map(b => b.data).join(' -> ');

path
// 'A -> B -> C -> D'
```

```
const blocks = [
  { id: 1, next: 2, data: 'A' },
  { id: 3, next: 4, data: 'C' },
  { id: 4, data: 'D' },
  { id: 2, next: 3, data: 'B' }
];

const chain = blocks.x.refIterator('id', 'next', 1);
const path = [...chain].map(b => b.data).join(' -> ');

path
// 'C -> D'
```

```
const blocks = [
  { id: 1, next: 20, data: 'A' },
  { id: 2, next: 3, data: 'B' }
];

const chain = blocks.x.refIterator('id', 'next');
const path = [...chain].map(b => b.data).join(' -> ');

path
// 'A'
```

## `cyclicIterator()`

```
const ci = [1,2,3,4].x.cyclicIterator();
const res = [];

for (let i = 1; i <= 10; i++) {
  res.push(ci.current);
  ci.next();
}

console.log(
  res.join('-')
);
// '1-2-3-4-1-2-3-4-1-2'
```

## `echoIterator(sticky = false)`

```
const echit = [1,2,3,4].x.echoIterator();

let chain = echit.current;
for (
  let i = 1, _ = echit.next();
  i++ < 12;
  echit.next()
) chain += ' -> ' + echit.current;

chain
// '1 -> 2 -> 3 -> 4 -> 3 -> 2 -> 1 -> 2 -> 3 -> 4 -> 3 -> 2'
```

```
const echit = [1,2,3,4].x.echoIterator(true);

let chain = echit.current;
for (
  let i = 1, _ = echit.next();
  i++ < 12;
  echit.next()
) chain += ' -> ' + echit.current;

chain
// '1 -> 2 -> 3 -> 4 -> 4 -> 3 -> 2 -> 1 -> 1 -> 2 -> 3 -> 4'
```

## `everyNth(n = 1, from = 0, to)`

```
[1,2,3,4,5,6].x.everyNth(2)
// [1,3,5]

[1,2,3,4,5,6].x.everyNth(2, 1)
// [2,4,6]

[1,2,3,4,5,6].x.everyNth(2, -3)
// [4,6]

[1,2,3,4,5,6].x.everyNth(2, -5)
// [2,4,6]

[1,2,3,4,5,6].x.everyNth(2, -5, -2)
// [2,4]
```

## `select(from = 0, to = -1, step = 1)`

```
[1,2,3,4,5,6].x.select(2,4)
// [3,4,5]

[1,2,3,4,5,6].x.select(2)
// [3,4,5,6]

[1,2,3,4,5,6].x.select(-2)
// [5,6]

[1,2,3,4,5,6].x.select(2,-2)
// [3,4,5]

[1,2,3,4,5,6].x.select(-3,-2)
// [4,5]

[1,2,3,4,5,6].x.select(0,-1,2)
// [1,3,5]

[1,2,3,4,5,6].x.select(1,-1,2)
// [2,4,6]
```

## `localize(itemOrMatcher)`

```
[10, 20, 30, 40].x.localize(20)
// [1, 20]

['x', 'xx', 'xxx', 'xx', 'x'].x.localize(str => str.length >= 3)
// [2, 'xxx']

[1, 2, 3, 4].x.localize(20)
// null
```

## `localizeAll(itemOrMatcher)`

```
[10, 20, 30, 40].x.localizeAll(20)
// [[1, 20]]

[10, 20, 10, 20].x.localizeAll(20)
// [[1, 20], [3, 20]]

['x', 'xx', 'xxx'].localizeAll(str => str.length >= 2)
// [[1, 'xx'], [2, 'xxx']]

[1, 2, 3, 4].x.localizeAll(20)
// []
```

## `localizeMin([mapper])`

```
[5, 6, 7, 8].x.localizeMin()
// [0, 5]

['xxxx', 'xx', 'xxx'].x.localizeMin(str => str.length)
// [1, 'xx']

[].x.localizeMin()
// null
```

## `localizeMax([mapper])`

```
[5, 6, 7, 8].x.localizeMax()
// [3, 8]

['xxxx', 'xx', 'xxx'].x.localizeMax(str => str.length)
// [0, 'xxxx']

[].x.localizeMax()
// null
```

## `min([mapper])`

```
[5, 6, 7, 8].x.min()
// 5

['xxxx', 'xx', 'xxx'].x.min(str => str.length)
// 2

[].x.min()
// null
```

## `findMin([mapper])`

```
[5, 6, 7, 8].x.findMin()
// 5

['xxxx', 'xx', 'xxx'].x.findMin(str => str.length)
// 'xx'

[].x.findMin()
// null
```

## `findMinIndex([mapper])`

```
[5, 6, 7, 8].x.findMinIndex()
// 0

['xxxx', 'xx', 'xxx'].x.findMinIndex(str => str.length)
// 1

[].x.findMinIndex()
// -1
```

## `max([mapper])`

```
[5, 6, 7, 8].x.max()
// 8

['xxxx', 'xx', 'xxx'].x.max(str => str.length)
// 4

[].x.max()
// null
```

## `findMax([mapper])`

```
[5, 6, 7, 8].x.findMax()
// 8

['xxxx', 'xx', 'xxx'].x.findMax(str => str.length)
// 'xxxx'

[].x.findMax()
// null
```

## `findMaxIndex([mapper])`

```
[5, 6, 7, 8].x.findMaxIndex()
// 3

['xxxx', 'xx', 'xxx'].x.findMaxIndex(str => str.length)
// 0

[].x.findMaxIndex()
// -1
```

## `count(itemOrMatcher)`

```
[10, 20, 10, 20].x.count(20)
// 2

[1, 2, 3, 4, 5, 6].x.count(x => x % 2 === 0)
// 3

['x', 'xx', 'xxx'].x.count(str => str.length >= 2)
// 2

[1, 2, 3, 4].count(20)
// 0
```

## `countAll([labelFactory...])`

```
['foo', 'bar', 'foo', 'baz'].x.countAll()
// { foo: 2, bar: 1, baz: 1 }

['xx', 'xxx', 'xx'].x.countAll(str => `ofLength${str.length}`)
// { ofLength2: 2, ofLength3: 1 }

[1, 2, 3, 4, 5, 6].x.countAll(
  x => x % 2 === 0 ? 'even' : 'odd'
)
// { even: 3, odd: 3 }

[1, 23, 4, 56, 7, 89].x.countAll(
  x => x % 2 === 0 ? 'even' : 'odd',
  x => x > 9 ? 'multidigit' : 'digit'
)
// { even: 2, odd: 4, multidigit: 3, digit: 3  }

[1, 23, 4, 56, 7, 89].x.countAll(
  x => x % 2 === 0 ? 'even' : 'odd',
  x => x > 9 ? 'multidigit' : null
)
// { even: 2, odd: 4, multidigit: 3  }

[
  { name: 'Mark', city: 'LA' },
  { name: 'John', city: 'NY' },
  { name: 'Adam', city: 'LA' }
].x.countAll(u => u.city)
// { LA: 2, NY: 1 }
```

## `avg([mapper])`

```
[1, 2, 3, 4].x.avg()
// 2.5

['x', 'xx', 'xxx'].x.avg(str => str.length)
// 2

[
  { examId: 120, mark: 5 },
  { examId: 121, mark: 4 }
].x.avg(exam => exam.mark)
// 4.5

[].x.avg()
// null
```

## `wavg(weightsArrOrWeightSelector, [selector])`

```
[4].x.wavg([2])
// 4
// (4 * 2) / 2 -> 8 / 2

[3, 3].x.wavg([3, 2])
// 3
// (3 * 3 + 3 * 2) / (3 + 2) -> (9 + 6) / 5 -> 15 / 5

[
  { examId: 120, mark: 5 },
  { examId: 121, mark: 4 },
  { examId: 122, mark: 4.5 },
  { examId: 123, mark: 5.5 },
  { examId: 124, mark: 5 }
].x.wavg([1, 1, 3, 2, 4], exam => exam.mark)
// 4.863636363636363
// (5 + 4 + 4.5 * 3 + 5.5 * 2 + 5 * 4) / (1 + 1 + 3 + 2 + 4)
// (5 + 4 + 13.5 + 11 + 20) / 11 -> 53.5 / 11 -> 4.863636363636363

[
  { examId: 120, examWeight: 1, mark: 5 },
  { examId: 121, examWeight: 1, mark: 4 },
  { examId: 122, examWeight: 3, mark: 4.5 },
  { examId: 123, examWeight: 2, mark: 5.5 },
  { examId: 124, examWeight: 4, mark: 5 }
].x.wavg(
  exam => exam.examWeight,
  exam => exam.mark
)
// 4.863636363636363
// as above
```

## `sum([mapper])`

```
[1,2,3,4].x.sum()
// 10

['foo', 'bar', 'baz'].x.sum(str => str.length)
// 9
```

## `chunk(size, rejectStickingTail = false)`

```
[1,2,3,4,5,6].x.chunk(2)
// [ [1,2], [3,4], [5,6] ]

[1,2,3,4,5].x.chunk(2)
// [ [1,2], [3,4], [5] ]

[1,2,3,4,5].x.chunk(2, true)
// [ [1,2], [3,4] ]

[1,2,3,4].x.chunk(0)
// []
```

## `chunkByCallback(cb, matchedItemOpening = true)`

```
// open new chunk when meet even number
[1,2,3,4,5,6].x.chunkByCallback(x => x % 2 === 0)
// [ [1], [2,3], [4,5], [6] ]

// close current chunk when meet even number
[1,2,3,4,5,6].x.chunkByCallback(x => x % 2 === 0, false)
// [ [1,2], [3,4], [5,6] ]

// same as chunk(3)
[1,2,3,4,5,6,7,8].x.chunkByCallback(
  (_, idx) => (idx + 1) % 3 === 0,
  false
)
// [ [1,2,3], [4,5,6], [7,8] ]
```

## `chunkByPattern(...sizes, rejectStickingTail = false)`

```
[1,2,3,4,5,6].x.chunkByPattern(2, 3)
// [ [1,2], [3,4,5], [6] ]

[1,2,3,4,5,6].x.chunkByPattern(2, 3, true)
// [ [1,2], [3,4,5] ]
```

## `zip(otherArrays...)`

```
['a', 'b', 'c', 'd'].x.zip([1, 2, 3, 4])
// [ ['a', 1], ['b', 2], ['c', 3], ['d', 4] ]

['a', 'b'].x.zip([1, 2], ['foo', 'bar'])
// [ ['a', 1, 'foo'], ['b', 2, 'bar'] ]

['a', 'b', 'c', 'd'].x.zip([1, 2])
// [ ['a', 1], ['b', 2] ]

['a', 'b'].x.zip([1, 2, 3, 4])
// [ ['a', 1], ['b', 2] ]
```

## `zipAll(otherArrays...)`

```
['a', 'b'].x.zip([1, 2])
// [ ['a', 1], ['b', 2] ]

['a', 'b'].x.zip([1, 2], ['foo', 'bar'])
// [ ['a', 1, 'foo'], ['b', 2, 'bar'] ]

['a', 'b', 'c', 'd'].x.zip([1, 2])
// [ ['a', 1], ['b', 2], ['c', undefined], ['d', undefined] ]

['a', 'b'].x.zip([1, 2, 3, 4])
// [ ['a', 1], ['b', 2], [undefined, 3], [undefined, 4] ]
```

### `zip()` vs. `zipAll()`

```
[1, 2, 3, 4].x.zip(['a', 'b'])
// [ [1, 'a'], [2, 'b'] ]

[1, 2, 3, 4].x.zipAll(['a', 'b'])
// [ [1, 'a'], [2, 'b'], [3, undefined], [4, undefined] ]
```

## `unzip()`

```
[ ['a', 1], ['b', 2], ['c', 3], ['d', 4] ].x.unzip()
// [ ['a', 'b', 'c', 'd'], [1, 2, 3, 4] ]

[ ['a', 1, 'foo'], ['b', 2, 'bar'], ['c', 3, 'baz'] ].x.unzip()
// [ ['a', 'b', 'c'], [1, 2, 3], ['foo', 'bar', 'baz'] ]

[ ['a', 1], ['b', 2, 'foo'], ['c', 3, 'bar']].x.unzip()
// [ ['a', 'b'], [1, 2] ]
```

## `unzipAll()`

```
[ ['a', 1, 'foo'], ['b', 2, 'bar'], ['c', 3, 'baz'] ].x.unzip()
// [ ['a', 'b', 'c'], [1, 2, 3], ['foo', 'bar', 'baz'] ]

[ ['a', 1], ['b', 2, 'foo'], ['c', 3, 'bar']].x.unzip()
// [ ['a', 'b', 'c'], [1, 2, 3], [undefined, 'foo', 'bar'] ]
```

### `unzip()` vs. `unzipAll()`

```
[ ['a', 1], ['b', 2, 'foo'] ].x.unzip()
// [ ['a', 'b'], [1, 2] ]

[ ['a', 1], ['b', 2, 'foo'] ].x.unzipAll()
// [ ['a', 'b'], [1, 2], [undefined, 'foo'] ]
```

## `split(matcher = null)`

```
[1,2,3,2,4,5].x.split(2)
// [ [1], [3], [4,5] ]

[1,2,3,4,5,6].x.split([2,4,8])
// [ [1], [3], [5,6] ]

[0,1,2,4,3,5,6,8,7,9].x.split(x => x % 2 === 0)
// [ [1], [3,5], [7,9] ]

[1,2,3,4].x.split(8)
// [1,2,3,4]
```

## `splitByPattern(take, skip, from = null, rejectStickingTail = false)`

```
[1,2,3,4,5,6,7,8].x.splitByPattern(3, 2)
// [ [1,2,3], [6,7,8] ]

[1,2,3,4,5,6,7,8].x.splitByPattern(3, 2, 1)
// [ [2,3,4], [7,8] ]

[1,2,3,4,5,6,7,8].x.splitByPattern(3, 2, 1, true)
// [ [2,3,4] ]
```

## `cut([index])`

```
[1,2,3,4].x.cut()
// [ [1, 2], [3, 4] ]

[1,2,3,4,5].x.cut()
// [ [1,2], [3,4,5] ]

[1,2,3,4,5,6].x.cut(2)
// [ [1,2], [3,4,5,6] ]

[1,2,3,4,5,6].x.cut(-2)
// [ [1,2,3,4], [5,6] ]
```

## `chop(...cuts)`

```
[1,2,3,4,5,6].x.chop(2)
// [ [1,2], [3,4,5,6] ]

[1,2,3,4,5,6].x.chop(-2)
// [ [1,2,3,4], [5,6] ]

[1,2,3,4,5,6].x.chop(-2, 2)
// [ [1,2], [3,4], [5,6] ]

[1,2,3,4,5,6,7,8].x.chop(-2, 2)
// [ [1,2], [3,4,5,6], [7,8] ]
```

```
[1,2,3,4,5,6,7,8,9,0].chop(
  1, 3, 6, 12
)
// [ [1], [2,3], [4,5,6], [7,8,9,0] ]
```

## `wrapAlter(processor)`

```
const arr = [1,2,3,4];
const alt = arr.x.wrapAlter(a => {
  a.pop();
  a.push(5);
});

alt
// [1,2,3,5]
arr
// [1,2,3,4]
```

```
const arr = [1,2,3,4];
const alt = arr.x.wrapAlter(a => {
  a.pop();
  a.push(5);
  return a.slice(2);
});

alt
// [3,5]
arr
// [1,2,3,4]
```

## `adapt(otherArray = [], adaptations = 1)`

* adapt only one different value from other array:

```
[1,2,1,2].x.adapt([1,20,1,20])
// [1,20,1,2]
```

* adapt two different values from other array:

```
[1,2,1,2,1,2].x.adapt([1,20,1,20,1,20], 2)
// [1,20,1,20,1,2]
```

* adapt all different values from other array (use `-1` as a second parameter):

```
[1,2,1,2,1,2].x.adapt([1,20,1,20,1,20], -1)
// [1,20,1,20,1,20]
```

## `adaptByCallback(otherArray = [], tester = null, adaptations = 1, lazy = false)`

> default tester: `(a, b) => a !== b`

```
[1,2,3,4,5,6].x.adaptByCallback(
  [1,2,30,40,50,60],
  (a, b) => (a % 2 === 0) && (b % 2 === 0)
)

// [1,2,3,40,5,6]
// adapt first other value if both target and source value are even
```

* in _lazy mode_, every other value is counted whether or not has been adapted:

```
// normal mode
[1,2,3,4,5,6].x.adaptByCallback(
  [1,2,30,40,50,60],
  x => x % 2 === 0,
  2
)
// [1,2,3,40,5,60]

// lazy mode
[1,2,3,4,5,6].x.adaptByCallback(
  [1,2,30,40,50,60],
  x => x % 2 === 0,
  2,
  true
)
// [1,2,3,40,5,6]
```

## `random(count = 1)`

```
[1,2,3,4,5,6].x.random()
// 4 (for example)

[1,2,3,4,5,6].x.random(1)
// 4 (for example)

[1,2,3,4,5,6].x.random(2)
// [5,2] (for example)

[1,2,3,4,5,6].x.random(4)
// [3,6,1,5] (for example)
```

## `shuffle()`

```
[1,2,3,4].x.shuffle()
// [4,2,3,1] (for example)
```

## `move(sourceIndex, count, targetIndex = 0)`

```
// move first 3 items to index 2
[1,2,3,4,5,6].x.move(0, 3, 2)
// [4,5,1,2,3,6]

// move last 2 items to index 0
[1,2,3,4,5,6].x.move(-2, 2)
// [5,6,1,2,3,4]

// move first item to the end
[1,2,3,4,5,6].x.move(0, 1, -1)
// [2,3,4,5,6,1]

// move last item to the beginning
[1,2,3,4,5,6].x.move(-1, 1)
// [6,1,2,3,4,5]

// move second to last item to the end (swap two last items)
[1,2,3,4,5,6].x.move(-2, 1, -1)
// [1,2,3,4,6,5]
```

## `insert(index, ...items)`

```
[1,2,3,4].x.insert(0, 10, 20)
// [10,20,1,2,3,4]

[1,2,3,4].x.insert(2, 10, 20)
// [1,2,10,20,3,4]

[1,2,3,4].x.insert(-1, 10, 20)
// [1,2,3,10,20,4]
```

## `overwrite(index, ...items)`

```
[1,2,3,4,5,6].x.overwrite(0, 7, 8)
// [7,8,3,4,5,6]

[1,2,3,4,5,6].x.overwrite(2, 7, 8)
// [1,2,7,8,5,6]

[1,2,3,4,5,6].x.overwrite(-1, 7, 8)
// [1,2,3,4,5,7,8]
```

## `override(index, ...items)`

```
[1,2,3,4,5,6].x.override(0, 7, 8)
// [7,8,3,4,5,6]

[1,2,3,4,5,6].x.override(2, 7, 8)
// [1,2,7,8,5,6]

[1,2,3,4,5,6].x.override(-1, 7, 8)
// [1,2,3,4,5,7]
```

### `overwrite()` vs. `override()`

```
[1,2,3,4].x.overwrite(2, 5, 6, 7, 8, 9)
// [1,2,5,6,7,8,9]

[1,2,3,4].x.override(2, 5, 6, 7, 8, 9)
// [1,2,5,6]
```

## `precede(appendix = [], fillWithUndefined = false)`

```
[1,2,3,4].x.precede(0)
// [0,1,0,2,0,3,0,4]

[1,2,3,4].x.precede([10,20,30,40])
// [10,1,20,2,30,3,40,4]

[1,2,3,4].x.precede(x => x * 2)
// [2,1,4,2,6,3,8,4]
```

```
[1,2].x.precede([10,20,30,40])
// [10,1,20,2]

[1,2,3,4].x.precede([10,20])
// [10,1,20,2,3,4]

[1,2,3,4].x.precede([10,20], true)
// [10,1,20,2,undefined,3,undefined,4]
```

## `follow(appendix = [], fillWithUndefined = false)`

```
[1,2,3,4].x.follow(0)
// [1,0,2,0,3,0,4,0]

[1,2,3,4].x.follow([10,20,30,40])
// [1,10,2,20,3,30,4,40]

[1,2,3,4].x.follow(x => x * 2)
// [1,2,2,4,3,6,4,8]
```

```
[1,2].x.follow([10,20,30,40])
// [1,10,2,20]

[1,2,3,4].x.follow([10,20])
// [1,10,2,20,3,4]

[1,2,3,4].x.follow([10,20], true)
// [1,10,2,20,3,undefined,4,undefined]
```

## `frozen()`

Disable addition, removal and update.

> alias: `readonly()` or `readOnly()`

```
const arr = [10,20];
arr.x.frozen();

arr.push(30)
// TypeError: Cannot add property 2, object is not extensible

arr.pop()
// TypeError: Cannot delete property '1' of [object Array]

arr[0] = 100

arr
// [10,20]
```

## `fixed()`

Disable addition and removal.

```
const arr = [10,20];
arr.x.fixed();

arr.push(30)
// TypeError: Cannot add property 2, object is not extensible

arr.pop()
// TypeError: Cannot delete property '1' of [object Array]

arr[0] = 100

arr
// [100,20]
```

## `dwarf()`

Disable addition.

```
const arr = [10,20];
arr.x.dwarf();

arr.push(30)
// TypeError: Cannot add property 2, object is not extensible

arr.pop()

arr[0] = 100

arr
// [100]
```

## `alterable()`

Return array with enabled addition, removal and update.

```
const frozen = [1,2,3,4].x.frozen();
const fixed = [1,2,3,4].x.fixed();
const dwarf = [1,2,3,4].x.dwarf();

const unfrozen = frozen.x.alterable();
const unfixed = fixed.x.alterable();
const undwarf = dwarf.x.alterable();

unfrozen.push(5);
unfixed.push(5);
undwarf.push(5);

unfrozen // [1,2,3,4,5]
unfixed // [1,2,3,4,5]
undwarf // [1,2,3,4,5]
```

## `clamped(min, max)`

```
const rgb = [].x.clamped(0, 255);

rgb.push(-120);
rgb.push(250);
rgb.push(340);

rgb
// [0, 250, 255]
```

```
const digits = [-20,-4,1,8,12,28].x.clamped(-9, 9);
// [-9,-4,1,8,9,9]

digits.push(-120);
digits.push(4);
digits.push(120);

digits
// [-9,-4,1,8,9,9,-9,4,9]
```

## `fold(coverSelector)`/`unfold(index)`

```
const users = [
  { name: 'John', city: 'LA' },
  { name: 'Mark', city: 'NY' }
].x.fold(u => u.name);

console.log(users[0]);
// John
console.log(users[1]);
// Mark

console.log(users.x.unfold(0));
// { name: 'John', city: 'LA' }
console.log(users.x.unfold(1));
// { name: 'Mark', city: 'NY' }
```

```
const users = [
  { name: 'John', city: 'LA' }
].x.fold(u => u.name);

users.push({ name: 'Mark', city: 'NY' });

console.log([...users]);
// John, Mark

console.log(
  users.x.unfold(0),
  users.x.unfold(1)
);
// { name: 'John', city: 'LA' }
// { name: 'Mark', city: 'NY' }
```

## `sparse(slots = 1)`

```
[1, 2, 3, 4].x.sparse()
// [1, empty, 2, empty, 3, empty, 4]

[1, 2, 3, 4].x.sparse(1)
// [1, empty, 2, empty, 3, empty, 4]

[1, 2, 3, 4].x.sparse(2)
// [1, empty, empty, 2, empty, empty, 3, empty, empty, 4]
```

## `thick()`

```
[1,2,,,,3,,,4].x.thick()
// [1,2,3,4]
```

## `union(otherSet = [])`

```
[1,2,3,4].x.union([5,6,7,8])
// [1,2,3,4,5,6,7,8]

[1,2,3,4].x.union([3,4,5,6])
// [1,2,3,4,5,6]
```

## `intersection(otherSet = [])`

```
[1,2,3,4].x.intersection([3,4,5,6])
// [3,4]
```

## `diff(otherSet = [])`

```
[1,2,3,4].x.diff([3,4,5,6])
// [1,2]
```

## `symDiff(otherSet = [])`

```
[1,2,3,4].x.symDiff([3,4,5,6])
// [1,2,5,6]
```

## `complement(otherSet = [])`

```
[1,2,3,4].x.complement([3,4,5,6])
// [5,6]
```

## `reduce(reducer, finalizer = null, init)`

```
[1,2,3,4].x.reduce(
  (acc, curr) => acc + curr,
  (sum, arr) => sum / arr.length
)
// 2.5 (average)
```

```
[1,4,2,3].x.reduce(
  ([currMax, itsIdx], curr, idx) => {
    return idx === 0 || curr > currMax ? [curr,idx] : [currMax,itsIdx];
  },
  ([currMax, itsIdx]) => itsIdx,
  []
)
// 1 (index of largest number)
```

## `scan(reducer, init = null)`

$scanArr_i = reduce(inputArr_{<0;i>}\color{#888}{, init}\color{#000})$

```
[1,2,3,4].x.scan((a, c) => a + c)
// [1,3,6,10]

// 1 -> 1
// 3 -> 1 + 2
// 6 -> 1 + 2 + 3 or 3 + 3
// 10 -> 1 + 2 + 3 + 4 or 6 + 4
```

```
['f', 'o', 'o'].x.scan((a, c) => a + c)
// ['f', 'fo', 'foo']

['b', 'a', 'r'].x.scan((a, c) => a + c, 'foo')
// ['foob', 'fooba', 'foobar']
```

## `reversed()`

Return reversed array keeping original array unchanged.

```
const arr = [1,2,3,4];
const rev = arr.x.reversed();

rev
// [4,3,2,1]

arr
// [1,2,3,4]
// original array unchanged
```

## `forEach(cb)`

Like `forEach()` but with `break`/`continue` feature.

> alias: `each()`

```
[1,2,3,4].x.forEach((item, idx, api, array) => {
  // api - break and continue

  if (x === 4) return api.break;
  console.log(item);
});

// 1 2 3
```

```
[1,2,3,4].x.forEach((item, idx, api) => {
  if (x % 2 !== 0) return api.continue;
  console.log(item);
});

// 2 4
```

```
[1,2,3,4,5,6].x.forEach((
  item,
  idx,
  { break: b, continue: c }
) => {
  if (item % 2 !== 0) return c;
  console.log(item);
  if (item === 4) return b;
});

// 2 4
```

## `spreadMap(mapper)`

```
[1,2,3,4].x.spreadMap(x => [x, x * x])
// [1,1,2,4,3,9,4,16]

[1,2,3,4].x.spreadMap(x => x * x)
// [1,4,9,16]
```

```
[1,2,3,4].x.spreadMap(x => [
  x,
  x % 2 === 0
])
// [1, false, 2, true, 3, false, 4, true]
```

## `filterMapped(mapper = null, filter = null)`

Filters items that would pass a test if they were mapped.

```
[1,2,3,4,5,6,7,8,9].x.filterMapped(
  x => Math.sqrt(x),
  x => x === parseInt(x)
)

// [1,4,9]
// numbers whose square root is integer
```

```
['cat', 'dog', 'lion', 'tiger'].x.filterMapped(
  str => str.length,
  len => len > 3
)

// ['lion', 'tiger']
```

## `replace(matcher = x => x, replacer = x => x)`

```
[1,2,1,2].x.replace(
  2,
  10
)
// [1,10,1,10]

[1,2,3,4].x.replace(
  [1,2,5,6],
  10
)
// [10,10,3,4]

[1,2,3,4].x.replace(
  x => x % 2 === 0,
  10
)
// [1,10,3,10]
```

```
let item = 2;
[1,2,1,2].x.replace(
  item,
  x => x * 10
)
// [1,20,1,20]

[1,2,3,4].x.replace(
  [3,4,5,6],
  x => x * 10
)
// [1,2,30,40]

[1,2,3,4].x.replace(
  x => x % 2 === 0,
  x => x * 10
)
// [1,20,3,40]
```

## `findIndexes(matcher = null)`

```
[1,2,3,4,5,6].x.findIndexes(x => x % 2 === 0)
// [1,3,5]

[1,2,3,4,5,6].x.findIndexes([2,4])
// [1,3]

[1,2,3,1,2,3].x.findIndexes(3)
// [2,5]

[1,2,3,1,2,3].x.findIndexes()
// []
```

## `includes(matcher = null)`

```
[1,2,3,4].x.includes(4)
// true

[1,2,3,4].x.includes([4,8])
// true

[1,2,3,4].x.includes(x => x % 2 === 0)
// true

[1,2,3,4].x.includes(x => x >= 100)
// false

[1,2,3,4].x.includes()
// false
```

## `mapReduce(chunkSize = 2, reducer = null, init = null, rejectStickingTail = false)`

> default reducer: `(a, c) => a + c`

```
[10,20,30,40].x.mapReduce(
  2, (a, b) => a + b
)
// [30,70]
```

```
['<', 'div', '>', '<', 'span', '>'].x.mapReduce(
  3, (a, b) => a + b
)
// ['<div>', '<span>']
```

* `init` parameter can be a literal value or a callback:

```
[1,2,3,4,5,6].x.mapReduce(
  2,
  (a, b) => a + b,
  (chunk, chunkNumber) => chunkNumber
)
// [4,9,14]

// [1+1+2, 2+3+4, 3+5+6]
// [1+3, 2+7, 3+11]
```

```
// average of every triplets
// sticking tail rejected

[1,2,3,4,5,6,7,8].x.mapReduce(
  3,
  (a, b, idx, chunk) => {
    let res = a + b;
    if (idx === chunk.length - 1) res = res / chunk.length;
    return res;
  },
  null,
  true
)
// [2,5]

// [(1+2+3)/3, (4+5+6)/3]
```

## `pop(n = 1)`

```
const arr = [1,2,3,4,5,6];

arr.x.pop(2);
// returns removed items: [5,6]

arr
// [1,2,3,4]
```

## `shift(n = 1)`

```
const arr = [1,2,3,4,5,6];

arr.x.shift(2);
// returns removed items: [1,2]

arr
// [3,4,5,6]
```

## `frame(size, rejectIncomplete = true)`

```
[1,2,3,4,5,6].x.frame(3)
// [ [1,2,3],[2,3,4],[3,4,5],[4,5,6] ]

[1,2,3,4,5,6].x.frame(3, false)
// [ [1,2,3],[2,3,4],[3,4,5],[4,5,6], [5,6], [6] ]
```

## `audit(tester, frameSize = 2)`

* check if items are sorted in ascending order:

```
[1,2,3,4].x.audit(
  (l, r) => l <= r
)
// true

[1,4,2,3].x.audit(
  (l, r) => l <= r
)
// false
```

* check if every third item is sum of two preceding items:

```
[1,2,3,5,8].x.audit(
  (l, r, sum) => l + r === sum,
  3
)
// true
```

* check if item is a string that starts with preceding item:

```
['foo', 'foo bar', 'foo bar baz'].x.audit(
  (leftString, rightString) => rightString.indexOf(leftString) === 0
)
// true
```

## `auditChunks(tester, chunkSize = 2, rejectSticking = true)`

* check if every second word is reversed variant of preceding one:

```
['foo', 'oof', 'bar', 'rab'].x.auditChunks(
  (word, reversed) => word === [...reversed].reverse().join('')
)
// true
```

* check if every three items fit shape `[A, B, A + B]`:

```
[1,2,3,4,5,9,14,18].x.auditChunk(
  (l, r, sum) => l + r === sum,
  3
)
// true

// 1 + 2 = 3 -> true
// 4 + 5 = 9 -> true
// -> true


// 14 and 18 are ignored as last chunk is "sticking"
// i.e., chunk length (2) is less than required chunk size (3)

// to include sticking chunk, use false as third parameter:


[1,2,3,4,5,9,14,18].x.auditChunk(
  (l, r, sum) => l + r === sum,
  3
)
// false

// 1 + 2 = 3 -> true
// 4 + 5 = 9 -> true
// 14 + 18 = undefined -> false
// -> false
```

## `audit()` vs. `auditChunks()`

| Call | Comparisons performed |
|--|--|
| `[1,2,3,4,5,6].x.audit(...)` | `1,2`, `2,3`, `3,4`, `4,5` and `5,6` |
| `[1,2,3,4,5,6].x.auditChunks(...)` | `1,2`, `3,4` and `5,6` |

* `audit()` takes all possible chunks:

```
[10,20,14,18].x.audit(
  (l, r) => l <= r
)
// false

// 10 <= 20 -> true
// 20 <= 14 -> false
// -> false
```

* `auditChunks()` takes only adjacent chunks:

```
[10,20,14,18].x.auditChunks(
  (l, r) => l <= r
)
// true

// 10 <= 20 -> true
// 14 <= 18 -> true
// -> true
```

## `forEveryChunk(chunkSize, cb)`

```
[1,2,3,4].x.forEveryChunk(2, (chunk, chunkNumber, arr) => {
  console.log(chunkNumber, chunk);
});

// 1, [1,2]
// 2, [3,4]
```

```
[1,2,3,4].x.forEveryChunk(3, (chunk, chunkNumber, arr) => {
  console.log(chunkNumber, chunk);
});

// 1, [1,2,3]
// 2, [4]
```

## `forEveryN(blockSize, cb, fullBlocksOnly = false)`

```
[1,2,3,4,5].x.forEveryN(3, (block, idx) => {
  console.log(block);
});

// [1,2,3]
// [2,3,4]
// [3,4,5]
// [4,5]
// [5]
```

```
[1,2,3,4,5].x.forEveryN(3, (block, idx) => {
  console.log(block);
}, true);

// [1,2,3]
// [2,3,4]
// [3,4,5]
```

## `minPairDiff(comparer = null)`

> default comparer: `(l, r) => Math.abs(l - r)`

```
[20,10,40].x.minPairDiff()
// 10

// [ Math.abs(20 - 10), Math.abs(10 - 40) ]
// [ 10, 30 ]
// min -> 10
```

* with custom comparer:

```
[20,10,40].x.minPairDiff(
  (l, r) => l - r
)
// -30

// [ 20 - 10, 10 - 40 ]
// [ 10, -30 ]
// min -> -30
```

## `maxPairDiff(comparer = null)`

> default comparer: `(l, r) => Math.abs(l - r)`

```
[20,10,40].x.maxPairDiff()
// 30

// [ Math.abs(20 - 10), Math.abs(10 - 40) ]
// [ 10, 30 ]
// max -> 30
```

* with custom comparer:

```
[20,10,40].x.maxPairDiff(
  (l, r) => l - r
)
// 10

// [ 20 - 10, 10 - 40 ]
// [ 10, -30 ]
// max -> 10
```

## `minDiff(comparer = null)`

> default comparer: `(l, r) => Math.abs(l - r)`

```
[20,80,40,10].x.minDiff()
// 10

// [
//   |20-80|, |20-40|, |20-10|,
//   |80-20|, |80-40|, |80-10|,
//   |40-20|, |40-80|, |40-10|,
//   |10-20|, |10-80|, |10-40|
// ]

// [
//   60, 20, 10,
//   60, 40, 70,
//   20, 40, 30,
//   10, 70, 30
// ]

// min -> 10
```

* with custom comparer:

```
[20,80,40,10].x.minDiff(
  (l, r) => l / r
)
// 0.125

// [
//   20/80, 20/40, 20/10,
//   80/20, 80/40, 80/10,
//   40/20, 40/80, 40/10,
//   10/20, 10/80, 10/40
// ]

// [
//   0.25, 0.5, 2,
//   4, 2, 8,
//   2, 0.5, 4,
//   0.5, 0.125, 0.25
// ]

// min -> 0.125
```

## `maxDiff(comparer = null)`

> default comparer: `(l, r) => Math.abs(l - r)`

```
[20,80,40,10].x.maxDiff()
// 70

// [
//   |20-80|, |20-40|, |20-10|,
//   |80-20|, |80-40|, |80-10|,
//   |40-20|, |40-80|, |40-10|,
//   |10-20|, |10-80|, |10-40|
// ]

// [
//   60, 20, 10,
//   60, 40, 70,
//   20, 40, 30,
//   10, 70, 30
// ]

// max -> 70
```

* with custom comparer:

```
[20,80,40,10].x.maxDiff(
  (l, r) => l / r
)
// 8

// [
//   20/80, 20/40, 20/10,
//   80/20, 80/40, 80/10,
//   40/20, 40/80, 40/10,
//   10/20, 10/80, 10/40
// ]

// [
//   0.25, 0.5, 2,
//   4, 2, 8,
//   2, 0.5, 4,
//   0.5, 0.125, 0.25
// ]

// max -> 8
```

## `minDiffAhead(comparer = null)`

> default comparer: `(l, r) => Math.abs(l - r)`

```
[10 80 200 20].x.minDiffAhead()
// 10

// [
//   |10-80|, |10-200|, |10-20|,
//   |80-200|, |80-20|,
//   |200-20|
// ]
// 
// [
//  70, 190, 10,
//  120, 60,
//  180
// ]
// 
// min -> 10
```

* with custom comparer:

```
[10 80 200 20].x.minDiffAhead(
  (l, r) => l - r
)
// -190

// [
//   10-80, 10-200, 10-20,
//   80-200, 80-20,
//   200-20
// ]
// 
// [
//  -70, -190, -10,
//  -120, 60,
//  180
// ]
// 
// min -> -190
```

## `maxDiffAhead(comparer = null)`

> default comparer: `(l, r) => Math.abs(l - r)`

```
[10 80 200 20].x.maxDiffAhead()
// 190

// [
//   |10-80|, |10-200|, |10-20|,
//   |80-200|, |80-20|,
//   |200-20|
// ]
// 
// [
//  70, 190, 10,
//  120, 60,
//  180
// ]
// 
// max -> 190
```

* with custom comparer:

```
[10 80 200 20].x.maxDiffAhead(
  (l, r) => l - r
)
// 180

// [
//   10-80, 10-200, 10-20,
//   80-200, 80-20,
//   200-20
// ]
// 
// [
//  -70, -190, -10,
//  -120, 60,
//  180
// ]
// 
// max -> 180
```

## `maxPairDiff()` vs. `maxDiff()` vs. `maxDiffAhead()`

* `maxPairDiff()` compares every sibling
* `maxDiff()` compares every item with all other items
* `maxDiffAhead()` compares every item with all other items that follow it

For `[1,2,3,4]`:

| Method | Comparisons performed |
|--|--|
| `maxPairDiff()` | 1-2, 2-3 and 3-4 |
| `maxDiff()` | 1-2, 1-3, 1-4, 2-1, 2-3, 2-4, 3-1, 3-2, 3-4, 4-1, 4-2 and 4-3 |
| `maxDiffAhead()` | 1-2, 1-3, 1-4, 2-3, 2-4 and 3-4 |