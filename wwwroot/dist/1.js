webpackJsonp([1],{

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../test-page/test-page.ts" />
var ko = __webpack_require__(1);
__webpack_require__(40);
var FetchDataViewModel = (function () {
    function FetchDataViewModel() {
        var _this = this;
        this.forecasts = ko.observableArray();
        fetch('/api/SampleData/WeatherForecasts')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.forecasts(data);
        });
    }
    return FetchDataViewModel;
}());
exports.default = { viewModel: FetchDataViewModel, template: __webpack_require__(42) };


/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(77);

/***/ }),

/***/ 42:
/***/ (function(module, exports) {

module.exports = "<h1>Weather forecast</h1>\r\n\r\n<p>This component demonstrates fetching data from the server.</p>\r\n\r\n<p data-bind='ifnot: forecasts'><em>Loading...</em></p>\r\n\r\n<table class='table' data-bind='if: forecasts'>\r\n    <thead>\r\n        <tr>\r\n            <th>Date</th>\r\n            <th>Temp. (C)</th>\r\n            <th>Temp. (F)</th>\r\n            <th>Summary</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody data-bind='foreach: forecasts'>\r\n        <tr>\r\n            <td data-bind='text: dateFormatted'></td>\r\n            <td data-bind='text: temperatureC'></td>\r\n            <td data-bind='text: temperatureF'></td>\r\n            <td data-bind='text: summary'></td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n"

/***/ })

});
//# sourceMappingURL=1.js.map