const contains = (arr, item) => {
  return arr.some(x => x === item)
}

const duplicates = arr => {
  return arr.filter((x, i, instanceArr) => {
    return instanceArr.filter(y => x === y).length > 1
  })
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
  uniq,
  sort,
  duplicates
}
