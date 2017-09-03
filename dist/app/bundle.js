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
/******/ 	__webpack_require__.p = "/app/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("console.log('hello');\nvar Calculator = React.createClass({\n    displayName: 'Calculator',\n\n    render: function () {\n        var buttons = [];\n        {\n            for (var i = 9; i >= 0; i--) buttons.push(React.createElement(\n                'button',\n                { key: i, value: i, ref: 'number', className: 'btn btn-default' },\n                React.createElement(\n                    'span',\n                    null,\n                    i\n                )\n            ));\n            buttons.push(React.createElement(\n                'button',\n                { key: 'comma', value: ',', className: 'btn btn-default' },\n                React.createElement(\n                    'span',\n                    null,\n                    ','\n                )\n            ));\n        }\n        var operand = ['+', '-', 'x', '÷'].map(function (operand) {\n            return React.createElement(\n                'button',\n                { key: operand, value: operand, className: 'btn btn-primary' },\n                React.createElement(\n                    'span',\n                    null,\n                    operand\n                )\n            );\n        });\n        return React.createElement(\n            'div',\n            null,\n            React.createElement(\n                'div',\n                { id: 'display', className: 'c-display' },\n                React.createElement('textarea', { name: 'cur', id: 'current', cols: '30', rows: '2', readOnly: true, className: 'form-control' }),\n                React.createElement('textarea', { name: 'recent', id: 'recent', cols: '30', rows: '1', readOnly: true, className: 'form-control' })\n            ),\n            React.createElement(\n                'div',\n                { id: 'control', className: 'c-control' },\n                React.createElement(\n                    'div',\n                    { id: 'numbers', className: 'c-numbers' },\n                    buttons,\n                    React.createElement(\n                        'button',\n                        { key: 'Equal', className: 'btn btn-warning' },\n                        React.createElement(\n                            'span',\n                            null,\n                            '='\n                        )\n                    )\n                ),\n                React.createElement(\n                    'div',\n                    { id: 'operands', className: 'c-operand' },\n                    React.createElement(\n                        'button',\n                        { key: 'AC', className: 'btn btn-danger' },\n                        React.createElement(\n                            'span',\n                            null,\n                            'AC'\n                        )\n                    ),\n                    operand\n                )\n            )\n        );\n    }\n});\nReactDOM.render(React.createElement(Calculator, null), document.getElementById('app'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvYXBwL2luZGV4LmpzPzliZGMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ2hlbGxvJyk7XG52YXIgQ2FsY3VsYXRvciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBidXR0b25zID0gW107XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaT05O2k+PTA7aS0tKSBidXR0b25zLnB1c2goPGJ1dHRvbiBrZXk9e2l9IHZhbHVlPXtpfSByZWY9J251bWJlcicgY2xhc3NOYW1lPSdidG4gYnRuLWRlZmF1bHQnPjxzcGFuPntpfTwvc3Bhbj48L2J1dHRvbj4pO1xuICAgICAgICAgICAgICAgIGJ1dHRvbnMucHVzaCg8YnV0dG9uIGtleT0nY29tbWEnIHZhbHVlPScsJyBjbGFzc05hbWU9J2J0biBidG4tZGVmYXVsdCc+PHNwYW4+LDwvc3Bhbj48L2J1dHRvbj4pXG4gICAgICAgICAgICB9XG4gICAgICAgIHZhciBvcGVyYW5kID0gWycrJywnLScsJ3gnLCfDtyddLm1hcChmdW5jdGlvbihvcGVyYW5kKXtcbiAgICAgICAgICAgIHJldHVybiA8YnV0dG9uIGtleT17b3BlcmFuZH0gdmFsdWU9e29wZXJhbmR9IGNsYXNzTmFtZT0nYnRuIGJ0bi1wcmltYXJ5Jz48c3Bhbj57b3BlcmFuZH08L3NwYW4+PC9idXR0b24+XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPSdkaXNwbGF5JyBjbGFzc05hbWU9J2MtZGlzcGxheSc+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiY3VyXCIgaWQ9XCJjdXJyZW50XCIgY29scz1cIjMwXCIgcm93cz1cIjJcIiByZWFkT25seSBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCc+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJyZWNlbnRcIiBpZD1cInJlY2VudFwiIGNvbHM9XCIzMFwiIHJvd3M9XCIxXCIgcmVhZE9ubHkgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD0nY29udHJvbCcgY2xhc3NOYW1lPSdjLWNvbnRyb2wnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPSdudW1iZXJzJyBjbGFzc05hbWU9J2MtbnVtYmVycyc+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YnV0dG9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PSdFcXVhbCcgY2xhc3NOYW1lPSdidG4gYnRuLXdhcm5pbmcnPjxzcGFuPj08L3NwYW4+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPSdvcGVyYW5kcycgY2xhc3NOYW1lPSdjLW9wZXJhbmQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9J0FDJyBjbGFzc05hbWU9J2J0biBidG4tZGFuZ2VyJz48c3Bhbj5BQzwvc3Bhbj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtvcGVyYW5kfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2Pik7XG4gICAgfVxufSk7XG5SZWFjdERPTS5yZW5kZXIoPENhbGN1bGF0b3IgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9hcHAvaW5kZXguanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFMQTtBQUxBO0FBZ0JBO0FBM0JBO0FBNkJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);