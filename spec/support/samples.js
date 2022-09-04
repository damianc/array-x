module.exports.minMax = {
  empty: [],
  num: {
    oneItem: [20],
    twoItems: [20, 10],
    moreItems: [20, 10, 40, 10]
  },
  str: {
    oneItem: ['xx'],
    twoItems: ['xx', 'x'],
    moreItems: ['xx', 'x', 'xxx']
  }
};

module.exports.location = {
  empty: [],
  num: {
    oneItem: {
      value: [20],
      pos: {
        primitive: {
          input: 20,
          output: [0, 20]
        },
        matcher: {
          input: x => x % 2 === 0,
          output: [0, 20]
        }
      },
      neg: {
        primitive: {
          input: 40,
          output: null
        },
        matcher: {
          input: x => x > 1000,
          output: null
        }
      }
    },
    twoItems: {
      value: [20, 10],
      pos: {
        primitive: {
          input: 10,
          output: [1, 10]
        },
        matcher: {
          input: x => x < 20,
          output: [1, 10]
        }
      },
      neg: {
        primitive: {
          input: 40,
          output: null
        },
        matcher: {
          input: x => x > 1000,
          output: null
        }
      }
    },
    moreItems: {
      value: [20, 10, 40, 10],
      pos: {
        primitive: {
          input: 40,
          output: [2, 40]
        },
        matcher: {
          input: x => x >= 40,
          output: [2, 40]
        }
      },
      neg: {
        primitive: {
          input: 50,
          output: null
        },
        matcher: {
          input: x => x > 1000,
          output: null
        }
      }
    }
  },
  str: {
    oneItem: {
      value: ['xx'],
      pos: {
        primitive: {
          input: 'xx',
          output: [0, 'xx']
        },
        matcher: {
          input: str => str.length >= 2,
          output: [0, 'xx']
        }
      },
      neg: {
        primitive: {
          input: 'xxxx',
          output: null
        },
        matcher: {
          input: str => str.length > 10,
          output: null
        }
      }
    },
    twoItems: {
      value: ['xx', 'x'],
      pos: {
        primitive: {
          input: 'x',
          output: [1, 'x']
        },
        matcher: {
          input: str => str.length === 1,
          output: [1, 'x']
        }
      },
      neg: {
        primitive: {
          input: 'xxxx',
          output: null
        },
        matcher: {
          input: str => str.length > 10,
          output: null
        }
      }
    },
    moreItems: {
      value: ['xx', 'x', 'xxx'],
      pos: {
        primitive: {
          input: 'xxx',
          output: [2, 'xxx']
        },
        matcher: {
          input: str => str.length >= 3,
          output: [2, 'xxx']
        }
      },
      neg: {
        primitive: {
          input: 'xxxx',
          output: null
        },
        matcher: {
          input: str => str.length > 10,
          output: null
        }
      }
    }
  }
};