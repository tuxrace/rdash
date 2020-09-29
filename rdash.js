const avg = (arr) => {
  return arr.reduce((total, amount, idx, instanceArr) => {
    return total + amount / arr.length
  }, 0)
}

const contains = (arr, item) => {
  return (arr.indexOf(item) >= 0)
}

const cumSum = arr => {
  return arr.reduce((a, c, i, instanceArr) => {
    if (a.length > 0) { a.push(c + a[a.length - 1]) } else { a.push(c) }
    return a
  }, [])
}

const duplicates = arr => arr.reduce((acc, curVal, curIdx, srcArr) => (
  (acc.indexOf(curVal) === -1 && srcArr.indexOf(curVal) !== curIdx) ? [...acc, curVal] : [...acc]
), [])

const factorial = n => {
  if (n === 1) {
    return n
  } else {
    return n * factorial(n - 1)
  }
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
  return [...new Set(arr)]
}

const zip = (arr1, arr2) => {
  let result = []
  let arr1Len = arr1.length
  let arr2Len = arr2.length
  let continueIndex = 0

  for (var i = 0; i < arr1Len; i++) {
    result.push(arr1[i])
    if (i < arr2Len) {
      result.push(arr2[i])
      continueIndex = i + 1
    }
  }

  if (arr2Len > arr1Len) {
    for (var j = 0; j + continueIndex < arr2Len; j++) {
      result.push(arr2[continueIndex + j])
    }
  }

  return result
}

// First version of String to JSON converter
const csvToJson = (str) => {
  let result = str.split(',').reduce((a, c) => {
    const row = c.split(':')
    a[row[0]] = row[1].trim()
    return a
  }, {})
  return JSON.stringify(result)
}

const objectToQueryString = obj => {
  return Object.keys(obj).map(x => x + '=' + obj[x]).join('&').toString()
}

const isPalindrome = str => {
  return str === str.split('').reverse().join('')
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
  zip,
  csvToJson,
  objectToQueryString,
  avg,
  isPalindrome
}
