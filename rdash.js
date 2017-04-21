const contains = (arr, item) => {
  return (arr.indexOf(item) >= 0)
}

const cumSum = arr => {
  return arr.reduce((a, c, i, instanceArr) => {
    if (a.length > 0) { a.push(c + a[a.length - 1]) } else { a.push(c) }
    return a
  }, [])
}

const duplicates = arr => {
  return arr.filter((x, i, instanceArr) => {
    return instanceArr.filter(y => x === y).length > 1
  })
}

const factorial = n => {
  if (n === 1) { return n } else { return n * factorial(n - 1) }
}

const unionBy = (arr, item) => {
  return arr.reduce((a, c, i, instanceArr) => {
    if (!a.some(x => x[item] === c[item])) {
      a.push(c)
    }
    return a
  }, [])
}

const unionBySumAt = (arr, byKey, sumAt) => {
  return arr.reduce((a, c) => {
    if (!a.some(x => x[byKey] === c[byKey])) {
      a.push(c)
    } else {
      const index = a.findIndex(x => x[byKey] === c[byKey])
      const latest = a[index]
      a[index][sumAt] = c[sumAt] + latest[sumAt]
    }
    return a
  }, [])
}

const isPrime = (n, acc = 2) => {
  if (n === acc || n === 1) { return true }
  if (n % acc !== 0) { return isPrime(n, acc + 1) } else { return false }
}

const sort = arr => {
  const isString = arr.every(x => (typeof x) === 'string')
  if (isString) { return arr.sort() } else { return arr.sort((a, b) => a - b) }
}

const uniq = arr => {
  const hashMap = []
  arr.forEach(x => {
    if (!hashMap.some(y => y === x)) { hashMap.push(x) }
  })
  return hashMap
}

const zip = (arr1, arr2) => {
  let result = new Array()
    let arr1_len = arr1.length
    let arr2_len = arr2.length
    let continue_index = 0

    for (var i = 0; i < arr1_len; i++) {
      result.push(arr1[i])
        if (i < arr2_len) {
          result.push(arr2[i])
            continue_index = i + 1
        }
    }

  if (arr2_len > arr1_len) {
      for (var i = 0; i + continue_index < arr2_len; i++) {
          result.push(arr2[continue_index + i])
        }
    }

  return result
}

module.exports = {
  contains,
  cumSum,
  duplicates,
  factorial,
  isPrime,
  unionBy,
  unionBySumAt,
  uniq,
  sort,
  zip
}
