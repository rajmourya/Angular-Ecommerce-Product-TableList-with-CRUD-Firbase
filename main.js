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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-menu\">\n\n  <div class=\"main-menu\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\">\n          <img src=\"assets/logo.png\" alt=\"Logo Image\">\n        </a>\n      </div>\n      <form class=\"navbar-form navbar-left\">\n        <div class=\"input-group \">\n          <input type=\"text\" class=\"form-control\" name=\"searchText\" [(ngModel)]=\"searchText\" placeholder=\"search by product name\">\n          <div class=\"input-group-btn\">\n            <button class=\"btn btn-default\" type=\"submit\">\n              <i class=\"fa fa-search\"></i>\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n<section class=\"contentPanel\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">        \n        <h3 class=\"cartTitle\">Product List</h3>\n        <button class=\"btn btn-primary pull-right\" data-toggle=\"modal\" data-target=\"#myModal\"> Add Product</button>\n        <div class=\"shopCartPanel\">\n          <table class=\"table table-bordered\">\n            <tr style=\"background-color:#e5e5e5;\">\n              <th>Id</th>\n              <th>Brand</th>\n              <th>Product Title</th>\n              <th>Price</th>\n              <th>Category</th>\n              <th>Colour</th>\n              <th>Size</th>\n              <th class=\"text-center\">Action</th>\n            </tr>\n            <tr *ngFor=\"let product of pagedItems | search : searchText :'title'; let i = index;\">\n              <!-- <td>{{product.$key}}</td> -->\n              <td>{{i+1}}</td>\n              <td>{{product.brand}}</td>\n              <td>{{product.title}}</td>\n              <td><i class=\"fa fa-rupee\"></i>{{product.price}}</td>\n              <td>{{product.category}}</td>\n              <td>{{product.colour}}</td>\n              <td>{{product.size}}</td>\n              <td>\n                <a class=\" text-warning btn-sm\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"productService.editProduct(product)\" style=\"margin-right: 20px;\"> Edit</a>\n                <a class=\" text-danger btn-sm\" (click)=\"onDelete(product.$key)\"> Delete</a>\n              </td>\n            </tr>\n\n          </table>\n          <div class=\"text-center block\">\n            <!-- pager -->\n            <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\n              <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n                <a (click)=\"setPage(1)\">First</a>\n              </li>\n              <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n                <a (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\n              </li>\n              <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\n                <a (click)=\"setPage(page)\">{{page}}</a>\n              </li>\n              <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n                <a (click)=\"setPage(pager.currentPage + 1)\">Next</a>\n              </li>\n              <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n                <a (click)=\"setPage(pager.totalPages)\">Last</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Add Product</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form [formGroup]=\"this.productService.form\" (ngSubmit)=\"onSubmit()\">    \n            <input type=\"hidden\" formControlName=\"$key\">        \n          <div class=\"input-group\" >\n            <span class=\"input-group-addon\">Brand</span>  \n            <select name=\"brand\" id=\"brand\" formControlName=\"brand\"  class=\"form-control\">\n                <option value=\"Action\">Action</option>\n              <option value=\"Bata\">Bata</option>\n              <option value=\"Fila\">Fila</option>\n              <option value=\"Liberty\">Liberty</option>              \n              <option value=\"Spark\">Spark</option>              \n            </select>              \n          </div>\n          <div class=\"input-group\">\n              <span class=\"input-group-addon\">Title</span>\n              <input type=\"text\" formControlName=\"title\" placeholder=\"Product Title\" name=\"title\" id=\"title\">\n          </div>\n          <div class=\"input-group\">\n              <span class=\"input-group-addon\">Price</span>\n              <input type=\"number\" formControlName=\"price\" placeholder=\"Product Price\" name=\"price\" id=\"price\">\n          </div>\n          <div class=\"input-group\">\n              <span class=\"input-group-addon\">Category</span>  \n              <select name=\"category\" id=\"category\" formControlName=\"category\"  class=\"form-control\">\n                  <option value=\"Formal\">Formal</option>\n                <option value=\"Casual\">Casual</option>\n                <option value=\"Sports\">Sports</option>\n                <option value=\"Others\">Others</option>            \n              </select>              \n          </div>\n          <div class=\"input-group\">\n                <span class=\"input-group-addon\">Colour</span>  \n                <select name=\"colour\" id=\"colour\" formControlName=\"colour\"  class=\"form-control\">\n                    <option value=\"Black\">Black</option>\n                  <option value=\"Blue\">Blue</option>\n                  <option value=\"Brown\">Brown</option>\n                  <option value=\"Gray\">Gray</option>\n                  <option value=\"Red\">Red</option>\n                  <option value=\"White\">White</option>              \n                </select>              \n          </div>\n          <div class=\"input-group\">\n                  <span class=\"input-group-addon\">Size</span>  \n                  <select name=\"size\" id=\"size\" formControlName=\"size\"  class=\"form-control\">\n                    <option value=\"5\">5</option>\n                    <option value=\"6\">6</option>\n                    <option value=\"7\">7</option>\n                    <option value=\"8\">8</option>              \n                    <option value=\"9\">9</option>              \n                  </select>              \n          </div>\n          <input type=\"submit\" class=\"btn btn-success\"  value=\"Add\" />\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n\n<footer class=\"main-footer dark-bg\">\n        <div class=\"copyright\">\n          <p>&copy; 2018 ShoesShop | All Rights Reserved</p>\n        </div>\n      </footer>"

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
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.service */ "./src/app/product.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(productService) {
        this.productService = productService;
        this.pager = {};
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (data) {
            _this.products = data.map(function (item) {
                return __assign({ $key: item.key }, item.payload.val());
            });
            _this.setPage(1);
        });
    };
    AppComponent.prototype.onSubmit = function () {
        //if(this.productService.form.valid){
        if (this.productService.form.get('$key').value == null)
            this.productService.createProduct(this.productService.form.value);
        else
            this.productService.updateProduct(this.productService.form.value);
        this.productService.form.reset();
        // }
    };
    AppComponent.prototype.onDelete = function ($key) {
        this.productService.deleteProduct($key);
    };
    ;
    AppComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.productService.getPager(this.products.length, page);
        // get current page of items
        this.pagedItems = this.products.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]]
        }),
        __metadata("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
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
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product.service */ "./src/app/product.service.ts");
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search.pipe */ "./src/app/search.pipe.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _search_pipe__WEBPACK_IMPORTED_MODULE_7__["SearchPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], angularfire2__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebaseConfig), angularfire2_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabaseModule"]
            ],
            providers: [_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/product.service.ts":
/*!************************************!*\
  !*** ./src/app/product.service.ts ***!
  \************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { HttpClient } from '@angular/common/http';



var ProductService = /** @class */ (function () {
    //form: FormGroup;
    function ProductService(formBuilder, firebase) {
        this.formBuilder = formBuilder;
        this.firebase = firebase;
        this.form = this.formBuilder.group({
            $key: [null],
            brand: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            colour: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            size: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ProductService.prototype.getProducts = function () {
        this.productList = this.firebase.list('products');
        return this.productList.snapshotChanges();
    };
    ProductService.prototype.createProduct = function (product) {
        this.productList.push({
            brand: product.brand,
            title: product.title,
            price: product.price,
            category: product.category,
            colour: product.colour,
            size: product.size
        });
    };
    ProductService.prototype.editProduct = function (product) {
        this.form.setValue(product);
    };
    ProductService.prototype.updateProduct = function (product) {
        this.productList.update(product.$key, {
            brand: product.brand,
            title: product.title,
            price: product.price,
            category: product.category,
            colour: product.colour,
            size: product.size
        });
    };
    ProductService.prototype.deleteProduct = function ($key) {
        this.productList.remove($key);
    };
    ProductService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        var totalPages = Math.ceil(totalItems / pageSize);
        var startPage, endPage;
        if (totalPages <= 5) {
            startPage = 1;
            endPage = totalPages;
        }
        else {
            if (currentPage <= 3) {
                startPage = 1;
                endPage = 5;
            }
            else if (currentPage + 1 >= totalPages) {
                startPage = totalPages - 4;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 2;
                endPage = currentPage + 2;
            }
        }
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        var pages = underscore__WEBPACK_IMPORTED_MODULE_1__["range"](startPage, endPage + 1);
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/search.pipe.ts":
/*!********************************!*\
  !*** ./src/app/search.pipe.ts ***!
  \********************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (products, value, label) {
        if (!products)
            return [];
        if (!value)
            return products;
        if (value == '' || value == null)
            return [];
        return products.filter(function (e) { return e[label].toLowerCase().indexOf(value) > -1; });
    };
    SearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyADhs-ytK5xe0O9fGBruSHNOmvekL54FQg",
        authDomain: "mycruddata.firebaseapp.com",
        databaseURL: "https://mycruddata.firebaseio.com",
        projectId: "mycruddata",
        storageBucket: "mycruddata.appspot.com",
        messagingSenderId: "916331688147"
    }
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\Angular-5\UPLOAD\angular-crud\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map