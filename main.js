(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"m-t-1\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./book/book.component */ "./src/app/book/book.component.ts");
/* harmony import */ var _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./book-list/book-list.component */ "./src/app/book-list/book-list.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _library_library_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./library/library.component */ "./src/app/library/library.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _shared_google_books_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/google-books.service */ "./src/app/shared/google-books.service.ts");
/* harmony import */ var _pager_pager_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pager/pager.component */ "./src/app/pager/pager.component.ts");
/* harmony import */ var _shared_library_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/library.service */ "./src/app/shared/library.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _book_book_component__WEBPACK_IMPORTED_MODULE_6__["BookComponent"],
                _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_7__["BookListComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"],
                _library_library_component__WEBPACK_IMPORTED_MODULE_9__["LibraryComponent"],
                _pager_pager_component__WEBPACK_IMPORTED_MODULE_13__["PagerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_11__["routes"])
            ],
            providers: [_shared_google_books_service__WEBPACK_IMPORTED_MODULE_12__["GoogleBooksService"], _shared_library_service__WEBPACK_IMPORTED_MODULE_14__["LibraryService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _library_library_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library/library.component */ "./src/app/library/library.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./book/book.component */ "./src/app/book/book.component.ts");



var routes = [
    { path: '', redirectTo: 'library', pathMatch: 'full' },
    { path: 'library', component: _library_library_component__WEBPACK_IMPORTED_MODULE_0__["LibraryComponent"] },
    { path: 'search', component: _search_search_component__WEBPACK_IMPORTED_MODULE_1__["SearchComponent"] },
    { path: 'book/:bookId', component: _book_book_component__WEBPACK_IMPORTED_MODULE_2__["BookComponent"] },
];


/***/ }),

/***/ "./src/app/book-list/book-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/book-list/book-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".book-thumbnail {\r\n  width: 60%;\r\n  margin: 20%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/book-list/book-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/book-list/book-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row m-3\">\r\n\r\n  <div *ngFor=\"let book of books\"\r\n\r\n    class=\"col-md-4 col-lg-3 col-sm-1\">\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\">\r\n        <h3 class=\"panel-title\">\r\n          <a [routerLink]=\"['/book', book.id]\">{{ book.title }}</a>\r\n        </h3>\r\n      </div>\r\n      <div class=\"panel-body text-center\">\r\n        <h6 class=\"card-subtitle mb-2 text-muted\">{{ book.subTitle }}</h6>\r\n        <div class=\"card-text\">\r\n          <span *ngFor=\"let category of book.categories\"\r\n                class=\"mr-1 badge badge-pill badge-default\">\r\n            {{ category }}\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <img class=\"book-thumbnail\"\r\n           src=\"{{book.smallThumbnail}}\"\r\n           alt=\"\">\r\n      <div class=\"panel-footer\">\r\n        <span *ngIf=\"book.authors\">\r\n          by\r\n          <span *ngFor=\"let author of book.authors; let isLast = last;\">\r\n            {{ author }} <span *ngIf=\"!isLast\">,</span>\r\n          </span>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/book-list/book-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/book-list/book-list.component.ts ***!
  \**************************************************/
/*! exports provided: BookListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListComponent", function() { return BookListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookListComponent = /** @class */ (function () {
    function BookListComponent() {
    }
    BookListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], BookListComponent.prototype, "books", void 0);
    BookListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-list',
            template: __webpack_require__(/*! ./book-list.component.html */ "./src/app/book-list/book-list.component.html"),
            styles: [__webpack_require__(/*! ./book-list.component.css */ "./src/app/book-list/book-list.component.css")]
        })
    ], BookListComponent);
    return BookListComponent;
}());



/***/ }),

/***/ "./src/app/book/book.component.css":
/*!*****************************************!*\
  !*** ./src/app/book/book.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/book/book.component.html":
/*!******************************************!*\
  !*** ./src/app/book/book.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row m-3\">\r\n  <div class=\"col-md-6 col-md-offset-3\">\r\n    <h2 class=\"text-center\">{{ book?.title }}</h2>\r\n\r\n    <h6 class=\"text-center\">{{ book?.subTitle }}</h6>\r\n\r\n    <div class=\" m-3\">\r\n      <img class=\"rounded center-block\"\r\n           src=\"{{ book?.thumbnail }}\">\r\n    </div>\r\n\r\n\r\n    <dl>\r\n      <dt>Description</dt>\r\n      <dd>\r\n        <p [innerHtml]=\"book?.description\"></p>\r\n      </dd>\r\n\r\n      <dt>Authors</dt>\r\n      <dd>{{ book?.authors }}</dd>\r\n\r\n      <dt>Categories</dt>\r\n      <dd>\r\n        <span *ngFor=\"let category of book?.categories\"\r\n              class=\"mr-1 badge badge-pill badge-default\">\r\n          {{ category }}\r\n        </span>\r\n      </dd>\r\n\r\n      <dt>Published Date</dt>\r\n      <dd>{{ book?.publishDate }}</dd>\r\n\r\n      <dt>Publisher</dt>\r\n      <dd>{{ book?.publisher }}</dd>\r\n    </dl>\r\n\r\n    <p>\r\n      <button *ngIf=\"!hasBook(book)\"\r\n              (click)=\"addBook(book)\"\r\n              type=\"button\"\r\n              class=\"btn btn-primary\">Add To Library\r\n      </button>\r\n      <button *ngIf=\"hasBook(book)\"\r\n              (click)=\"removeBook(book)\"\r\n              type=\"button\"\r\n              class=\"btn btn-default\">Remove From Library\r\n      </button>\r\n    </p>\r\n\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/book/book.component.ts":
/*!****************************************!*\
  !*** ./src/app/book/book.component.ts ***!
  \****************************************/
/*! exports provided: BookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function() { return BookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_google_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/google-books.service */ "./src/app/shared/google-books.service.ts");
/* harmony import */ var _shared_library_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/library.service */ "./src/app/shared/library.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookComponent = /** @class */ (function () {
    function BookComponent(router, route, googleBooksService, libraryService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.googleBooksService = googleBooksService;
        this.libraryService = libraryService;
        this.route.params.subscribe(function (params) {
            console.log(params);
            if (params['bookId']) {
                _this.getBook(params['bookId']);
            }
        });
    }
    BookComponent.prototype.getBook = function (bookId) {
        var _this = this;
        this.googleBooksService.retrieveBook(bookId)
            .do(function (value) { return console.log(value); })
            .subscribe(function (value) { return _this.book = value; });
    };
    BookComponent.prototype.hasBook = function (book) {
        if (book) {
            return this.libraryService.hasBook(book);
        }
    };
    BookComponent.prototype.addBook = function (book) {
        if (book) {
            return this.libraryService.addBook(book);
        }
    };
    BookComponent.prototype.removeBook = function (book) {
        if (book) {
            return this.libraryService.removeBook(book);
        }
    };
    BookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book',
            template: __webpack_require__(/*! ./book.component.html */ "./src/app/book/book.component.html"),
            styles: [__webpack_require__(/*! ./book.component.css */ "./src/app/book/book.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_google_books_service__WEBPACK_IMPORTED_MODULE_2__["GoogleBooksService"],
            _shared_library_service__WEBPACK_IMPORTED_MODULE_3__["LibraryService"]])
    ], BookComponent);
    return BookComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-default\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\">\r\n      <a href=\"search\"\r\n         class=\"navbar-brand\">BookShelf\r\n      </a>\r\n      <button class=\"navbar-toggle\"\r\n              type=\"button\"\r\n              data-toggle=\"collapse\"\r\n              data-target=\"#navbar-main\">\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n    </div>\r\n    <div class=\"navbar-collapse collapse\"\r\n         id=\"navbar-main\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n          <a class=\"nav-link\" [routerLink]=\"['search']\">Search</a>\r\n        </li>\r\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n          <a class=\"nav-link\" [routerLink]=\"['library']\">Library</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/library/library.component.css":
/*!***********************************************!*\
  !*** ./src/app/library/library.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/library/library.component.html":
/*!************************************************!*\
  !*** ./src/app/library/library.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"page-header\">\r\n    <h4>Library\r\n    </h4>\r\n  </div>\r\n\r\n  <app-book-list [books]=\"libraryService.books\"></app-book-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/library/library.component.ts":
/*!**********************************************!*\
  !*** ./src/app/library/library.component.ts ***!
  \**********************************************/
/*! exports provided: LibraryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryComponent", function() { return LibraryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_library_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/library.service */ "./src/app/shared/library.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LibraryComponent = /** @class */ (function () {
    function LibraryComponent(libraryService) {
        this.libraryService = libraryService;
    }
    LibraryComponent.prototype.ngOnInit = function () {
    };
    LibraryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-library',
            template: __webpack_require__(/*! ./library.component.html */ "./src/app/library/library.component.html"),
            styles: [__webpack_require__(/*! ./library.component.css */ "./src/app/library/library.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_library_service__WEBPACK_IMPORTED_MODULE_1__["LibraryService"]])
    ], LibraryComponent);
    return LibraryComponent;
}());



/***/ }),

/***/ "./src/app/pager/pager.component.css":
/*!*******************************************!*\
  !*** ./src/app/pager/pager.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pager/pager.component.html":
/*!********************************************!*\
  !*** ./src/app/pager/pager.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\r\n  <ul class=\"pager\">\r\n    <li [class.disabled]=\"page === 1\">\r\n      <a (click)=\"prev()\"> &larr; Previous\r\n      </a>\r\n    </li>\r\n    <li [class.disabled]=\"page === totalPages\">\r\n      <a  (click)=\"next()\">Next &rarr;\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/pager/pager.component.ts":
/*!******************************************!*\
  !*** ./src/app/pager/pager.component.ts ***!
  \******************************************/
/*! exports provided: PagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerComponent", function() { return PagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagerComponent = /** @class */ (function () {
    function PagerComponent() {
        this.page = 1;
        this.totalPages = 0;
        this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PagerComponent.prototype.next = function () {
        this.changePage.emit(this.page + 1);
    };
    PagerComponent.prototype.prev = function () {
        this.changePage.emit(this.page - 1);
    };
    PagerComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PagerComponent.prototype, "page", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PagerComponent.prototype, "totalPages", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PagerComponent.prototype, "changePage", void 0);
    PagerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pager',
            template: __webpack_require__(/*! ./pager.component.html */ "./src/app/pager/pager.component.html"),
            styles: [__webpack_require__(/*! ./pager.component.css */ "./src/app/pager/pager.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PagerComponent);
    return PagerComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"m-3 text-center\">\r\n    <form class=\"form-inline\"\r\n          (ngSubmit)=\"doSearch()\">\r\n      <div class=\"form-group\">\r\n        <input type=\"search\"\r\n               class=\"form-control\"\r\n               placeholder=\"Enter search string\"\r\n               name=\"search\"\r\n               [(ngModel)]=\"term\"\r\n               required>\r\n      </div>\r\n      <button type=\"submit\"\r\n              class=\"btn btn-primary\">\r\n        Search\r\n      </button>\r\n    </form>\r\n    <hr />\r\n\r\n    <div class=\"text-center\">\r\n      <p *ngIf=\"googleBooksService.initialised && googleBooksService.loading\"\r\n         class=\"lead\">Loading...</p>\r\n\r\n      <p *ngIf=\"googleBooksService.initialised && !googleBooksService.loading && googleBooksService.books?.length === 0\"\r\n         class=\"lead\">No results returned</p>\r\n\r\n      <p *ngIf=\"!googleBooksService.initialised\"\r\n         class=\"lead\">Enter a search string above and press search</p>\r\n    </div>\r\n  </div>\r\n\r\n  <app-book-list [books]=\"googleBooksService.books\"></app-book-list>\r\n\r\n  <div class=\"d-flex justify-content-center\">\r\n    <app-pager [page]=\"googleBooksService.page\"\r\n               [totalPages]=\"googleBooksService.totalPages\"\r\n               (changePage)=\"googleBooksService.page = $event\"></app-pager>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_google_books_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/google-books.service */ "./src/app/shared/google-books.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = /** @class */ (function () {
    function SearchComponent(router, route, googleBooksService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.googleBooksService = googleBooksService;
        this.term = "";
        this.route.params.subscribe(function (params) {
            console.log(params);
            if (params['term']) {
                _this.term = params['term'];
                _this.onSearch(_this.term);
            }
        });
    }
    SearchComponent.prototype.doSearch = function () {
        this.router.navigate(['search', { term: this.term }]);
    };
    SearchComponent.prototype.onSearch = function (term) {
        this.googleBooksService.searchBooks(term);
    };
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_google_books_service__WEBPACK_IMPORTED_MODULE_1__["GoogleBooksService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/shared/book.ts":
/*!********************************!*\
  !*** ./src/app/shared/book.ts ***!
  \********************************/
/*! exports provided: Book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
var Book = /** @class */ (function () {
    function Book(id, title, subTitle, authors, publisher, publishDate, description, categories, thumbnail, smallThumbnail) {
        this.id = id;
        this.title = title;
        this.subTitle = subTitle;
        this.authors = authors;
        this.publisher = publisher;
        this.publishDate = publishDate;
        this.description = description;
        this.categories = categories;
        this.thumbnail = thumbnail;
        this.smallThumbnail = smallThumbnail;
    }
    return Book;
}());



/***/ }),

/***/ "./src/app/shared/google-books.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/google-books.service.ts ***!
  \************************************************/
/*! exports provided: GoogleBooksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleBooksService", function() { return GoogleBooksService; });
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _book__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./book */ "./src/app/shared/book.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GoogleBooksService = /** @class */ (function () {
    function GoogleBooksService(http) {
        this.http = http;
        this.API_PATH = 'https://www.googleapis.com/books/v1/volumes';
        this.loading = false;
        this.initialised = false;
        this.totalItems = 0;
        this._page = 1;
        this.pageSize = 10;
        this.query = "";
    }
    Object.defineProperty(GoogleBooksService.prototype, "startIndex", {
        get: function () {
            return this.page * this.pageSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleBooksService.prototype, "totalPages", {
        get: function () {
            try {
                return Math.ceil(this.totalItems / this.pageSize);
            }
            catch (e) {
                console.error(e);
                return 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleBooksService.prototype, "page", {
        get: function () {
            return this._page;
        },
        set: function (val) {
            if (val !== this.page) {
                this._page = val;
                this.searchBooks(this.query);
            }
        },
        enumerable: true,
        configurable: true
    });
    GoogleBooksService.prototype.searchBooks = function (queryTitle) {
        var _this = this;
        this.query = queryTitle;
        this.loading = true;
        this.initialised = true;
        this.books = [];
        this.http.get(this.API_PATH + "?q=" + this.query + "&maxResults=" + this.pageSize + "&startIndex=" + this.startIndex)
            .map(function (res) { return res.json(); })
            .do(function (data) {
            _this.totalItems = data.totalItems;
        })
            .map(function (data) {
            return data.items ? data.items : [];
        })
            .map(function (items) {
            return items.map(function (item) { return _this.bookFactory(item); });
        })
            // .do(books => console.log(books))
            .do(function (_) { return _this.loading = false; })
            .subscribe(function (books) { return _this.books = books; });
    };
    GoogleBooksService.prototype.retrieveBook = function (bookId) {
        var _this = this;
        return this.http.get(this.API_PATH + "/" + bookId)
            .map(function (res) { return res.json(); })
            .map(function (item) { return _this.bookFactory(item); });
    };
    GoogleBooksService.prototype.bookFactory = function (item) {
        return new _book__WEBPACK_IMPORTED_MODULE_5__["Book"](item.id, item.volumeInfo.title, item.volumeInfo.subtitle, item.volumeInfo.authors, item.volumeInfo.publisher, item.volumeInfo.publishedDate, item.volumeInfo.description, item.volumeInfo.categories ? item.volumeInfo.categories.map(function (item) { return item.split("/").pop().trim(); }) : ['N/A'], item.volumeInfo.imageLinks.thumbnail, item.volumeInfo.imageLinks.smallThumbnail);
    };
    GoogleBooksService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"]])
    ], GoogleBooksService);
    return GoogleBooksService;
}());



/***/ }),

/***/ "./src/app/shared/library.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/library.service.ts ***!
  \*******************************************/
/*! exports provided: LibraryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryService", function() { return LibraryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book */ "./src/app/shared/book.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LibraryService = /** @class */ (function () {
    function LibraryService() {
        this.books = [];
        this.load();
    }
    LibraryService.prototype.save = function () {
        localStorage.setItem('books', JSON.stringify(this.books));
    };
    LibraryService.prototype.load = function () {
        var savedBooks = localStorage.getItem('books');
        if (!savedBooks) {
            return;
        }
        // console.log(savedBooks);
        savedBooks = JSON.parse(savedBooks);
        // console.log(savedBooks);
        for (var i = 0; i < savedBooks.length; i++) {
            var savedBook = savedBooks[i];
            // console.log(savedBook);
            //noinspection TypeScriptValidateTypes,TypeScriptUnresolvedFunction
            this.books.push(Object.assign(new _book__WEBPACK_IMPORTED_MODULE_1__["Book"](null, null, null, null, null, null, null, null, null, null), savedBook));
        }
        // console.log(this.books);
    };
    LibraryService.prototype.addBook = function (book) {
        if (!this.hasBook(book)) {
            this.books.push(book);
            this.save();
        }
    };
    LibraryService.prototype.removeBook = function (book) {
        var index = this.indexOf(book);
        this.books.splice(index, 1);
        this.save();
    };
    LibraryService.prototype.hasBook = function (book) {
        return this.indexOf(book) !== -1;
    };
    LibraryService.prototype.indexOf = function (book) {
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].id === book.id) {
                return i;
            }
        }
        return -1;
    };
    LibraryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LibraryService);
    return LibraryService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills.ts */ "./src/polyfills.ts");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]);


/***/ }),

/***/ "./src/polyfills.ts":
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_es6_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/es6/symbol */ "./node_modules/core-js/es6/symbol.js");
/* harmony import */ var core_js_es6_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_es6_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/es6/object */ "./node_modules/core-js/es6/object.js");
/* harmony import */ var core_js_es6_object__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_object__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_es6_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/es6/function */ "./node_modules/core-js/es6/function.js");
/* harmony import */ var core_js_es6_function__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_function__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_es6_parse_int__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/es6/parse-int */ "./node_modules/core-js/es6/parse-int.js");
/* harmony import */ var core_js_es6_parse_int__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_parse_int__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_es6_parse_float__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/es6/parse-float */ "./node_modules/core-js/es6/parse-float.js");
/* harmony import */ var core_js_es6_parse_float__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_parse_float__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_es6_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/es6/number */ "./node_modules/core-js/es6/number.js");
/* harmony import */ var core_js_es6_number__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_number__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_es6_math__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/es6/math */ "./node_modules/core-js/es6/math.js");
/* harmony import */ var core_js_es6_math__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_math__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_es6_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/es6/string */ "./node_modules/core-js/es6/string.js");
/* harmony import */ var core_js_es6_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_es6_date__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/es6/date */ "./node_modules/core-js/es6/date.js");
/* harmony import */ var core_js_es6_date__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_date__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_es6_array__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/es6/array */ "./node_modules/core-js/es6/array.js");
/* harmony import */ var core_js_es6_array__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_array__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_es6_regexp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/es6/regexp */ "./node_modules/core-js/es6/regexp.js");
/* harmony import */ var core_js_es6_regexp__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_regexp__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_es6_map__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/es6/map */ "./node_modules/core-js/es6/map.js");
/* harmony import */ var core_js_es6_map__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_map__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_es6_set__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/es6/set */ "./node_modules/core-js/es6/set.js");
/* harmony import */ var core_js_es6_set__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_set__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/es6/reflect */ "./node_modules/core-js/es6/reflect.js");
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/es7/reflect */ "./node_modules/core-js/es7/reflect.js");
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! zone.js/dist/zone */ "./node_modules/zone.js/dist/zone.js");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_15__);
// This file includes polyfills needed by Angular and is loaded before
// the app. You can add your own extra polyfills to this file.


















/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Learn\angular5library\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map