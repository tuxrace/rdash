/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const { sort, duplicates, contains, uniq } = __webpack_require__(1)

	var result = duplicates([1,1,2,2,3,4,5])

	console.log(result)

/***/ },
/* 1 */
/***/ function(module, exports) {

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


/***/ }
/******/ ]);