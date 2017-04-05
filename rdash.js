export const uniq = arr => {
  const hashMap = []
  arr.forEach( x => {
    if (!hashMap[x])
      hashMap[x] = x
  })
  return hashMap.splice(1,hashMap.length)
}

export const sort = arr => {
  const isString = arr.every(x => (typeof x) == "string")
  if (isString)
    return arr.sort()
  else
     return arr.sort((a,b) => a - b)
}