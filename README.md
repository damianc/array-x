# `array-x`

## `min([mapper])`

```
[5, 6, 7, 8].x.min()
// 5

['xxxx', 'xx', 'xxx'].x.min(str => str.length)
// 2
```

## `findMin([mapper])`

```
[5, 6, 7, 8].x.findMin()
// 5

['xxxx', 'xx', 'xxx'].x.findMin(str => str.length)
// 'xx'
```

## `findMinIndex([mapper])`

```
[5, 6, 7, 8].x.findMinIndex()
// 0

['xxxx', 'xx', 'xxx'].x.findMinIndex(str => str.length)
// 1
```

## `localizeMin([mapper])`

```
[5, 6, 7, 8].x.localizeMin()
// [0, 5]

['xxxx', 'xx', 'xxx'].x.localizeMin(str => str.length)
// [1, 'xx']
```

## `max([mapper])`

```
[5, 6, 7, 8].x.max()
// 8

['xxxx', 'xx', 'xxx'].x.max(str => str.length)
// 4
```

## `findMax([mapper])`

```
[5, 6, 7, 8].x.findMax()
// 8

['xxxx', 'xx', 'xxx'].x.findMax(str => str.length)
// 'xxxx'
```

## `findMaxIndex([mapper])`

```
[5, 6, 7, 8].x.findMaxIndex()
// 3

['xxxx', 'xx', 'xxx'].x.findMaxIndex(str => str.length)
// 0
```

## `localizeMax([mapper])`

```
[5, 6, 7, 8].x.localizeMax()
// [3, 8]

['xxxx', 'xx', 'xxx'].x.localizeMax(str => str.length)
// [0, 'xxxx']
```

## `avg([mapper])`

```
[1, 2, 3, 4].x.avg()
// 2.5

['x', 'xx', 'xxx'].x.avg(str => str.length)
// 2
```