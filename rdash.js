const contains = (arr, item) => {
  return arr.some(x => x === item)
}

const cumSum = arr => {
  return arr.reduce((a, c, i, instanceArr) => {
    if (a.length > 0)
      a.push(c + a[a.length - 1])
    else
      a.push(c)
    return a
  }, [])
}

const duplicates = arr => {
  return arr.filter((x, i, instanceArr) => {
    return instanceArr.filter(y => x === y).length > 1
  })
}

const groupBy = (arr, item) => {
  return arr.reduce((a, c, i, instanceArr) => {
    if (!a.some(x => x[item] === c[item])) {
      a.push(c)
    }
    return a
  }, [])
}

const groupBySumAt = (arr, byKey, sumAt) => {
  return arr.reduce((a, c) => {
    if (!a.some(x => x[byKey] === c[byKey])) {
      a.push(c)
    } else {
      index = a.findIndex(x => x[byKey] === c[byKey])
      latest = a[index]
      a[index][sumAt] = c[sumAt] + latest[sumAt]
    }
    return a
  }, [])
}

const sort = arr => {
  const isString = arr.every(x => (typeof x) == "string")
  if (isString)
    return arr.sort()
  else
    return arr.sort((a, b) => a - b)
}

const uniq = arr => {
  const hashMap = []
  arr.forEach(x => {
    if (!hashMap.some(y => y === x))
      hashMap.push(x)
  })
  return hashMap
}

module.exports = {
  contains,
  cumSum,
  groupBy,
  groupBySumAt,
  uniq,
  sort,
  duplicates
}
