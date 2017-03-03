webpackJsonp([0],{

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(1);
__webpack_require__(42);
// ViewModel
var TestPageViewModel = (function () {
    function TestPageViewModel(params) {
        this.albumQuery = ko.observable();
        this.albums = ko.observable();
        this.albumName = ko.observable();
        // This viewmodel doesn't do anything except pass through the 'route' parameter to the view.
        // You could remove this viewmodel entirely, and define 'nav-menu' as a template-only component.
        // But in most apps, you'll want some viewmodel logic to determine what navigation options appear.
        this.route = params.route;
    }
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
exports.default = { viewModel: TestPageViewModel, template: __webpack_require__(47) };


/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(77);

/***/ }),

/***/ 47:
/***/ (function(module, exports) {

module.exports = "<h1>Test Page</h1>\r\n\r\n<p>This component is testing a view.</p>\r\n\r\n\r\n<div>\r\n    <label>Album Search</label>\r\n    <input data-bind=\"value: albumName\"/>\r\n    <button data-bind=\"click: callAPI\">Search For Album</button>\r\n</div>\r\n\r\n<div data-bind=\"foreach: albums\">\r\n    <a data-bind=\"attr: {href:'/album-details/' + id}\">\r\n        <h3>Album Title:<span data-bind=\"text: name\"></span></h3>\r\n    </a>\r\n        <h3 data-bind=\"foreach: artists\">By: <span data-bind=\"text: name\"></span></h3>\r\n        <img style=\"height: 300px; width: 300px;\" data-bind=\"attr: {src: images[1].url}\" />\r\n</div>\r\n"

/***/ })

});
//# sourceMappingURL=0.js.map