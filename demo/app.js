/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

const contains = (arr, item) => {
  return (arr.indexOf(item)>=0) ? true : false
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

const factorial = n => {
  if (n === 1)
    return n
  else
    return n * factorial(n - 1)
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
  if (n === acc || n === 1)
    return true
  if (n % acc !== 0)
    return isPrime(n, acc + 1)
  else
    return false
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
  duplicates,
  factorial,
  isPrime,
  unionBy,
  unionBySumAt,
  uniq,
  sort
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const { sort, duplicates, contains, uniq, unionBy, cumSum, 
  unionBySumAt, factorial } = __webpack_require__(0)

var items = [
  {key:'key1', value : 10},
  {key:'key2', value : 20},
  {key:'key2', value : 30},
  {key:'key1', value : 30},
  {key:'key3', value : 10}
]

var result = unionBySumAt(items,'key','value')

console.log(result, factorial(4))

/***/ })
/******/ ]);