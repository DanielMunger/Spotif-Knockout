webpackJsonp([0],{

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(1);
__webpack_require__(40);
// ViewModel
var TestPageViewModel = (function () {
    function TestPageViewModel() {
        this.albumQuery = ko.observable();
        this.albums = ko.observable();
        this.albumName = ko.observable();
    }
    //constructor() {
    //}
    TestPageViewModel.prototype.callAPI = function () {
        var _this = this;
        console.log("called function");
        fetch('/api/Spotify/SearchForAlbum/' + this.albumName())
            .then(function (response) { return response.json(); })
            .then(function (data) {
            console.log("successful response from api.");
            _this.albumQuery(data);
            _this.albums(data["albums"]["items"]);
        });
    };
    return TestPageViewModel;
}());
exports.default = { viewModel: TestPageViewModel, template: __webpack_require__(44) };


/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(77);

/***/ }),

/***/ 44:
/***/ (function(module, exports) {

module.exports = "<h1>Test Page</h1>\r\n\r\n<p>This component is testing a view.</p>\r\n\r\n\r\n<div>\r\n    <label>Album Search</label>\r\n    <input data-bind=\"value: albumName\"/>\r\n    <button data-bind=\"click: callAPI\">Search For Album</button>\r\n</div>\r\n\r\n<div data-bind=\"foreach: albums\">\r\n    <h3>Album Title: <span data-bind=\"text: name\"></span></h3>\r\n    <h3 data-bind=\"foreach: artists\">By: <span data-bind=\"text: name\"></span></h3>\r\n    <img style=\"height: 300px; width: 300px;\" data-bind=\"attr: {src: images[1].url}\" />\r\n</div>\r\n"

/***/ })

});
//# sourceMappingURL=0.js.map