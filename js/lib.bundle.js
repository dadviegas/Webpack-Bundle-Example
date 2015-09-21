/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _es6PointEs6Js = __webpack_require__(2);
	
	var _es6PointEs6Js2 = _interopRequireDefault(_es6PointEs6Js);
	
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	
	var point1 = new _es6PointEs6Js2['default'](2, 3);
	var point = new _es6PointEs6Js2['default'](12, 23);
	
	var lib3 = {
	  text: "i am lib file"
	};
	
	console.log(lib3.text, point.toString(), point1.toString());

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var Point = (function () {
	    function Point(x, y) {
	        _classCallCheck(this, Point);
	
	        this.x = x;
	        this.y = y;
	    }
	
	    _createClass(Point, [{
	        key: 'toString',
	        value: function toString() {
	            return '(' + this.x + ',' + this.y + ')';
	        }
	    }]);
	
	    return Point;
	})();
	
	exports['default'] = Point;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	var object3 = {
	  text: "i am file 3"
	}
	
	
	console.log(object3.text);

/***/ },
/* 4 */
/***/ function(module, exports) {

	var object1 = {
	  text: "i am file 1"
	}
	
	
	console.log(object1.text);

/***/ },
/* 5 */
/***/ function(module, exports) {

	var object2 = {
	  text: "i am file 2, test "
	}
	
	
	console.log(object2.text);

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2YzMjY3ZWI0NzRjMDc3MTNhN2M/NmJjYSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbGliL2xpYi5lczYuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2xpYi9lczYvcG9pbnQuZXM2LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9saWIvZmlsZTMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2xpYi9maWxlMS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbGliL2ZpbGUyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7OzswQ0NsQ2tCLENBQW9COzs7O0FBSnRDLG9CQUFPLENBQUMsQ0FBWSxDQUFDLENBQUM7QUFDdEIsb0JBQU8sQ0FBQyxDQUFZLENBQUMsQ0FBQztBQUN0QixvQkFBTyxDQUFDLENBQVksQ0FBQyxDQUFDOztBQUl0QixLQUFJLE1BQU0sR0FBRywrQkFBVSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7QUFDNUIsS0FBSSxLQUFLLEdBQUcsK0JBQVUsRUFBRSxFQUFDLEVBQUUsQ0FBQyxDQUFDOztBQUU3QixLQUFJLElBQUksR0FBRztBQUNULE9BQUksRUFBRSxlQUFlO0VBQ3RCOztBQUdELFFBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0tDZHJELEtBQUs7QUFDSSxjQURULEtBQUssQ0FDSyxDQUFDLEVBQUUsQ0FBQyxFQUFFOytCQURoQixLQUFLOztBQUVILGFBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ1gsYUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7TUFDZDs7a0JBSkMsS0FBSzs7Z0JBS0Msb0JBQUc7QUFDUCxvQkFBTyxHQUFHLEdBQUMsSUFBSSxDQUFDLENBQUMsR0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLENBQUMsR0FBQyxHQUFHLENBQUM7VUFDcEM7OztZQVBDLEtBQUs7OztzQkFVSSxLQUFLOzs7Ozs7O0FDVnBCO0FBQ0E7QUFDQTs7O0FBR0EsMkI7Ozs7OztBQ0xBO0FBQ0E7QUFDQTs7O0FBR0EsMkI7Ozs7OztBQ0xBO0FBQ0E7QUFDQTs7O0FBR0EsMkIiLCJmaWxlIjoibGliLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgM2YzMjY3ZWI0NzRjMDc3MTNhN2NcbiAqKi8iLCJyZXF1aXJlKCcuL2ZpbGUzLmpzJyk7XG5yZXF1aXJlKCcuL2ZpbGUxLmpzJyk7XG5yZXF1aXJlKCcuL2ZpbGUyLmpzJyk7XG5cbmltcG9ydCBQb2ludCBmcm9tICcuL2VzNi9wb2ludC5lczYuanMnO1xuXG52YXIgcG9pbnQxID0gbmV3IFBvaW50KDIsMyk7XG52YXIgcG9pbnQgPSBuZXcgUG9pbnQoMTIsMjMpO1xuXG52YXIgbGliMyA9IHtcbiAgdGV4dDogXCJpIGFtIGxpYiBmaWxlXCJcbn1cblxuXG5jb25zb2xlLmxvZyhsaWIzLnRleHQsIHBvaW50LnRvU3RyaW5nKCksIHBvaW50MS50b1N0cmluZygpKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYXNzZXRzL2xpYi9saWIuZXM2LmpzXG4gKiovIiwiY2xhc3MgUG9pbnQge1xuICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiAnKCcrdGhpcy54KycsJyt0aGlzLnkrJyknO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9pbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2Fzc2V0cy9saWIvZXM2L3BvaW50LmVzNi5qc1xuICoqLyIsInZhciBvYmplY3QzID0ge1xuICB0ZXh0OiBcImkgYW0gZmlsZSAzXCJcbn1cblxuXG5jb25zb2xlLmxvZyhvYmplY3QzLnRleHQpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hc3NldHMvbGliL2ZpbGUzLmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwidmFyIG9iamVjdDEgPSB7XG4gIHRleHQ6IFwiaSBhbSBmaWxlIDFcIlxufVxuXG5cbmNvbnNvbGUubG9nKG9iamVjdDEudGV4dCk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2Fzc2V0cy9saWIvZmlsZTEuanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJ2YXIgb2JqZWN0MiA9IHtcbiAgdGV4dDogXCJpIGFtIGZpbGUgMiwgdGVzdCBcIlxufVxuXG5cbmNvbnNvbGUubG9nKG9iamVjdDIudGV4dCk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2Fzc2V0cy9saWIvZmlsZTIuanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9