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
- [`iterator()`](#iterator)
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
- [`chunk()`](#chunksize)
- [`chunkByCallback()`](#chunkByCallbackcb-matchedItemOpening--true)
- [`zip()`](#zipotherArrays)
- [`zipAll()`](#zipAllotherArrays)
- [`unzip()`](#unzip)
- [`unzipAll()`](#unzipAll)
- [`split()`](#splitindex)

Altering:
- [`move()`](#movesourceIndex-count-targetIndex--0)
- [`insert()`](#insertindex-items)
- [`overwrite()`](#overwriteindex-items)
- [`override()`](#overrideindex-items)
- [`frozen()`](#frozen)
- [`fixed()`](#fixed)
- [`dwarf()`](#dwarf)
- [`alterable()`](#alterable)
- [`clamped()`](#clampedmin-max)
- [`folded()`](#foldedcoverSelector)

Redefined built-ins:
- [`reverse()`](#reverse)
- [`forEach()`](#forEachcb)

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

## `chunk(size)`

```
[1,2,3,4,5,6].x.chunk(2)
// [ [1,2], [3,4], [5,6] ]

[1,2,3,4,5].x.chunk(2)
// [ [1,2], [3,4], [5] ]

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

## `split([index])`

```
[1,2,3,4].x.split()
// [ [1, 2], [3, 4] ]

[1,2,3,4,5].x.split()
// [ [1,2], [3,4,5] ]

[1,2,3,4,5,6].x.split(2)
// [ [1,2], [3,4,5,6] ]

[1,2,3,4,5,6].x.split(-2)
// [ [1,2,3,4], [5,6] ]
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

## `folded(coverSelector)`

```
const users = [
  { name: 'John', city: 'LA' },
  { name: 'Mark', city: 'NY' }
].x.folded(u => u.name);

console.log(users[0]);
// John
console.log(users[1]);
// Mark

console.log(users.unfold(0));
// { name: 'John', city: 'LA' }
console.log(users.unfold(1));
// { name: 'Mark', city: 'NY' }
```

```
const users = [
  { name: 'John', city: 'LA' }
].x.folded(u => u.name);

users.push({ name: 'Mark', city: 'NY' });

console.log([...users]);
// John, Mark

console.log(
  users.unfold(0),
  users.unfold(1)
);
// { name: 'John', city: 'LA' }
// { name: 'Mark', city: 'NY' }
```

## `reverse()`

Return reverse array keeping original array unchanged.

```
const arr = [1,2,3,4];
const rev = arr.x.reverse();

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