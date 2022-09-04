# `array-x`

Collecting:
- [`collectUntil()`](#collectUntilitemOrMatcher-inclusive--true)
- [`collectUntilReduce()`](#collectUntilReduceaccTester-reducer-reducerInit-inclusive--true)
- [`skipUntil()`](#skipUntilitemOrMatcher-inclusive--true)

Searching:
- [`localize()`](#localizeitemOrMatcher)
- [`localizeAll()`](#localizeAllitemOrMatcher)
- [`localizeMin()`](#localizeMinmapper)
- [`localizeMax()`](#localizeMaxmapper)

Examining:
- [`count()`](#countitemOrMatcher)
- [`avg()`](#avgmapper)

Min and Max:
- [`min()`](#minmapper)
- [`max()`](#maxmapper)
- [`findMin()`](#findMinmapper)
- [`findMax()`](#findMaxmapper)
- [`findMinIndex()`](#findMinIndexmapper)
- [`findMaxIndex()`](#findMaxIndexmapper)

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

## `avg([mapper])`

```
[1, 2, 3, 4].x.avg()
// 2.5

['x', 'xx', 'xxx'].x.avg(str => str.length)
// 2

[].x.avg()
// null
```