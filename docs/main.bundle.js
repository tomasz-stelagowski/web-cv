webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homecv_homecv_component__ = __webpack_require__("./src/app/homecv/homecv.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__homecv_homecv_component__["a" /* HomecvComponent */]
    }, {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<cv-navbar></cv-navbar>\n<div class=\"router-outlet-placeholder\">\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ".router-outlet-placeholder {\n  margin-top: 55px;\n  height: 100%; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'cv';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cv-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_bootstrap_md__ = __webpack_require__("./node_modules/angular-bootstrap-md/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__exp_record_exp_record_component__ = __webpack_require__("./src/app/exp-record/exp-record.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__section_section_component__ = __webpack_require__("./src/app/section/section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__homecv_homecv_component__ = __webpack_require__("./src/app/homecv/homecv.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__section_item_section_item_component__ = __webpack_require__("./src/app/section-item/section-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__data_data_component__ = __webpack_require__("./src/app/data/data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__title_title_component__ = __webpack_require__("./src/app/title/title.component.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__exp_record_exp_record_component__["a" /* ExpRecordComponent */],
            __WEBPACK_IMPORTED_MODULE_6__section_section_component__["a" /* SectionComponent */],
            __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__homecv_homecv_component__["a" /* HomecvComponent */],
            __WEBPACK_IMPORTED_MODULE_9__section_item_section_item_component__["a" /* SectionItemComponent */],
            __WEBPACK_IMPORTED_MODULE_10__data_data_component__["a" /* DataComponent */],
            __WEBPACK_IMPORTED_MODULE_11__title_title_component__["a" /* TitleComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_angular_bootstrap_md__["a" /* MDBBootstrapModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
        schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NO_ERRORS_SCHEMA */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/data/data.component.html":
/***/ (function(module, exports) {

module.exports = "  <span [class.badge]=\"isNow(startDate)\"> {{startDate}} </span>\n  -\n  <span [class.badge]=\"isNow(endDate)\"> {{endDate}} </span>\n"

/***/ }),

/***/ "./src/app/data/data.component.scss":
/***/ (function(module, exports) {

module.exports = ".badge {\n  background-color: #2c3e50; }\n"

/***/ }),

/***/ "./src/app/data/data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataComponent = (function () {
    function DataComponent() {
    }
    DataComponent.prototype.isNow = function (date) {
        return date == 'now';
    };
    DataComponent.prototype.ngOnInit = function () {
    };
    return DataComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], DataComponent.prototype, "startDate", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], DataComponent.prototype, "endDate", void 0);
DataComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cv-data',
        template: __webpack_require__("./src/app/data/data.component.html"),
        styles: [__webpack_require__("./src/app/data/data.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], DataComponent);

//# sourceMappingURL=data.component.js.map

/***/ }),

/***/ "./src/app/exp-record/exp-record.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  exp-record works!\n</p>\n"

/***/ }),

/***/ "./src/app/exp-record/exp-record.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/exp-record/exp-record.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpRecordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExpRecordComponent = (function () {
    function ExpRecordComponent() {
    }
    return ExpRecordComponent;
}());
ExpRecordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cv-exp-record',
        template: __webpack_require__("./src/app/exp-record/exp-record.component.html"),
        styles: [__webpack_require__("./src/app/exp-record/exp-record.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ExpRecordComponent);

//# sourceMappingURL=exp-record.component.js.map

/***/ }),

/***/ "./src/app/homecv/homecv.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"headerwrap\">\n  <div class=\"container\">\n    <div class=\"row centered\">\n      <div class=\"col-lg-12\">\n        <h1>Tomasz Stelągowski</h1>\n        <div class=\"row\">\n          <div class=\"col row align-items-center\">\n            <h3 class=\"col text-right\">Software engineer</h3>\n          </div>\n          <div class=\"col border-left border-current\">\n            <div class=\"row\">\n              <div class=\"col-12 text-left\"><h3><i class=\"pr-3 fa fa-at\"></i>tomasz.stelagowski@gmail.com</h3></div>\n              <div class=\"col-12 text-left\"><h3><i class=\"pr-3 fa fa-phone\"></i>662 769 803</h3></div>\n              <div class=\"col-12 text-left\"><h3><a target=\"_blank\" href=\"http://www.linkedin.com/in/tomasz-stelagowski\"><i class=\"pr-3 fa fa-linkedin\"></i>tomasz-stelagowski</a></h3></div>\n              <div class=\"col-12 text-left\"><h3><a target=\"_blank\" href=\"https://github.com/tomasz-stelagowski\"><i class=\"pr-3 fa fa-github\"></i>github.com/tomasz-stelagowski</a></h3></div>\n            </div>\n          </div>\n        </div>\n        <!-- <h3>Software engineer | tomasz.stelagowski@gmail.com</h3> -->\n      </div><!--/.col-lg-12 -->\n    </div><!--/.row -->\n  </div><!--/.container -->\n</div>\n<cv-section [sectionname]=\"'ABOUT ME'\" class=\"theme-dark\">\n  <cv-section-item>\n    <p desc>\n      I am a young developer, interested in web technologies, like Angular5. I am especially interested in functional, and reactive programming in building modern UX. My interdisciplinary studies in Psychology and IT help me look at projects not only as a skilled developer but also as a psychologist specialising in social psychology.\n      <br/>My 4 years experience in students organisation AIESEC let me also acquire great team leadership skills and public speaking skills.\n    </p>\n    <p info>\n      <a href=\"/assets/cv/eng_printable.pdf\" target=\"_self\" download=\"Tomasz_Stelagowski_CV.pdf\">\n        <i class=\"fa fa-file\"></i><sm>DOWNLOAD CV</sm><i class=\"px-3 flag-icon flag-icon-gb\"></i>\n      </a>\n    </p>\n  </cv-section-item>\n</cv-section>\n<cv-section [sectionname]=\"'EMPLOYMENT'\">\n    <cv-section-item>\n      <ng-container desc>\n        <cv-title>Eracent Sp. z o.o.</cv-title> <br />\n        Software developer <br />\n        <p class=\"pt-2\">\n          <i>Technologies: </i> Angular 5, BackboneJS, Bootstrap 4, Angular Material, .NET MVC, Python  <br />\n        </p>\n        <ul>\n          <li>Allocation Engine: Designed highly modular, system, for automatic software to license allocation problem.</li>\n          <li>Visual web editor for SQL: Designed architecture and UI, using Angular 5, NgRedux, Bootstrap4, Angular Material.</li>\n          <li>Designed BackboneJS based architecture for Front-End Part of new application and implemented it.</li>\n          <li>Rewritten whole application front-end from .NET MVC to Angular 5 with KendoUI –app consisted product grids, members management, authorization and authentication etc.</li>\n        </ul>\n      </ng-container>\n      <p info>\n        <cv-data [startDate]=\"'May 2017'\" [endDate]=\"'now'\"></cv-data>\n      </p>\n\n    </cv-section-item>\n\n    <cv-section-item>\n      <ng-container desc>\n        <cv-title>Accenture</cv-title> <br />\n        Front-End Developer <br />\n        <p class=\"pt-2\">\n          <i>Technologies: </i> BackboneJS, HTML5, CSS3<br />\n        </p>\n        <ul>\n          <li>Designed pageable infinite scroll component. </li>\n          <li>Implemented several views and components for CRM application product. </li>\n          <li>Ported Web Application to tablets using Android studio. </li>\n        </ul>\n      </ng-container>\n      <p info>\n        <cv-data [startDate]=\"'May 2016'\" [endDate]=\"'February 2017'\"></cv-data>\n      </p>\n\n    </cv-section-item>\n</cv-section>\n\n<cv-section [sectionname]=\"'EDUCATION'\">\n    <cv-section-item>\n      <ng-container desc>\n        <cv-title>Computer Science</cv-title> <br />\n        <span>UNIVERSITY OF WARSAW</span>\n        <p class=\"pt-2\">\n          <i>Pursuing Bachelor`s degree, 3-year course.</i>\n        </p>\n      </ng-container>\n      <p info>\n        <cv-data [startDate]=\"'Fall 2015'\" [endDate]=\"'now'\"></cv-data> <br />\n        <tt>Graduating in Spring 2018</tt>\n      </p>\n\n    </cv-section-item>\n\n    <cv-section-item>\n      <ng-container desc>\n        <cv-title>Psychology</cv-title> <br />\n        <span>UNIVERSITY OF WARSAW</span>\n        <p class=\"pt-2\">\n          <i>Pursuing Master`s degree, 5-year course. </i><br />\n          <i>Major in \"Coaching and Personal Development\" and \"Industrial-Organizational Psychology\".</i>\n        </p>\n      </ng-container>\n      <p info>\n        <cv-data [startDate]=\"'Fall 2013'\" [endDate]=\"'now'\"></cv-data> <br />\n        <tt>Graduating in Spring 2018</tt>\n      </p>\n\n    </cv-section-item>\n</cv-section>\n\n<cv-section [sectionname]=\"'AWARDS & CONTESTS'\">\n    <cv-section-item>\n      <ng-container desc>\n        <cv-title>Olimpiad in Informatics</cv-title> <br />\n        <span>for College Students - OIG</span>\n        <p class=\"pt-2\">\n          <i>4th place laureate achieved</i>\n        </p>\n      </ng-container>\n      <p info>\n        2008, III OIG\n      </p>\n\n    </cv-section-item>\n\n    <cv-section-item>\n      <ng-container desc>\n        <cv-title>Hashcode</cv-title> <br />\n        <span>Online Qualification Round</span>\n        <p class=\"pt-2\">\n          <i>Rank #517</i>\n        </p>\n      </ng-container>\n      <p info>\n        March 2018\n      </p>\n\n    </cv-section-item>\n</cv-section>\n"

/***/ }),

/***/ "./src/app/homecv/homecv.component.scss":
/***/ (function(module, exports) {

module.exports = "/* Header Wrap */\n#headerwrap {\n  background: url(/assets/about.jpg) no-repeat center top;\n  padding-top: 140px;\n  text-align: center;\n  background-attachment: relative;\n  background-position: center top;\n  min-height: 500px;\n  width: 100%;\n  background-size: 100%;\n  background-size: cover; }\n#headerwrap h1 {\n  font-size: 80px; }\n#headerwrap h3 {\n  font-size: 20px; }\na {\n  color: currentColor;\n  text-decoration: none; }\n.border-current {\n  border-color: orange !important; }\n"

/***/ }),

/***/ "./src/app/homecv/homecv.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomecvComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomecvComponent = (function () {
    function HomecvComponent() {
        this.employment = data["employment"];
    }
    HomecvComponent.prototype.ngOnInit = function () {
    };
    return HomecvComponent;
}());
HomecvComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cv-homecv',
        template: __webpack_require__("./src/app/homecv/homecv.component.html"),
        styles: [__webpack_require__("./src/app/homecv/homecv.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HomecvComponent);

var emp = function (name, position, start, end, techs, desc) { return ({
    companyName: name,
    position: position,
    start: start,
    end: end,
    techs: techs,
    desc: desc
}); };
var data = {
    "employment": [
        emp("Eracent Sp. z o.o.", "Full-Stack Developer", "May 2017", "now", ["Angular 5", "BackboneJS", "Bootstrap 4", "Angular Material", ".NET MVC", "Python"], [
            "Architectured and designed front-end, for visual web editor for SQL queries, using Angular 5, NgRedux, Bootstrap4, Angular Material ",
            "Designed, highly modular Allocation Engine, for automatic software to license allocation problem.",
            "Designed BackboneJS based architecture for Front-End Part of new application and implemented it.",
            "Rewritten whole application from .NET MVC to Angular 5."
        ]),
        emp("Accenture", "Front-End Developer", "May 2016", "February 2017", ["BackboneJS"], [
            "Designed pageable infinite scroll component.",
            "Implemented several views and components for CRM application product.",
            "Ported Web Application to tablets using Android studio."
        ])
    ],
    "education": []
};
//# sourceMappingURL=homecv.component.js.map

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mdb-navbar SideClass=\"navbar navbar-expand-lg navbar-dark elegant-color fixed-top scrolling-navbar justify-content-center\">\n  <links>\n    <div class=\"navbar-nav m-auto w-100 justify-content-center align-items-stretch\">\n      <div class=\"nav-item active d-flex align-items-stretch\">\n        <a class=\"nav-link waves-light w-100 d-flex justify-content-center align-items-center\"\n            mdbRippleRadius routerLink=\"/home\" routerLinkActive=\"active\">\n          Home\n        </a>\n      </div>\n      <div class=\"nav-item d-flex align-items-stretch\">\n        <a class=\"nav-link waves-light w-100 d-flex justify-content-center align-items-center namp\"\n            mdbRippleRadius routerLink=\"/About\" routerLinkActive=\"active\">\n          Cover <br /> letter\n        </a>\n      </div>\n      <div class=\"nav-item d-flex align-items-stretch\">\n        <a class=\"nav-link waves-light w-100 d-flex justify-content-center align-items-center\"\n            mdbRippleRadius routerLink=\"/About\" routerLinkActive=\"active\">\n          Education\n        </a>\n      </div>\n      <div class=\"nav-item d-flex align-items-stretch\">\n        <a class=\"nav-link waves-light w-100 d-flex justify-content-center align-items-center amp\"\n            mdbRippleRadius routerLink=\"/portofolio\" routerLinkActive=\"active\">\n          Leadership <br /> Coaching\n        </a>\n      </div>\n      <div class=\"nav-item d-flex align-items-stretch\">\n        <a class=\"nav-link waves-light w-100 d-flex justify-content-center align-items-center\"\n            mdbRippleRadius routerLink=\"/portofolio\" routerLinkActive=\"active\">\n          Portfolio\n        </a>\n      </div>\n      <div class=\"nav-item d-flex align-items-stretch\">\n        <a class=\"nav-link waves-light w-100 d-flex justify-content-center align-items-center\"\n            mdbRippleRadius routerLink=\"/interests\" routerLinkActive=\"active\">\n          Interests\n        </a>\n      </div>\n      <div class=\"nav-item d-flex align-items-stretch\">\n        <a class=\"nav-link waves-light w-100 d-flex justify-content-center align-items-center amp\"\n            mdbRippleRadius routerLink=\"/interests\" routerLinkActive=\"active\">\n          Awards <br /> Contests\n        </a>\n      </div>\n    </div>\n  </links>\n</mdb-navbar>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/***/ (function(module, exports) {

module.exports = ".nav-item {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 91px;\n          flex: 0 1 91px; }\n\n.nav-link {\n  text-align: center; }\n\n.amp {\n  position: relative;\n  line-height: 110%; }\n\n.namp {\n  position: relative;\n  line-height: 110%; }\n\n.amp::before {\n  content: \"&\";\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  -webkit-filter: brightness(60%);\n          filter: brightness(60%);\n  margin-top: 1px; }\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
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
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cv-navbar',
        template: __webpack_require__("./src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("./src/app/navbar/navbar.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "./src/app/section-item/section-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-8\" desc>\n    <ng-content select=\"[desc]\"></ng-content>\n  </div>\n  <div class=\"col-lg-4\">\n    <ng-content select=\"[info]\"></ng-content>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/section-item/section-item.component.scss":
/***/ (function(module, exports) {

module.exports = ":host > * {\n  margin-bottom: 20px; }\n\n:host() ::ng-deep [desc] p {\n  margin: 0; }\n\n:host() ::ng-deep [desc] ul {\n  padding-left: 20px; }\n\n:host() ::ng-deep [desc] li {\n  padding-left: 10px; }\n"

/***/ }),

/***/ "./src/app/section-item/section-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SectionItemComponent = (function () {
    function SectionItemComponent() {
    }
    SectionItemComponent.prototype.ngOnInit = function () {
    };
    return SectionItemComponent;
}());
SectionItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cv-section-item',
        template: __webpack_require__("./src/app/section-item/section-item.component.html"),
        styles: [__webpack_require__("./src/app/section-item/section-item.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SectionItemComponent);

//# sourceMappingURL=section-item.component.js.map

/***/ }),

/***/ "./src/app/section/section.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"{{ sectionname }}\" name=\"{{ sectionname }}\"></section>\n<div id=\"cvsection\">\n  <div class=\"container\">\n    <div class=\"row\">\n\n      <div class=\"col-lg-2 ml-auto\">\n        <h5>{{ sectionname }}</h5>\n      </div>\n      <div class=\"col-lg-9\">\n          <ng-content> </ng-content>\n      </div>\n    </div>\n    <hr>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/section/section.component.scss":
/***/ (function(module, exports) {

module.exports = "#cvsection ::ng-deep {\n  margin-top: 30px;\n  margin-bottom: 30px; }\n\n#cvsection ::ng-deep i {\n  padding-right: 8px;\n  vertical-align: middle; }\n\n:host-context(.theme-dark) hr {\n  display: none; }\n\n:host-context(.theme-dark) ::ng-deep #cvsection {\n  background: #2c3e50;\n  color: white;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-top: 60px;\n  padding-bottom: 60px; }\n\n:host-context(.theme-dark) ::ng-deep #cvsection h5, p {\n  color: white; }\n\n:host-context(.theme-dark) ::ng-deep #cvsection i {\n  color: white; }\n"

/***/ }),

/***/ "./src/app/section/section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SectionComponent = (function () {
    function SectionComponent() {
        this.sectionname = '';
    }
    return SectionComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], SectionComponent.prototype, "sectionname", void 0);
SectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cv-section',
        template: __webpack_require__("./src/app/section/section.component.html"),
        styles: [__webpack_require__("./src/app/section/section.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SectionComponent);

//# sourceMappingURL=section.component.js.map

/***/ }),

/***/ "./src/app/title/title.component.html":
/***/ (function(module, exports) {

module.exports = "<strong><ng-content></ng-content></strong>\n"

/***/ }),

/***/ "./src/app/title/title.component.scss":
/***/ (function(module, exports) {

module.exports = "strong {\n  color: #34495e; }\n\n:host-context(.theme-dark) strong {\n  color: white; }\n"

/***/ }),

/***/ "./src/app/title/title.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TitleComponent = (function () {
    function TitleComponent() {
    }
    TitleComponent.prototype.ngOnInit = function () {
    };
    return TitleComponent;
}());
TitleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cv-title',
        template: __webpack_require__("./src/app/title/title.component.html"),
        styles: [__webpack_require__("./src/app/title/title.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], TitleComponent);

//# sourceMappingURL=title.component.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map