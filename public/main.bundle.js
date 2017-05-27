webpackJsonp([1,5],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.authenticateAccount = function (account) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/account/authenticate', account, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('api/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        this.loadToken();
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.registerAccount = function (account) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/account/register', account, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeAccountData = function (token, account) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('account', JSON.stringify(account));
        this.authToken = token;
        this.account = account;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.account = null;
        localStorage.clear();
    };
    AuthService.prototype.loadIp = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('api/account/ip', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 218:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 218;


/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(234);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(360),
        styles: [__webpack_require__(343)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_materialize__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts_ng2_charts__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_chart_js_src_chart_js__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_chart_js_src_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_chart_js_src_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_validate_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_poll_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__guards_loggedIn_guard__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_navbar_navbar_component__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_home_home_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_login_login_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_register_register_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_profile_profile_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_poll_detail_poll_detail_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_poll_create_poll_create_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_poll_create_button_poll_create_button_component__ = __webpack_require__(233);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_poll_detail_poll_detail_component__["a" /* PollDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_poll_create_poll_create_component__["a" /* PollCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_poll_create_button_poll_create_button_component__["a" /* PollCreateButtonComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_materialize__["a" /* MaterializeModule */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_7_ng2_charts_ng2_charts__["ChartsModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_10__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_11__services_poll_service__["a" /* PollService */],
            __WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_13__guards_loggedIn_guard__["a" /* LoggedInGuard */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__guards_auth_guard__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_loggedIn_guard__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_register_register_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_profile_profile_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_poll_detail_poll_detail_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_poll_create_poll_create_component__ = __webpack_require__(71);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Router; });









var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__["a" /* LoginComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_loggedIn_guard__["a" /* LoggedInGuard */]]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_5__components_register_register_component__["a" /* RegisterComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_loggedIn_guard__["a" /* LoggedInGuard */]]
    },
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_6__components_profile_profile_component__["a" /* ProfileComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'polls/new',
        component: __WEBPACK_IMPORTED_MODULE_8__components_poll_create_poll_create_component__["a" /* PollCreateComponent */]
    },
    {
        path: 'polls/:id',
        component: __WEBPACK_IMPORTED_MODULE_7__components_poll_detail_poll_detail_component__["a" /* PollDetailComponent */]
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */]
    }
];
var Router = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(auth, router, flashMessage) {
        this.auth = auth;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.auth.logout();
        this.flashMessage.show('You are now logged out', { cssClass: 'alert alert-success', timeout: 3000 });
        this.router.navigate(['/']);
        return false;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(363),
        styles: [__webpack_require__(346)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PollCreateButtonComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PollCreateButtonComponent = (function () {
    function PollCreateButtonComponent(authService) {
        this.authService = authService;
    }
    PollCreateButtonComponent.prototype.ngOnInit = function () {
    };
    return PollCreateButtonComponent;
}());
PollCreateButtonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-poll-create-button',
        template: __webpack_require__(364),
        styles: [__webpack_require__(347)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], PollCreateButtonComponent);

var _a;
//# sourceMappingURL=poll-create-button.component.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PollService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PollService = (function () {
    function PollService(http) {
        this.http = http;
    }
    PollService.prototype.addPoll = function (newPoll) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post("api/profile/newpoll", newPoll, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PollService.prototype.getAllPolls = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("api/polls", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PollService.prototype.getIndividualPoll = function (pollId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("api/polls/" + pollId, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PollService.prototype.syncVote = function (pollId, updatedPoll) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        return this.http.post("api/polls/" + pollId, updatedPoll, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PollService.prototype.deletePoll = function (pollId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete("api/polls/" + pollId, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PollService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    return PollService;
}());
PollService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], PollService);

var _a;
//# sourceMappingURL=poll.service.js.map

/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 91,
	"./af.js": 91,
	"./ar": 98,
	"./ar-dz": 92,
	"./ar-dz.js": 92,
	"./ar-kw": 93,
	"./ar-kw.js": 93,
	"./ar-ly": 94,
	"./ar-ly.js": 94,
	"./ar-ma": 95,
	"./ar-ma.js": 95,
	"./ar-sa": 96,
	"./ar-sa.js": 96,
	"./ar-tn": 97,
	"./ar-tn.js": 97,
	"./ar.js": 98,
	"./az": 99,
	"./az.js": 99,
	"./be": 100,
	"./be.js": 100,
	"./bg": 101,
	"./bg.js": 101,
	"./bn": 102,
	"./bn.js": 102,
	"./bo": 103,
	"./bo.js": 103,
	"./br": 104,
	"./br.js": 104,
	"./bs": 105,
	"./bs.js": 105,
	"./ca": 106,
	"./ca.js": 106,
	"./cs": 107,
	"./cs.js": 107,
	"./cv": 108,
	"./cv.js": 108,
	"./cy": 109,
	"./cy.js": 109,
	"./da": 110,
	"./da.js": 110,
	"./de": 113,
	"./de-at": 111,
	"./de-at.js": 111,
	"./de-ch": 112,
	"./de-ch.js": 112,
	"./de.js": 113,
	"./dv": 114,
	"./dv.js": 114,
	"./el": 115,
	"./el.js": 115,
	"./en-au": 116,
	"./en-au.js": 116,
	"./en-ca": 117,
	"./en-ca.js": 117,
	"./en-gb": 118,
	"./en-gb.js": 118,
	"./en-ie": 119,
	"./en-ie.js": 119,
	"./en-nz": 120,
	"./en-nz.js": 120,
	"./eo": 121,
	"./eo.js": 121,
	"./es": 123,
	"./es-do": 122,
	"./es-do.js": 122,
	"./es.js": 123,
	"./et": 124,
	"./et.js": 124,
	"./eu": 125,
	"./eu.js": 125,
	"./fa": 126,
	"./fa.js": 126,
	"./fi": 127,
	"./fi.js": 127,
	"./fo": 128,
	"./fo.js": 128,
	"./fr": 131,
	"./fr-ca": 129,
	"./fr-ca.js": 129,
	"./fr-ch": 130,
	"./fr-ch.js": 130,
	"./fr.js": 131,
	"./fy": 132,
	"./fy.js": 132,
	"./gd": 133,
	"./gd.js": 133,
	"./gl": 134,
	"./gl.js": 134,
	"./gom-latn": 135,
	"./gom-latn.js": 135,
	"./he": 136,
	"./he.js": 136,
	"./hi": 137,
	"./hi.js": 137,
	"./hr": 138,
	"./hr.js": 138,
	"./hu": 139,
	"./hu.js": 139,
	"./hy-am": 140,
	"./hy-am.js": 140,
	"./id": 141,
	"./id.js": 141,
	"./is": 142,
	"./is.js": 142,
	"./it": 143,
	"./it.js": 143,
	"./ja": 144,
	"./ja.js": 144,
	"./jv": 145,
	"./jv.js": 145,
	"./ka": 146,
	"./ka.js": 146,
	"./kk": 147,
	"./kk.js": 147,
	"./km": 148,
	"./km.js": 148,
	"./kn": 149,
	"./kn.js": 149,
	"./ko": 150,
	"./ko.js": 150,
	"./ky": 151,
	"./ky.js": 151,
	"./lb": 152,
	"./lb.js": 152,
	"./lo": 153,
	"./lo.js": 153,
	"./lt": 154,
	"./lt.js": 154,
	"./lv": 155,
	"./lv.js": 155,
	"./me": 156,
	"./me.js": 156,
	"./mi": 157,
	"./mi.js": 157,
	"./mk": 158,
	"./mk.js": 158,
	"./ml": 159,
	"./ml.js": 159,
	"./mr": 160,
	"./mr.js": 160,
	"./ms": 162,
	"./ms-my": 161,
	"./ms-my.js": 161,
	"./ms.js": 162,
	"./my": 163,
	"./my.js": 163,
	"./nb": 164,
	"./nb.js": 164,
	"./ne": 165,
	"./ne.js": 165,
	"./nl": 167,
	"./nl-be": 166,
	"./nl-be.js": 166,
	"./nl.js": 167,
	"./nn": 168,
	"./nn.js": 168,
	"./pa-in": 169,
	"./pa-in.js": 169,
	"./pl": 170,
	"./pl.js": 170,
	"./pt": 172,
	"./pt-br": 171,
	"./pt-br.js": 171,
	"./pt.js": 172,
	"./ro": 173,
	"./ro.js": 173,
	"./ru": 174,
	"./ru.js": 174,
	"./sd": 175,
	"./sd.js": 175,
	"./se": 176,
	"./se.js": 176,
	"./si": 177,
	"./si.js": 177,
	"./sk": 178,
	"./sk.js": 178,
	"./sl": 179,
	"./sl.js": 179,
	"./sq": 180,
	"./sq.js": 180,
	"./sr": 182,
	"./sr-cyrl": 181,
	"./sr-cyrl.js": 181,
	"./sr.js": 182,
	"./ss": 183,
	"./ss.js": 183,
	"./sv": 184,
	"./sv.js": 184,
	"./sw": 185,
	"./sw.js": 185,
	"./ta": 186,
	"./ta.js": 186,
	"./te": 187,
	"./te.js": 187,
	"./tet": 188,
	"./tet.js": 188,
	"./th": 189,
	"./th.js": 189,
	"./tl-ph": 190,
	"./tl-ph.js": 190,
	"./tlh": 191,
	"./tlh.js": 191,
	"./tr": 192,
	"./tr.js": 192,
	"./tzl": 193,
	"./tzl.js": 193,
	"./tzm": 195,
	"./tzm-latn": 194,
	"./tzm-latn.js": 194,
	"./tzm.js": 195,
	"./uk": 196,
	"./uk.js": 196,
	"./ur": 197,
	"./ur.js": 197,
	"./uz": 199,
	"./uz-latn": 198,
	"./uz-latn.js": 198,
	"./uz.js": 199,
	"./vi": 200,
	"./vi.js": 200,
	"./x-pseudo": 201,
	"./x-pseudo.js": 201,
	"./yo": 202,
	"./yo.js": 202,
	"./zh-cn": 203,
	"./zh-cn.js": 203,
	"./zh-hk": 204,
	"./zh-hk.js": 204,
	"./zh-tw": 205,
	"./zh-tw.js": 205
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 352;


/***/ }),

/***/ 360:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 361:
/***/ (function(module, exports) {

module.exports = "<app-poll-create-button></app-poll-create-button>\n<h2 class=\"header center-align\">All polls</h2>\n<div *ngFor=\"let poll of polls\">\n  <div (click)=goToDetailPage(poll) class=\"row\">\n    <div class=\"poll col center-align s12 m8 offset-m2 l6 offset-l3 card-panel grey lighten-5 z-depth-1\">\n      <p>\n        {{poll.title}}\n      </p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 362:
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n  <div class=\"row\">\n    <form (ngSubmit)=\"onLoginSubmit()\" class=\"col s12\">\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <input [(ngModel)]=\"username\" placeholder=\"Username\" required name=\"username\" type=\"text\" [ngClass]=\"isValid(validUsername)\" class=\"validate\">\n          <label for=\"username\">Username</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <input [(ngModel)]=\"password\" name=\"password\" required type=\"password\" [ngClass]=\"isValid(validPassword)\" class=\"validate\">\n          <label for=\"password\">Password</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col s12\">\n          <button type=\"submit\" class=\"btn waves-effect waves-light\">Login\n            <i class=\"material-icons right\">send</i>\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ 363:
/***/ (function(module, exports) {

module.exports = "<nav>\n  <div class=\"nav-wrapper\">\n    <a routerLink='' class=\"brand-logo\">Logo</a>\n    <a href=\"#\" data-activates=\"mobile-demo\" materialize=\"sideNav\" [materializeParams]=\"[{closeOnClick:true}]\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\n    <ul class=\"right hide-on-med-and-down\">\n      <li *ngIf=\"auth.loggedIn()\" routerLinkActive=\"active\"><a routerLink='profile'>Profile</a></li>\n      <li *ngIf=\"!auth.loggedIn()\" routerLinkActive=\"active\"><a routerLink='login'>Login</a></li>\n      <li *ngIf=\"!auth.loggedIn()\" routerLinkActive=\"active\"><a routerLink='register'>Register</a></li>\n      <li *ngIf=\"auth.loggedIn()\"><a (click)=\"onLogoutClick()\">Logout</a></li>\n    </ul>\n    <ul class=\"side-nav\" id=\"mobile-demo\">\n      <li *ngIf=\"auth.loggedIn()\" routerLinkActive=\"active\"><a routerLink='profile'>Profile</a></li>\n      <li *ngIf=\"!auth.loggedIn()\" routerLinkActive=\"active\"><a routerLink='login'>Login</a></li>\n      <li *ngIf=\"!auth.loggedIn()\" routerLinkActive=\"active\"><a routerLink='register'>Register</a></li>\n      <li *ngIf=\"auth.loggedIn()\"><a (click)=\"onLogoutClick()\">Logout</a></li>\n    </ul>\n  </div>\n</nav>  "

/***/ }),

/***/ 364:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"authService.loggedIn()\" class=\"fixed-action-btn\">\n  <a routerLink=\"/polls/new\" materialize=\"tooltip\" class=\"tooltipped waves-effect waves-light btn btn-floating btn-large green\" data-position=\"left\"\n    data-delay=\"50\" data-tooltip=\"Create new poll\">\n    <i class=\"large material-icons\">add</i>\n  </a>\n</div>"

/***/ }),

/***/ 365:
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n  <div class=\"row\">\n    <form (ngSubmit)=\"onPollSubmit()\" class=\"col s12\">\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <input [(ngModel)]=\"title\" placeholder=\"Title of your poll\" required name=\"title\" type=\"text\" [ngClass]=\"isValid(title)\" class=\"validate\">\n          <label for=\"title\">Title</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <!--<div class=\"input-field col s12\">\n          <input [(ngModel)]=\"firstOption\" (focus)=\"onFirstOptionFocus()\" (blur)=\"onBlur()\" name=\"firstOption\" placeholder=\"Option 1\" required [ngClass]=\"isValid(options[firstOption])\">\n        </div>-->\n        <div *ngFor=\"let option of labels; let i = index; trackBy: trackByIndex\" class=\"input-field col s12\">\n          <input [(ngModel)]=\"labels[i]\" name=\"{{i}}\" placeholder=\"Option {{i+1}}\" [ngClass]=\"isValid(labels[i])\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col s12\">\n          <button type=\"button\" (click)=\"addOption()\" class=\"btn waves-effect waves-light red lighten-2\">Add Option\n          </button>\n          <button type=\"submit\" class=\"btn waves-effect waves-light\">Submit\n            <i class=\"material-icons right\">send</i>\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ 366:
/***/ (function(module, exports) {

module.exports = "<div class=\"poll-detail__section\" *ngIf=\"pollToDisplay\">\n  <div class=\"row\">\n    <div class=\"col center-align s12 m6\">\n      <h2 class=\"header center-align\">{{pollToDisplay.title}}</h2>\n      <div class=\"input-field\" *ngIf=\"pollToDisplay && !alreadyVoted\">\n        <form (ngSubmit)=\"onVoteSubmit()\">\n          <select [(ngModel)]=\"selectedOption\" [ngModelOptions]=\"{standalone: true}\" materialize=\"material_select\" [materializeSelectOptions]=\"pollToDisplay.labels\">\n            <option value=\"\" disabled selected>Choose your option</option>\n            <option *ngFor=\"let option of pollToDisplay.labels; let i = index\" [ngValue]=\"i\" name=\"option\">{{option}}</option>\n          </select>\n          <label>I'd like to vote for:</label>\n          <button type=\"submit\" class=\"btn waves-effect waves-light poll-detail__btn\">Vote\n            <i class=\"material-icons right\">send</i>\n          </button>\n        </form>\n      </div>\n      <div class=\"card-panel red-easy\" *ngIf=\"alreadyVoted\">\n        <h5 class=\"white-text\">You already voted on this poll</h5>\n      </div>\n\n    </div>\n    <div class=\"col s12 m6\">\n      <canvas baseChart class=\"poll-small\" [data]=pollToDisplay.votes [labels]=pollToDisplay.labels chartType=\"doughnut\">\n      </canvas>\n      <div class=\"fixed-action-btn horizontal\">\n        <a class=\"btn-floating btn-large red\">\n          <i class=\"large material-icons\">mode_edit</i>\n        </a>\n        <ul>\n          <li>\n            <a materialize=\"tooltip\" class=\"tooltipped btn-floating green modal-trigger\" (click)=\"openAddModal()\" data-position=\"top\"\n              data-delay=\"50\" data-tooltip=\"Add new option\"><i class=\"material-icons\">add</i></a>\n          </li>\n          <li>\n            <a materialize=\"tooltip\" class=\"tooltipped btn-floating blue\" (click)=\"shareOnTwitter()\" data-position=\"top\" data-delay=\"50\"\n              data-tooltip=\"Share via twitter\"><i class=\"material-icons\">forward</i></a>\n          </li>\n          <li>\n            <a materialize=\"tooltip\" class=\"tooltipped btn-floating red modal-trigger\" (click)=\"openDeleteModal()\" data-position=\"top\"\n              data-delay=\"50\" data-tooltip=\"Delete this poll\"><i class=\"material-icons\">remove</i></a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Add Option Modal Structure -->\n<div id=\"addModal\" class=\"modal bottom-sheet\" materialize=\"modal\" [materializeParams]=\"[{dismissible: false}]\" [materializeActions]=\"addModalActions\">\n  <div class=\"modal-content\">\n    <!--<h4>Add new option</h4>-->\n    <div class=\"input-field\">\n      <form (ngSubmit)=\"onOptionSubmit()\">\n        <input [(ngModel)]=\"newOption\" name=\"newOption\" placeholder=\"Please enter the option you'd like to add\" type=\"text\">\n        <label for=\"newOption\">New option</label>\n        <div class=\"modal-footer\">\n          <a class=\"waves-effect waves-red btn-flat\" (click)=\"closeAddModal()\">Dismiss</a>\n          <button type=\"submit\" class=\"btn modal-action modal-close waves-effect waves-green btn-flat\">Add</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<!-- Delete Poll Modal Structure -->\n<div id=\"deleteModal\" class=\"modal bottom-sheet\" materialize=\"modal\" [materializeParams]=\"[{dismissible: false}]\" [materializeActions]=\"deleteModalActions\">\n  <div class=\"modal-content\">\n    <h4>Do you really want to delete this poll?</h4>\n  </div>\n  <div class=\"modal-footer\">\n    <a class=\"waves-effect waves-green btn-flat\" (click)=\"closeDeleteModal()\">No</a>\n    <a class=\"modal-action modal-close waves-effect waves-green btn-flat\" (click)=\"deletePoll()\">Yes</a>  </div>  </div>"

/***/ }),

/***/ 367:
/***/ (function(module, exports) {

module.exports = "<app-poll-create-button></app-poll-create-button>\n<div *ngIf=\"polls\">\n  <div *ngIf=\"polls.length\">\n    <h2 class=\"header center-align\">Your polls</h2>\n    <div *ngFor=\"let poll of polls\">\n      <div (click)=goToDetailPage(poll) class=\"row\">\n        <div class=\"poll col center-align s12 m8 offset-m2 l6 offset-l3 card-panel grey lighten-5 z-depth-1\">\n          <p>\n            {{poll.title}}\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"!polls.length\">\n    <h2>Nothing to see here...</h2>\n    <h2>Click below to create a new poll</h2>\n  </div>\n</div>"

/***/ }),

/***/ 368:
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n  <div class=\"row\">\n    <form (ngSubmit)=\"onRegisterSubmit()\" class=\"col s12\">\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <input [(ngModel)]=\"username\" placeholder=\"Username\" required name=\"username\" type=\"text\" [ngClass]=\"isValid(validUsername)\" class=\"validate\">\n          <label for=\"username\">Username</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <input [(ngModel)]=\"password\" name=\"password\" required type=\"password\" class=\"validate\">\n          <label for=\"password\">Password</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <input [(ngModel)]=\"email\" name=\"email\" required type=\"email\" [ngClass]=\"isValid(validEmail)\">\n          <label for=\"email\">Email</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col s12\">\n          <button type=\"submit\" class=\"btn waves-effect waves-light\">Submit\n            <i class=\"material-icons right\">send</i>\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateLogin = function (account) {
        if (account.username == undefined || account.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateRegister = function (account) {
        if (account.username == undefined || account.password == undefined || account.email == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    return ValidateService;
}());
ValidateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(219);


/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_poll_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(pollService, authService, router) {
        this.pollService = pollService;
        this.authService = authService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pollService.getAllPolls().subscribe(function (res) {
            _this.polls = res.polls;
        });
    };
    HomeComponent.prototype.goToDetailPage = function (clickedPoll) {
        this.router.navigate(['polls', clickedPoll._id]);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(361),
        styles: [__webpack_require__(344)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_poll_service__["a" /* PollService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_poll_service__["a" /* PollService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(validateService, flashMessage, auth, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.auth = auth;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.isValid = function (value) {
        if (value == undefined)
            return;
        return value ? "custom-valid" : "custom-invalid";
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var account = {
            username: this.username,
            password: this.password
        };
        this.validPassword = undefined;
        this.validUsername = undefined;
        // Required Fields
        if (!this.validateService.validateLogin(account)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert alert-danger', timeout: 3000 });
            return false;
        }
        this.auth.authenticateAccount(account).subscribe(function (data) {
            if (data.success && data.status === 0) {
                _this.flashMessage.show('You are now logged in', { cssClass: 'alert alert-success', timeout: 3000 });
                _this.auth.storeAccountData(data.token, data.account);
                _this.router.navigate(['/']);
            }
            else if (data.status === 2) {
                _this.flashMessage.show('Wrong username', { cssClass: 'alert alert-danger', timeout: 3000 });
                _this.validUsername = false;
                _this.router.navigate(['/login']);
            }
            else if (data.status === 1) {
                _this.flashMessage.show('Wrong password', { cssClass: 'alert alert-danger', timeout: 3000 });
                _this.validPassword = false;
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert alert-danger', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(362),
        styles: [__webpack_require__(345)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_poll_service__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PollCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PollCreateComponent = (function () {
    function PollCreateComponent(router, pollService, flashMessage) {
        this.router = router;
        this.pollService = pollService;
        this.flashMessage = flashMessage;
        this.labels = [""];
        this.votes = [0];
    }
    PollCreateComponent.prototype.ngOnInit = function () {
        this.author = JSON.parse(localStorage.getItem('account')).username;
    };
    PollCreateComponent.prototype.isValid = function (value) {
        // //   if (value == undefined) return;
        //   return value ? "custom-valid" : "custom-invalid";
    };
    PollCreateComponent.prototype.onPollSubmit = function () {
        var _this = this;
        console.log(this.labels);
        console.log('objectsubmit');
        var poll = {
            title: this.title,
            author: this.author,
            labels: this.labels,
            votes: this.votes,
            alreadyVoted: []
        };
        this.pollService.addPoll(poll).subscribe(function (res) {
            console.log(res);
            if (res.success) {
                _this.router.navigate(["/polls/" + res.poll._id]);
                return;
            }
            else {
                _this.flashMessage.show(res.msg, { cssClass: 'alert alert-danger', timeout: 3000 });
                return;
            }
        });
    };
    PollCreateComponent.prototype.trackByIndex = function (index) {
        return index;
    };
    PollCreateComponent.prototype.addOption = function () {
        if (this.labels.length === 12) {
            this.flashMessage.show('You can only add up to 12 options', { cssClass: 'alert alert-danger', timeout: 3000 });
            return;
        }
        this.labels.push("");
        this.votes.push(0);
    };
    return PollCreateComponent;
}());
PollCreateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-poll-create',
        template: __webpack_require__(365),
        styles: [__webpack_require__(348)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_poll_service__["a" /* PollService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_poll_service__["a" /* PollService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], PollCreateComponent);

var _a, _b, _c;
//# sourceMappingURL=poll-create.component.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_poll_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PollDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// TO-DO :
//         - add new options to poll if logged in
//         - delete poll if author
var PollDetailComponent = (function () {
    function PollDetailComponent(pollService, authService, flashMessage, location, router, route) {
        this.pollService = pollService;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.location = location;
        this.router = router;
        this.route = route;
        this.userIsAuthenticated = false;
        this.userIsAuthor = false;
        this.addModalActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.deleteModalActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.globalActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.params = [];
    }
    PollDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (urlParameters) {
            _this.pollId = urlParameters["id"];
        });
        this.pollService.getIndividualPoll(this.pollId).subscribe(function (res) {
            _this.pollToDisplay = res.poll;
            _this.checkAlreadyVoted();
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    PollDetailComponent.prototype.loadUser = function (callback) {
        var _this = this;
        // if user is logged in
        if (localStorage.getItem('account')) {
            this.user = JSON.parse(localStorage.getItem('account')).username;
            this.userIsAuthenticated = true;
            if (this.user === this.pollToDisplay.author) {
                this.userIsAuthor = true;
            }
            return callback();
        }
        else {
            // get and store ip
            this.authService.loadIp().subscribe(function (res) {
                _this.user = res.ipAddress;
                return callback();
            });
        }
    };
    PollDetailComponent.prototype.checkAlreadyVoted = function () {
        var _this = this;
        this.loadUser(function () {
            // user hasn't voted yet
            if (_this.pollToDisplay.alreadyVoted.indexOf(_this.user) === -1
                || _this.user === 'admin') {
                _this.alreadyVoted = false;
                return false;
            }
            else {
                // user has already voted
                _this.alreadyVoted = true;
                return true;
            }
        });
    };
    PollDetailComponent.prototype.onVoteSubmit = function () {
        var _this = this;
        if (this.selectedOption >= 0) {
            // add vote and replace array with itself to force rerender
            this.pollToDisplay.votes[this.selectedOption] += 1;
            this.pollToDisplay.votes = this.pollToDisplay.votes.slice();
            // add the person that voted
            this.pollToDisplay.alreadyVoted.push(this.user);
            this.alreadyVoted = true;
            // sync poll with the poll stored in the db
            this.pollService.syncVote(this.pollToDisplay._id, { updatedPoll: this.pollToDisplay }).subscribe(function (res) {
                if (res.success) {
                    _this.flashMessage.show("Your vote (" + _this.pollToDisplay.labels[_this.selectedOption] + ") has been added", { cssClass: 'alert alert-success', timeout: 3000 });
                }
            });
        }
        else {
            this.flashMessage.show('Please choose an option', { cssClass: 'alert alert-danger', timeout: 3000 });
            return false;
        }
    };
    PollDetailComponent.prototype.onOptionSubmit = function () {
        var _this = this;
        if (this.newOption) {
            // add vote & label and replace arrays with themselves to force rerender
            this.pollToDisplay.labels.push(this.newOption);
            this.pollToDisplay.votes.push(0);
            this.pollToDisplay.labels = this.pollToDisplay.labels.slice();
            this.pollToDisplay.votes = this.pollToDisplay.votes.slice();
            // sync poll with the poll stored in the db
            this.pollService.syncVote(this.pollToDisplay._id, { updatedPoll: this.pollToDisplay }).subscribe(function (res) {
                if (res.success) {
                    _this.flashMessage.show("The option \"" + _this.newOption + "\" has been added", { cssClass: 'alert alert-success', timeout: 3000 });
                    // reset the new option field
                    _this.newOption = "";
                    // this.router.navigate([`/polls/${this.pollToDisplay._id}`]);
                }
            });
        }
        else {
            this.flashMessage.show('Please enter something', { cssClass: 'alert alert-danger', timeout: 3000 });
            return false;
        }
    };
    PollDetailComponent.prototype.deletePoll = function () {
        var _this = this;
        this.pollService.deletePoll(this.pollToDisplay._id).subscribe(function (res) {
            if (res.success) {
                _this.flashMessage.show("Your poll \"" + _this.pollToDisplay.title + "\" has been deleted", { cssClass: 'alert alert-success', timeout: 3000 });
                _this.router.navigate(["/profile"]);
            }
            else {
                _this.flashMessage.show('Something went wrong while deleteing your poll', { cssClass: 'alert alert-danger', timeout: 3000 });
                return false;
            }
        });
    };
    PollDetailComponent.prototype.shareOnTwitter = function () {
        window.open("https://twitter.com/intent/tweet?&text=" + this.pollToDisplay.title + " (" + window.location.href + ")", '_blank');
    };
    PollDetailComponent.prototype.openAddModal = function () {
        this.addModalActions.emit({ action: "modal", params: ['open'] });
    };
    PollDetailComponent.prototype.closeAddModal = function () {
        this.addModalActions.emit({ action: "modal", params: ['close'] });
    };
    PollDetailComponent.prototype.openDeleteModal = function () {
        this.deleteModalActions.emit({ action: "modal", params: ['open'] });
    };
    PollDetailComponent.prototype.closeDeleteModal = function () {
        this.deleteModalActions.emit({ action: "modal", params: ['close'] });
    };
    return PollDetailComponent;
}());
PollDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-poll',
        template: __webpack_require__(366),
        styles: [__webpack_require__(349)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_poll_service__["a" /* PollService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_poll_service__["a" /* PollService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _f || Object])
], PollDetailComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=poll-detail.component.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getProfile().subscribe(function (profile) {
            _this.polls = profile.polls;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent.prototype.goToDetailPage = function (clickedPoll) {
        this.router.navigate(['polls', clickedPoll._id]);
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(367),
        styles: [__webpack_require__(350)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, auth, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.auth = auth;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.isValid = function (value) {
        if (value == undefined)
            return;
        return value ? "custom-valid" : "custom-invalid";
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var account = {
            username: this.username,
            email: this.email,
            password: this.password
        };
        this.validUsername = undefined;
        this.validEmail = undefined;
        // Required Fields
        if (!this.validateService.validateRegister(account)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(this.email)) {
            this.validEmail = false;
            this.flashMessage.show('Please use a valid email address', { cssClass: 'alert alert-danger', timeout: 3000 });
            return false;
        }
        // Register User
        this.auth.registerAccount(account).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert alert-danger', timeout: 3000 });
                data.status === 2 ? _this.validUsername = false : null;
                _this.router.navigate(['/register']);
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(368),
        styles: [__webpack_require__(351)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.auth.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggedInGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoggedInGuard = (function () {
    function LoggedInGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    LoggedInGuard.prototype.canActivate = function () {
        if (!this.auth.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['profile']);
            return false;
        }
    };
    return LoggedInGuard;
}());
LoggedInGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], LoggedInGuard);

var _a, _b;
//# sourceMappingURL=loggedIn.guard.js.map

/***/ })

},[415]);
//# sourceMappingURL=main.bundle.js.map