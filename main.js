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

	const { sort } = __webpack_require__(1)

	var result = sort(['abz','abe','abc'])

	document.body.innerHTML = result

/***/ },
/* 1 */
/***/ function(module, exports) {

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

	module.exports = {
	  uniq,
	  sort
	}

/***/ }
/******/ ]);