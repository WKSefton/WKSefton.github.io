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
		var e = new Error('Cannot find module "' + req + '".');
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

module.exports = "<app-menu></app-menu>\n<svg-deck [fill]=\"'darkblue'\"></svg-deck>"

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
    }
    AppComponent.prototype.ngOnInit = function () {
    };
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
/* harmony import */ var _svg_deck_svg_deck_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg-deck/svg-deck.module */ "./src/app/svg-deck/svg-deck.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _svg_deck_svg_deck_module__WEBPACK_IMPORTED_MODULE_1__["DeckModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='row'>\n  <nav class=\"col navbar navbar-dark bg-dark rounded shadow p-3 text-center\">\n    <h2 class='text-white ml-4'>SVG CARDS</h2>\n         \n  </nav>\n</div>\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
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

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/svg-cards/svg-cards.component.html":
/*!****************************************************!*\
  !*** ./src/app/svg-cards/svg-cards.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style='display:inline-block;' class='m-3' [attr.height]=\"height\" [attr.width]=\"width\">\n    <div class='svgcard' (click)='toggleState()' [@flipState]='state'>\n        <div class='back'>\n            <svg [attr.height]=\"height\" [attr.width]=\"width\" viewBox=\"0 0 169.075 244.640\">\n                <use [attr.href]=\"'assets/svg-cards-indented.svg#' + back\" [attr.fill]='fill' />\n            </svg>\n        </div>\n        <div class='face'>\n            <svg [attr.height]=\"height\" [attr.width]=\"width\" viewBox=\"0 0 169.075 244.640\">\n                <use [attr.href]=\"'assets/svg-cards-indented.svg#' + card\" />\n            </svg>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/svg-cards/svg-cards.component.ts":
/*!**************************************************!*\
  !*** ./src/app/svg-cards/svg-cards.component.ts ***!
  \**************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.card = 'spade_1';
        this.scale = 1;
        this.state = 'face';
        this.back = 'back';
    }
    CardComponent.prototype.ngOnInit = function () {
        this.height = this.scale * 244.640;
        this.width = this.scale * 169.075;
    };
    CardComponent.prototype.toggleState = function () {
        this.state = this.state === 'back' ? 'face' : 'back';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "card", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "fill", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CardComponent.prototype, "scale", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "state", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "back", void 0);
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'svg-card',
            template: __webpack_require__(/*! ./svg-cards.component.html */ "./src/app/svg-cards/svg-cards.component.html"),
            styles: [
                "\n    .svgcard{\n      transform-style: preserve-3d;\n      position: relative;\n    }\n    .face{\n      backface-visibility: hidden;\n    }\n    .back{\n      position: absolute;\n      backface-visibility: hidden;\n      transform: rotateY(180deg);\n    }\n    "
            ],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flipState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('face', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: 'rotateY(0deg)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('back', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: 'rotateY(180deg)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('face => back', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1000ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('back => face', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1000ms ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/svg-cards/svg-cards.module.ts":
/*!***********************************************!*\
  !*** ./src/app/svg-cards/svg-cards.module.ts ***!
  \***********************************************/
/*! exports provided: SVGCardsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGCardsModule", function() { return SVGCardsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _svg_cards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svg-cards.component */ "./src/app/svg-cards/svg-cards.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SVGCardsModule = /** @class */ (function () {
    function SVGCardsModule() {
    }
    SVGCardsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _svg_cards_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]
            ],
            providers: [],
            exports: [_svg_cards_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]]
        })
    ], SVGCardsModule);
    return SVGCardsModule;
}());



/***/ }),

/***/ "./src/app/svg-deck/svg-deck.component.css":
/*!*************************************************!*\
  !*** ./src/app/svg-deck/svg-deck.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/svg-deck/svg-deck.component.html":
/*!**************************************************!*\
  !*** ./src/app/svg-deck/svg-deck.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='container'>\n  <div class=\"row justify-content-center\">\n\n    <div class=\"input-group mb-3\">\n      <div class=\"input-group-prepend w-3\">\n        <button class=\"btn btn-warning\" type=\"button\" (click)='setFill()'> Set Color </button>\n      </div>\n      <input type=\"text\" class=\"form-control\" type=\"text\" [(ngModel)]='fill' />\n    </div>\n\n    <div class=\"input-group mb-3\">\n      <div class=\"input-group-prepend w-3\">\n        <button class=\"btn btn-warning\" type=\"button\" (click)='setScale()'> Set Scale </button>\n      </div>\n      <input type=\"text\" class=\"form-control\" step=\".125\" type=\"number\" [(ngModel)]='scale' />\n    </div>\n\n    <div class=\"input-group mb-3\">\n      <div class=\"input-group-prepend\">\n        <button class=\"btn btn-warning\" type=\"button\" (click)='setSize()'>Deck Size</button>\n      </div>\n      <input type=\"text\" class=\"form-control\" step=\"5\" max=\"500\" onwheel type=\"number\" [(ngModel)]='deckSize' />\n    </div>\n\n\n    <button class='btn btn-primary m-1' (click)='getCard()'>Get Card</button>\n    <button class='btn btn-warning m-1' (click)='toggleBack()'>Toggle Back Type</button>\n    <button class='btn btn-warning m-1' (click)='toggleFace()'>Toggle Back/Face</button>\n\n    <button class='btn btn-danger m-1' (click)='resetCards()'>Reset Deck</button>\n  </div>\n\n</div>\n<div class=\"row\">\n\n  <svg-card *ngFor='let card of deck' class='col m-2' [scale]='scale' [card]='card' [fill]='fill' [state]='state' [back]='back'></svg-card>\n</div>\n"

/***/ }),

/***/ "./src/app/svg-deck/svg-deck.component.ts":
/*!************************************************!*\
  !*** ./src/app/svg-deck/svg-deck.component.ts ***!
  \************************************************/
/*! exports provided: DeckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeckComponent", function() { return DeckComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _svg_deck_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg-deck.service */ "./src/app/svg-deck/svg-deck.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeckComponent = /** @class */ (function () {
    //DeckService injected
    function DeckComponent(_deckService) {
        this._deckService = _deckService;
        //default values set for inputs
        this.scale = 1;
        this.fill = 'red';
        this.state = 'face';
        this.back = 'back';
        this.deckSize = 15;
        //deck array of current cards in the component
        this.deck = [];
    }
    DeckComponent.prototype.ngOnInit = function () {
        var _this = this;
        //sends scale/fill/deckSize to the service
        this.setScale();
        this.setFill();
        this.setSize();
        //subscribes to the deck service
        this._deckService.scale.subscribe(function (data) { return _this.scale = data; }, function (error) { return console.log(error); });
        this._deckService.deckSize.subscribe(function (data) { return _this.deckSize = data; }, function (error) { return console.log(error); });
        this._deckService.fill.subscribe(function (data) { return _this.fill = data; }, function (error) { return console.log(error); });
        this._deckService.dealCard.subscribe(function (data) { return _this.deck.push(data); }, function (error) { return console.log(error); });
        //clears cards
        this.resetCards();
    };
    //sets the deckSize in the service and gets random cards
    DeckComponent.prototype.setSize = function () {
        var _this = this;
        if (this.deckSize > 1000) {
            return;
        }
        this.resetCards();
        setTimeout(function () {
            _this._deckService.setDeckSize(_this.deckSize);
            for (var index = 0; index < _this.deckSize; index++) {
                _this.getCard();
            }
        }, 1000);
    };
    //toggles between back and alternative-back
    DeckComponent.prototype.toggleBack = function () {
        if (this.back == 'back') {
            this.back = 'alternate-back';
        }
        else {
            this.back = 'back';
        }
    };
    //toggles the face or back animation state
    DeckComponent.prototype.toggleFace = function () {
        if (this.state == 'face') {
            this.state = 'back';
        }
        else {
            this.state = 'face';
        }
    };
    DeckComponent.prototype.getCard = function () {
        this._deckService.getCard();
    };
    DeckComponent.prototype.setScale = function () {
        this._deckService.setScale(this.scale);
    };
    DeckComponent.prototype.setFill = function () {
        this._deckService.setFill(this.fill);
    };
    DeckComponent.prototype.resetCards = function () {
        this.deck = [];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DeckComponent.prototype, "scale", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DeckComponent.prototype, "fill", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DeckComponent.prototype, "state", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DeckComponent.prototype, "back", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DeckComponent.prototype, "deckSize", void 0);
    DeckComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'svg-deck',
            template: __webpack_require__(/*! ./svg-deck.component.html */ "./src/app/svg-deck/svg-deck.component.html"),
            styles: [__webpack_require__(/*! ./svg-deck.component.css */ "./src/app/svg-deck/svg-deck.component.css")]
        }),
        __metadata("design:paramtypes", [_svg_deck_service__WEBPACK_IMPORTED_MODULE_1__["DeckService"]])
    ], DeckComponent);
    return DeckComponent;
}());



/***/ }),

/***/ "./src/app/svg-deck/svg-deck.module.ts":
/*!*********************************************!*\
  !*** ./src/app/svg-deck/svg-deck.module.ts ***!
  \*********************************************/
/*! exports provided: DeckModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeckModule", function() { return DeckModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _svg_cards_svg_cards_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../svg-cards/svg-cards.module */ "./src/app/svg-cards/svg-cards.module.ts");
/* harmony import */ var _svg_deck_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./svg-deck.service */ "./src/app/svg-deck/svg-deck.service.ts");
/* harmony import */ var _svg_deck_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./svg-deck.component */ "./src/app/svg-deck/svg-deck.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DeckModule = /** @class */ (function () {
    function DeckModule() {
    }
    DeckModule_1 = DeckModule;
    DeckModule.forRoot = function () {
        return {
            ngModule: DeckModule_1,
            providers: [_svg_deck_service__WEBPACK_IMPORTED_MODULE_4__["DeckService"]]
        };
    };
    DeckModule = DeckModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _svg_cards_svg_cards_module__WEBPACK_IMPORTED_MODULE_3__["SVGCardsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            declarations: [
                _svg_deck_component__WEBPACK_IMPORTED_MODULE_5__["DeckComponent"]
            ],
            exports: [_svg_deck_component__WEBPACK_IMPORTED_MODULE_5__["DeckComponent"]]
        })
    ], DeckModule);
    return DeckModule;
    var DeckModule_1;
}());



/***/ }),

/***/ "./src/app/svg-deck/svg-deck.service.ts":
/*!**********************************************!*\
  !*** ./src/app/svg-deck/svg-deck.service.ts ***!
  \**********************************************/
/*! exports provided: DeckService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeckService", function() { return DeckService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeckService = /** @class */ (function () {
    //deck array created in constructor
    function DeckService() {
        //BehaviourSubjects and Observables
        this.localCard = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.dealCard = this.localCard.asObservable();
        this.localScale = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.scale = this.localScale.asObservable();
        this.localFill = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.fill = this.localFill.asObservable();
        this.localDeckSize = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.deckSize = this.localDeckSize.asObservable();
        this.cards = {
            suit: ['club', 'diamond', 'heart', 'spade'],
            rank: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king']
        };
        this.createDeck();
    }
    //sets the number of cards to be drawn
    DeckService.prototype.setDeckSize = function (number) {
        this.localDeckSize.next(number);
    };
    //set scale of the cards keeping ratio in tact
    DeckService.prototype.setScale = function (value) {
        this.localScale.next(value);
    };
    //sets the color fill for the back side of the card
    DeckService.prototype.setFill = function (fill) {
        this.localFill.next(fill);
    };
    //draws a random card out of the deck array
    DeckService.prototype.getCard = function () {
        this.localCard.next(this.deck[Math.floor(Math.random() * 52)]);
    };
    //creates the deck array
    DeckService.prototype.createDeck = function () {
        this.deck = [];
        for (var _i = 0, _a = this.cards.suit; _i < _a.length; _i++) {
            var suit = _a[_i];
            for (var _b = 0, _c = this.cards.rank; _b < _c.length; _b++) {
                var rank = _c[_b];
                this.deck.push(suit + '_' + rank);
            }
        }
        this.deck.push('joker_black');
        this.deck.push('joker_red');
    };
    DeckService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DeckService);
    return DeckService;
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
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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

module.exports = __webpack_require__(/*! C:\Repos\Angular\Cards\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map