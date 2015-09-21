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
	
	var point = new _es6PointEs6Js2['default'](2, 3);
	
	var lib3 = {
	  text: "i am lib file"
	};
	
	console.log(lib3.text, point);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTFlYTJkZWRmNzY2OWVmZjJjMjg/OWNkNyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbGliL2xpYi5lczYuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2xpYi9lczYvcG9pbnQuZXM2LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9saWIvZmlsZTMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2xpYi9maWxlMS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbGliL2ZpbGUyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7OzswQ0NsQ2tCLENBQW9COzs7O0FBSnRDLG9CQUFPLENBQUMsQ0FBWSxDQUFDLENBQUM7QUFDdEIsb0JBQU8sQ0FBQyxDQUFZLENBQUMsQ0FBQztBQUN0QixvQkFBTyxDQUFDLENBQVksQ0FBQyxDQUFDOztBQUl0QixLQUFJLEtBQUssR0FBRywrQkFBVSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRTNCLEtBQUksSUFBSSxHQUFHO0FBQ1QsT0FBSSxFQUFFLGVBQWU7RUFDdEI7O0FBR0QsUUFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDOzs7Ozs7Ozs7Ozs7Ozs7OztLQ2J2QixLQUFLO0FBQ0ksY0FEVCxLQUFLLENBQ0ssQ0FBQyxFQUFFLENBQUMsRUFBRTsrQkFEaEIsS0FBSzs7QUFFSCxhQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNYLGFBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO01BQ2Q7O2tCQUpDLEtBQUs7O2dCQUtDLG9CQUFHO0FBQ1Asb0JBQU8sR0FBRyxHQUFDLElBQUksQ0FBQyxDQUFDLEdBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxDQUFDLEdBQUMsR0FBRyxDQUFDO1VBQ3BDOzs7WUFQQyxLQUFLOzs7c0JBU0ksS0FBSzs7Ozs7OztBQ1RwQjtBQUNBO0FBQ0E7OztBQUdBLDJCOzs7Ozs7QUNMQTtBQUNBO0FBQ0E7OztBQUdBLDJCOzs7Ozs7QUNMQTtBQUNBO0FBQ0E7OztBQUdBLDJCIiwiZmlsZSI6ImxpYi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDUxZWEyZGVkZjc2NjllZmYyYzI4XG4gKiovIiwicmVxdWlyZSgnLi9maWxlMy5qcycpO1xucmVxdWlyZSgnLi9maWxlMS5qcycpO1xucmVxdWlyZSgnLi9maWxlMi5qcycpO1xuXG5pbXBvcnQgUG9pbnQgZnJvbSAnLi9lczYvcG9pbnQuZXM2LmpzJztcblxudmFyIHBvaW50ID0gbmV3IFBvaW50KDIsMyk7XG5cbnZhciBsaWIzID0ge1xuICB0ZXh0OiBcImkgYW0gbGliIGZpbGVcIlxufVxuXG5cbmNvbnNvbGUubG9nKGxpYjMudGV4dCwgcG9pbnQpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9hc3NldHMvbGliL2xpYi5lczYuanNcbiAqKi8iLCJjbGFzcyBQb2ludCB7XG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuICcoJyt0aGlzLngrJywnK3RoaXMueSsnKSc7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUG9pbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2Fzc2V0cy9saWIvZXM2L3BvaW50LmVzNi5qc1xuICoqLyIsInZhciBvYmplY3QzID0ge1xuICB0ZXh0OiBcImkgYW0gZmlsZSAzXCJcbn1cblxuXG5jb25zb2xlLmxvZyhvYmplY3QzLnRleHQpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hc3NldHMvbGliL2ZpbGUzLmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwidmFyIG9iamVjdDEgPSB7XG4gIHRleHQ6IFwiaSBhbSBmaWxlIDFcIlxufVxuXG5cbmNvbnNvbGUubG9nKG9iamVjdDEudGV4dCk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2Fzc2V0cy9saWIvZmlsZTEuanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJ2YXIgb2JqZWN0MiA9IHtcbiAgdGV4dDogXCJpIGFtIGZpbGUgMiwgdGVzdCBcIlxufVxuXG5cbmNvbnNvbGUubG9nKG9iamVjdDIudGV4dCk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2Fzc2V0cy9saWIvZmlsZTIuanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9