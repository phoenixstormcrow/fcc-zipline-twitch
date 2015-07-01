(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _pinned = require('./pinned');

var _pinned2 = _interopRequireDefault(_pinned);

console.log(_pinned2['default']);

global.pin = _pinned2['default'].pin.bind(_pinned2['default']);
global.unpin = _pinned2['default'].unpin.bind(_pinned2['default']);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./pinned":2}],2:[function(require,module,exports){
/* pinned.js */

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var seed = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "comster404", "brunofin", "thomasballinger", "noobs2ninjas", "beohoff"];

function save(obj) {
  localStorage.setItem("pinned", JSON.stringify(obj));
}

exports["default"] = {
  channels: (function () {
    var stored = localStorage.getItem("pinned");
    if (stored === null) {
      save(seed);
      return seed;
    } else {
      return JSON.parse(stored);
    }
  })(),
  pin: function pin(channel) {
    this.channels.push(channel);
    save(this.channels);
  },
  unpin: function unpin(channel) {
    var i = this.channels.indexOf(channel);
    if (i !== -1) {
      this.channels.splice(i, 1);
      save(this.channels);
    }
  }
};
module.exports = exports["default"];

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy5udm0vdmVyc2lvbnMvbm9kZS92MC4xMi4xL2xpYi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL2hvbWUvcGhvZW5peC9mY2MvemlwbGluZXMvdHdpdGNoLWFwaS9zcmMvY2xpZW50L2luZGV4LmpzIiwiL2hvbWUvcGhvZW5peC9mY2MvemlwbGluZXMvdHdpdGNoLWFwaS9zcmMvY2xpZW50L3Bpbm5lZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O3NCQ0FtQixVQUFVOzs7O0FBRTdCLE9BQU8sQ0FBQyxHQUFHLHFCQUFRLENBQUM7O0FBRXBCLE1BQU0sQ0FBQyxHQUFHLEdBQUcsb0JBQU8sR0FBRyxDQUFDLElBQUkscUJBQVEsQ0FBQztBQUNyQyxNQUFNLENBQUMsS0FBSyxHQUFHLG9CQUFPLEtBQUssQ0FBQyxJQUFJLHFCQUFRLENBQUM7Ozs7Ozs7Ozs7OztBQ0h6QyxJQUFNLElBQUksR0FBRyxDQUNYLGNBQWMsRUFDZCxVQUFVLEVBQ1YsY0FBYyxFQUNkLFVBQVUsRUFDVixZQUFZLEVBQ1osWUFBWSxFQUNaLFVBQVUsRUFDVixpQkFBaUIsRUFDakIsY0FBYyxFQUNkLFNBQVMsQ0FDVixDQUFDOztBQUVGLFNBQVMsSUFBSSxDQUFDLEdBQUcsRUFBRTtBQUNqQixjQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Q0FDckQ7O3FCQUVjO0FBQ2IsVUFBUSxFQUFFLENBQUMsWUFBWTtBQUNyQixRQUFJLE1BQU0sR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzVDLFFBQUksTUFBTSxLQUFLLElBQUksRUFBRTtBQUNuQixVQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDWCxhQUFPLElBQUksQ0FBQztLQUNiLE1BQU07QUFDTCxhQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDM0I7R0FDRixDQUFBLEVBQUc7QUFDSixLQUFHLEVBQUMsYUFBQyxPQUFPLEVBQUU7QUFDWixRQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM1QixRQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0dBQ3JCO0FBQ0QsT0FBSyxFQUFDLGVBQUMsT0FBTyxFQUFFO0FBQ2QsUUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDdkMsUUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7QUFDWixVQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDM0IsVUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUNyQjtHQUNGO0NBQ0YiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHBpbm5lZCBmcm9tICcuL3Bpbm5lZCc7XG5cbmNvbnNvbGUubG9nKHBpbm5lZCk7XG5cbmdsb2JhbC5waW4gPSBwaW5uZWQucGluLmJpbmQocGlubmVkKTtcbmdsb2JhbC51bnBpbiA9IHBpbm5lZC51bnBpbi5iaW5kKHBpbm5lZCk7XG4iLCIvKiBwaW5uZWQuanMgKi9cblxuY29uc3Qgc2VlZCA9IFtcbiAgXCJmcmVlY29kZWNhbXBcIixcbiAgXCJzdG9yYmVja1wiLFxuICBcInRlcmFraWxvYnl0ZVwiLFxuICBcImhhYmF0aGN4XCIsXG4gIFwiUm9ib3RDYWxlYlwiLFxuICBcImNvbXN0ZXI0MDRcIixcbiAgXCJicnVub2ZpblwiLFxuICBcInRob21hc2JhbGxpbmdlclwiLFxuICBcIm5vb2JzMm5pbmphc1wiLFxuICBcImJlb2hvZmZcIlxuXTtcblxuZnVuY3Rpb24gc2F2ZShvYmopIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Bpbm5lZCcsIEpTT04uc3RyaW5naWZ5KG9iaikpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNoYW5uZWxzOiAoZnVuY3Rpb24gKCkge1xuICAgIGxldCBzdG9yZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGlubmVkJyk7XG4gICAgaWYgKHN0b3JlZCA9PT0gbnVsbCkge1xuICAgICAgc2F2ZShzZWVkKTtcbiAgICAgIHJldHVybiBzZWVkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShzdG9yZWQpO1xuICAgIH1cbiAgfSkoKSxcbiAgcGluIChjaGFubmVsKSB7XG4gICAgdGhpcy5jaGFubmVscy5wdXNoKGNoYW5uZWwpO1xuICAgIHNhdmUodGhpcy5jaGFubmVscyk7XG4gIH0sXG4gIHVucGluIChjaGFubmVsKSB7XG4gICAgbGV0IGkgPSB0aGlzLmNoYW5uZWxzLmluZGV4T2YoY2hhbm5lbCk7XG4gICAgaWYgKGkgIT09IC0xKSB7XG4gICAgICB0aGlzLmNoYW5uZWxzLnNwbGljZShpLCAxKTtcbiAgICAgIHNhdmUodGhpcy5jaGFubmVscyk7XG4gICAgfVxuICB9XG59O1xuIl19
