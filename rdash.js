const uniq = arr => {
  const hashMap = []
  arr.forEach( x => {
    if (!hashMap[x])
      hashMap[x] = x
  })
  return hashMap.splice(1,hashMap.length)
}

const sort = arr => {
  const isString = arr.every(x => (typeof x) == "string")
  if (isString)
    return arr.sort()
  else
     return arr.sort((a,b) => a - b)
}

const duplicates = arr => {
  return arr.filter((x,i,instanceArr) => {
    return instanceArr.filter(y => x === y).length > 1
  })
}

module.exports = {
  uniq,
  sort,
  duplicates
}