function groupBy(array, property) {
  if (property !== 'size') {
    return array.reduce(function (acc, obj) {
      let key = obj[property]
      if (!acc[key]) {
        // the first time we create the array with each property
        acc[key] = []
      }
      acc[key].push(obj)
      return acc
    }, {})
  } else if (property === 'size') {
    // group by scale range
    const s = 1000
    const m = 10_000
    const l = 100_000
    const xl = 1_000_000

    return array.reduce(function (acc, obj) {
      let key = obj[property]

      if (!acc[s || m || l || xl]) {
        // the first time we create the array with each property
        acc[s] = []
        acc[m] = []
        acc[l] = []
        acc[xl] = []
      }

      if (key <= m) {
        acc[s].push(obj)
      } else if (key <= l) {
        acc[m].push(obj)
      } else if (key <= xl) {
        acc[l].push(obj)
      } else {
        acc[xl].push(obj)
      }
      return acc
    }, {})
  }
}

export default groupBy
