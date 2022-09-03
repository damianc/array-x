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