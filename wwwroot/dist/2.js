webpackJsonp([2],{

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(1);
__webpack_require__(42);
var AlbumDetailsViewModel = (function () {
    function AlbumDetailsViewModel() {
        this.albumDetails = ko.observable();
        //var params = params.myParams;
        var params = window.location.href.split('/');
        console.log(params[4]);
        //fetch('/api/Spotify/SearchForAlbum/' + this.albumId())
    }
    return AlbumDetailsViewModel;
}());
exports.default = { viewModel: AlbumDetailsViewModel, template: __webpack_require__(43) };


/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(77);

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

module.exports = "<h1>Album Details</h1>"

/***/ })

});
//# sourceMappingURL=2.js.map