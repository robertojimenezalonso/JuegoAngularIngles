webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<body>\n  <app-micanvas></app-micanvas >\n</body>\n\n\n<!--The content below is only a placeholder and can be replaced.\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{title}}!\n  </h1>\n  <img width=\"300\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n-->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app2';
        console.log("iggttuffturrtyrty");
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__micanvas_micanvas_component__ = __webpack_require__("../../../../../src/app/micanvas/micanvas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__milib_milib_component__ = __webpack_require__("../../../../../src/app/milib/milib.component.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__micanvas_micanvas_component__["a" /* MicanvasComponent */],
            __WEBPACK_IMPORTED_MODULE_4__milib_milib_component__["a" /* MilibComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/micanvas/actividad1.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Actividad1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__milib_events_eventsadmin__ = __webpack_require__("../../../../../src/app/milib/events/eventsadmin.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__milib_dataholder_dataholder__ = __webpack_require__("../../../../../src/app/milib/dataholder/dataholder.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__milib_views_imgs_imagen__ = __webpack_require__("../../../../../src/app/milib/views/imgs/imagen.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__milib_views_buttons_button__ = __webpack_require__("../../../../../src/app/milib/views/buttons/button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__milib_views_windows_window__ = __webpack_require__("../../../../../src/app/milib/views/windows/window.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__milib_views_labels_label__ = __webpack_require__("../../../../../src/app/milib/views/labels/label.ts");






var Actividad1 = (function () {
    function Actividad1(vMotor) {
        this.indicePreguntaSiguiente = 0;
        this.vidasJuego = 3;
        this.indicePreguntaAnterior = 0;
        this.preg = ["¿Cuánto fue el vuelo mas largo que a hecho una gallina?", "¿A cuantos años equivale el primer año de un perro?", "Profesión del inventor de la silla eléctrica: ", "De que estaban hechas las almuadas de los antiguos egipcios"];
        this.resp = [["5 minutos", "13 segundos", "7 segundos", "No vuelan"], ["4 años", "1 año", "21 años", "8 años"], ["Carpintero", "Dentista", "Médico", "Policía"], ["Pieles", "Paja", "Piedra", "No dormían"]];
        this.respCorrecta = ["13 segundos", "21 años", "Dentista", "Piedra"];
        this.motor = vMotor;
        this.imagenFondo = new __WEBPACK_IMPORTED_MODULE_2__milib_views_imgs_imagen__["a" /* Imagen */](this.motor, 0, 0, __WEBPACK_IMPORTED_MODULE_1__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth, __WEBPACK_IMPORTED_MODULE_1__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight);
        this.imagenFondo.setImg('./assets/backmain.jpg');
        this.motor.setRaiz(this.imagenFondo);
        this.crearEscenarioMenu();
        this.crearEscenarioJuego();
        __WEBPACK_IMPORTED_MODULE_0__milib_events_eventsadmin__["a" /* EventsAdmin */].instance.addListener(this);
    }
    /**
     * OJO!! AUNQUE EN ESTE EJEMPLO SE USE EL PANEL, ES OBLIGATORIO CREAR UN OBJETO WINDOW EN EL MILIB, Y AGREGARLE EL BOTON
     * DE SALIR EN LA ESQUINA COMO SALE EN EL LA PAGINA WEB. HABRA QUE QUITAR EL PANEL Y USAR WINDOW
     */
    Actividad1.prototype.crearEscenarioMenu = function () {
        var pmw = __WEBPACK_IMPORTED_MODULE_1__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.3;
        var pmh = __WEBPACK_IMPORTED_MODULE_1__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight * 0.45;
        var pmx = __WEBPACK_IMPORTED_MODULE_1__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth2 - (pmw >> 1);
        var pmy = __WEBPACK_IMPORTED_MODULE_1__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight2 - (pmh >> 1);
        this.panelMenu.setImg('./assets/btn.png');
        this.panelMenu = new __WEBPACK_IMPORTED_MODULE_2__milib_views_imgs_imagen__["a" /* Imagen */](this.motor, pmx, pmy, pmw, pmh);
        this.motor.addViewToParentView(this.imagenFondo, this.panelMenu);
        this.botonInicio = new __WEBPACK_IMPORTED_MODULE_3__milib_views_buttons_button__["a" /* Button */](this.motor, this.panelMenu.w - this.panelMenu.w / 1.34, this.panelMenu.h - this.panelMenu.h / 1.3, this.panelMenu.w / 2, this.panelMenu.h / 8);
        this.botonInicio.setImagePath('./assets/btn.png');
        this.botonInicio.setTexto("Nueva partida");
        this.motor.addViewToParentView(this.panelMenu, this.botonInicio);
        this.botonInicio.setListener(this);
        this.botonCargar = new __WEBPACK_IMPORTED_MODULE_3__milib_views_buttons_button__["a" /* Button */](this.motor, this.panelMenu.w - this.panelMenu.w / 1.34, this.panelMenu.h - this.panelMenu.h / 1.78, this.panelMenu.w / 2, this.panelMenu.h / 8);
        this.botonCargar.setImagePath('./assets/btn.png');
        this.botonCargar.setTexto("Cargar");
        this.motor.addViewToParentView(this.panelMenu, this.botonCargar);
        this.botonCargar.setListener(this);
        this.botonSalir = new __WEBPACK_IMPORTED_MODULE_3__milib_views_buttons_button__["a" /* Button */](this.motor, this.panelMenu.w - this.panelMenu.w / 1.34, this.panelMenu.h - this.panelMenu.h / 2.7, this.panelMenu.w / 2, this.panelMenu.h / 8);
        this.botonSalir.setImagePath('./assets/btn.png');
        this.botonSalir.setTexto("Salir");
        this.motor.addViewToParentView(this.panelMenu, this.botonSalir);
        this.botonSalir.setListener(this);
    };
    Actividad1.prototype.crearEscenarioJuego = function () {
        var pmw = __WEBPACK_IMPORTED_MODULE_1__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.3;
        var pmh = __WEBPACK_IMPORTED_MODULE_1__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight * 0.45;
        var pmx = __WEBPACK_IMPORTED_MODULE_1__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth2 - (pmw >> 1);
        var pmy = __WEBPACK_IMPORTED_MODULE_1__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight2 - (pmh >> 1);
        this.window1 = new __WEBPACK_IMPORTED_MODULE_4__milib_views_windows_window__["a" /* Window */](this.motor, 0, 0, __WEBPACK_IMPORTED_MODULE_1__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth, __WEBPACK_IMPORTED_MODULE_1__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight);
        this.motor.addViewToParentView(this.imagenFondo, this.window1);
        this.lblPregunta = new __WEBPACK_IMPORTED_MODULE_5__milib_views_labels_label__["a" /* Label */](this.motor, this.window1.w - this.window1.w / 1.58, this.window1.h - this.window1.h / 1.7, this.window1.w / 5, this.window1.h / 18);
        this.lblPregunta.setTexto("Pregunta");
        this.motor.addViewToParentView(this.window1, this.lblPregunta);
        this.lblPregunta.setFontColor('white');
        this.respuesta1 = new __WEBPACK_IMPORTED_MODULE_3__milib_views_buttons_button__["a" /* Button */](this.motor, this.window1.w - this.window1.w / 1.43, this.window1.h - this.window1.h / 2.1, this.window1.w / 7, this.window1.h / 18);
        this.respuesta1.setImagePath('./assets/btn.png');
        this.respuesta1.setTexto(null);
        this.respuesta1.blVisible = true;
        this.motor.addViewToParentView(this.window1, this.respuesta1);
        this.respuesta1.setListener(this);
        this.respuesta2 = new __WEBPACK_IMPORTED_MODULE_3__milib_views_buttons_button__["a" /* Button */](this.motor, this.window1.w - this.window1.w / 1.93, this.window1.h - this.window1.h / 2.1, this.window1.w / 7, this.window1.h / 18);
        this.respuesta2.setImagePath('./assets/btn.png');
        this.respuesta2.setTexto(null);
        this.respuesta2.blVisible = true;
        this.motor.addViewToParentView(this.window1, this.respuesta2);
        this.respuesta2.setListener(this);
        this.respuesta3 = new __WEBPACK_IMPORTED_MODULE_3__milib_views_buttons_button__["a" /* Button */](this.motor, this.window1.w - this.window1.w / 1.43, this.window1.h - this.window1.h / 2.7, this.window1.w / 7, this.window1.h / 18);
        this.respuesta3.setImagePath('./assets/btn.png');
        this.respuesta3.setTexto(null);
        this.respuesta3.blVisible = true;
        this.motor.addViewToParentView(this.window1, this.respuesta3);
        this.respuesta3.setListener(this);
        this.respuesta4 = new __WEBPACK_IMPORTED_MODULE_3__milib_views_buttons_button__["a" /* Button */](this.motor, this.window1.w - this.window1.w / 1.93, this.window1.h - this.window1.h / 2.7, this.window1.w / 7, this.window1.h / 18);
        this.respuesta4.setImagePath('./assets/btn.png');
        this.respuesta4.setTexto(null);
        this.respuesta4.blVisible = true;
        this.motor.addViewToParentView(this.window1, this.respuesta4);
        this.respuesta4.setListener(this);
        this.imgGanador = new __WEBPACK_IMPORTED_MODULE_2__milib_views_imgs_imagen__["a" /* Imagen */](this.motor, pmx, pmy, pmw, pmh);
        this.imgGanador.setImg('./assets/enhorabuena.png');
        this.motor.addViewToParentView(this.window1, this.imgGanador);
        this.imgVidas = new __WEBPACK_IMPORTED_MODULE_2__milib_views_imgs_imagen__["a" /* Imagen */](this.motor, pmx, pmy, pmw, pmh);
        this.imgVidas.setImg('./assets/vidas.jpg');
        this.motor.addViewToParentView(this.window1, this.imgVidas);
        this.lblNumVidas = new __WEBPACK_IMPORTED_MODULE_5__milib_views_labels_label__["a" /* Label */](this.motor, this.imgVidas.w - this.imgVidas.w / 1.5, this.imgVidas.y, this.imgVidas.w / 2, this.imgVidas.h / 16);
        this.motor.addViewToParentView(this.imgVidas, this.lblNumVidas);
        this.window1.btnWindow.setListener(this);
    };
    Actividad1.prototype.seteoImgGanador = function () {
        var aux = this;
        this.motor.setViewVisibility(this.imgGanador.uid, true);
        this.bPreguntas(false);
        setTimeout(function () {
            aux.motor.setViewVisibility(aux.window1.uid, false);
            aux.motor.setViewVisibility(aux.panelMenu.uid, true);
            aux.indicePreguntaSiguiente = 0;
            console.log("indice" + aux.indicePreguntaSiguiente);
        }, 3000);
    };
    Actividad1.prototype.seteoImgPerdedor = function (numVidas) {
        var aux = this;
        console.log("tus vidas son: " + numVidas);
        if (numVidas < 0) {
            this.vidasJuego = 3;
            this.indicePreguntaSiguiente = 0;
            this.indicePreguntaAnterior = 0;
            this.motor.setViewVisibility(this.imgVidas.uid, true);
            this.lblNumVidas.setTexto("Has perdido!!!");
            setTimeout(function () {
                aux.motor.setViewVisibility(aux.imgVidas.uid, false);
                aux.motor.setViewVisibility(aux.window1.uid, false);
                aux.motor.setViewVisibility(aux.panelMenu.uid, true);
            }, 3000);
        }
        else {
            this.motor.setViewVisibility(this.imgVidas.uid, true);
            this.lblNumVidas.setTexto("Te quedan: " + numVidas + " vidas.");
            setTimeout(function () {
                aux.motor.setViewVisibility(aux.imgVidas.uid, false);
            }, 3000);
        }
    };
    Actividad1.prototype.bPreguntas = function (blVisible) {
        this.motor.setViewVisibility(this.lblPregunta.uid, blVisible);
        this.motor.setViewVisibility(this.respuesta1.uid, blVisible);
        this.motor.setViewVisibility(this.respuesta2.uid, blVisible);
        this.motor.setViewVisibility(this.respuesta3.uid, blVisible);
        this.motor.setViewVisibility(this.respuesta4.uid, blVisible);
    };
    Actividad1.prototype.seteoTexto = function (num) {
        if (this.resp[num] == null) {
            this.seteoImgGanador();
        }
        else {
            this.lblPregunta.setTexto(this.preg[num]);
            for (var index = 0; index < this.resp[num].length; index++) {
                if (index == 0) {
                    this.respuesta1.setTexto(this.resp[num][index]);
                }
                else if (index == 1) {
                    this.respuesta2.setTexto(this.resp[num][index]);
                }
                else if (index == 2) {
                    this.respuesta3.setTexto(this.resp[num][index]);
                }
                else if (index == 3) {
                    this.respuesta4.setTexto(this.resp[num][index]);
                }
            }
        }
    };
    Actividad1.prototype.continuarJuego = function (indicePreguntaAnterior) {
        this.seteoTexto(indicePreguntaAnterior);
    };
    Actividad1.prototype.buttonListenerOnClick = function (btn) {
        if (btn == this.window1.btnWindow) {
            this.motor.setViewVisibility(this.window1.uid, false);
            this.motor.setViewVisibility(this.panelMenu.uid, true);
        }
        if (btn == this.botonSalir) {
            this.motor.setViewVisibility(this.panelMenu.uid, false);
        }
        if (btn == this.botonInicio) {
            this.motor.setViewVisibility(this.panelMenu.uid, false);
            this.motor.setViewVisibility(this.window1.uid, true);
            this.motor.setViewVisibility(this.imgGanador.uid, false);
            this.motor.setViewVisibility(this.imgVidas.uid, false);
            this.indicePreguntaAnterior = this.indicePreguntaSiguiente;
            this.seteoTexto(this.indicePreguntaSiguiente);
            this.indicePreguntaSiguiente++;
        }
        if (btn == this.botonCargar) {
            if (this.indicePreguntaSiguiente == 0) {
                console.log("No hay nada que continuar");
            }
            else {
                this.motor.setViewVisibility(this.panelMenu.uid, false);
                this.continuarJuego(this.indicePreguntaAnterior);
                this.motor.setViewVisibility(this.window1.uid, true);
                this.motor.setViewVisibility(this.imgVidas.uid, false);
                this.motor.setViewVisibility(this.imgGanador.uid, false);
            }
        }
        if (btn == this.respuesta1) {
            this.indicePreguntaAnterior = this.indicePreguntaSiguiente;
            for (var index = 0; index < this.respCorrecta.length; index++) {
                if (this.respuesta1.getTexto() == this.respCorrecta[index]) {
                    console.log("es correcta");
                    this.seteoTexto(this.indicePreguntaSiguiente);
                    this.indicePreguntaSiguiente++;
                }
            }
            if (this.indicePreguntaSiguiente == this.indicePreguntaAnterior) {
                this.seteoImgPerdedor(--this.vidasJuego);
            }
        }
        if (btn == this.respuesta2) {
            console.log("btn2");
            this.indicePreguntaAnterior = this.indicePreguntaSiguiente;
            for (var index = 0; index < this.respCorrecta.length; index++) {
                if (this.respuesta2.getTexto() == this.respCorrecta[index]) {
                    console.log("es correcta");
                    this.seteoTexto(this.indicePreguntaSiguiente);
                    this.indicePreguntaSiguiente++;
                }
            }
            if (this.indicePreguntaSiguiente == this.indicePreguntaAnterior) {
                this.seteoImgPerdedor(--this.vidasJuego);
            }
        }
        if (btn == this.respuesta3) {
            this.indicePreguntaAnterior = this.indicePreguntaSiguiente;
            for (var index = 0; index < this.respCorrecta.length; index++) {
                if (this.respuesta3.getTexto() == this.respCorrecta[index]) {
                    console.log("es correcta");
                    this.seteoTexto(this.indicePreguntaSiguiente);
                    this.indicePreguntaSiguiente++;
                }
            }
            if (this.indicePreguntaSiguiente == this.indicePreguntaAnterior) {
                this.seteoImgPerdedor(--this.vidasJuego);
            }
        }
        if (btn == this.respuesta4) {
            this.indicePreguntaAnterior = this.indicePreguntaSiguiente;
            for (var index = 0; index < this.respCorrecta.length; index++) {
                if (this.respuesta4.getTexto() == this.respCorrecta[index]) {
                    console.log("es correcta");
                    this.seteoTexto(this.indicePreguntaSiguiente);
                    this.indicePreguntaSiguiente++;
                }
            }
            if (this.indicePreguntaSiguiente == this.indicePreguntaAnterior) {
                this.seteoImgPerdedor(--this.vidasJuego);
            }
        }
    };
    Actividad1.prototype.screenSizeChanged = function (vWidth, vHeight) {
        var pmw = __WEBPACK_IMPORTED_MODULE_1__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.3;
        var pmh = __WEBPACK_IMPORTED_MODULE_1__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight * 0.45;
        var pmx = __WEBPACK_IMPORTED_MODULE_1__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth2 - (pmw >> 1);
        var pmy = __WEBPACK_IMPORTED_MODULE_1__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight2 - (pmh >> 1);
        console.log("SE HA ACTUALIZADO EL TEMAÑO DE LA PANTALLA");
        this.imagenFondo.setSize(__WEBPACK_IMPORTED_MODULE_1__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth, __WEBPACK_IMPORTED_MODULE_1__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight);
        this.panelMenu.setPosition(pmx, pmy);
        this.panelMenu.setSize(pmw, pmh);
        this.botonInicio.setSize(this.panelMenu.w / 2, this.panelMenu.h / 8);
        this.botonInicio.setPosition(this.panelMenu.w - this.panelMenu.w / 1.34, this.panelMenu.h - this.panelMenu.h / 1.3);
        this.botonCargar.setSize(this.panelMenu.w / 2, this.panelMenu.h / 8);
        this.botonCargar.setPosition(this.panelMenu.w - this.panelMenu.w / 1.34, this.panelMenu.h - this.panelMenu.h / 1.78);
        this.botonSalir.setSize(this.panelMenu.w / 2, this.panelMenu.h / 8);
        this.botonSalir.setPosition(this.panelMenu.w - this.panelMenu.w / 1.34, this.panelMenu.h - this.panelMenu.h / 2.7);
        this.window1.setSize(__WEBPACK_IMPORTED_MODULE_1__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth, __WEBPACK_IMPORTED_MODULE_1__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight);
        this.respuesta1.setSize(this.window1.w / 7, this.window1.h / 18);
        this.respuesta1.setPosition(this.window1.w - this.window1.w / 1.43, this.window1.h - this.window1.h / 2.1);
        this.respuesta2.setSize(this.window1.w / 7, this.window1.h / 18);
        this.respuesta2.setPosition(this.window1.w - this.window1.w / 1.93, this.window1.h - this.window1.h / 2.1);
        this.respuesta3.setSize(this.window1.w / 7, this.window1.h / 18);
        this.respuesta3.setPosition(this.window1.w - this.window1.w / 1.43, this.window1.h - this.window1.h / 2.7);
        this.respuesta4.setSize(this.window1.w / 7, this.window1.h / 18);
        this.respuesta4.setPosition(this.window1.w - this.window1.w / 1.93, this.window1.h - this.window1.h / 2.7);
        this.window1.btnWindow.setSize(this.window1.w / 7, this.window1.h / 18);
        this.window1.btnWindow.setPosition(this.window1.w - this.window1.w / 5.5, this.window1.h - this.window1.h / 1.04);
        this.lblPregunta.setSize(this.window1.w / 5, this.window1.h / 18);
        this.lblPregunta.setPosition(this.window1.w - this.window1.w / 1.58, this.window1.h - this.window1.h / 1.7);
        this.imgGanador.setSize(pmw, pmh);
        this.imgGanador.setPosition(pmx, pmy);
        this.imgVidas.setSize(pmw, pmh);
        this.imgVidas.setPosition(pmx, pmy);
        this.lblNumVidas.setSize(this.imgVidas.w / 2, this.imgVidas.h / 16);
        this.lblNumVidas.setPosition(this.imgVidas.w - this.imgVidas.w / 1.5, this.imgVidas.y);
    };
    return Actividad1;
}());

//# sourceMappingURL=actividad1.js.map

/***/ }),

/***/ "../../../../../src/app/micanvas/micanvas.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face{\n    font-family:'ABOVE';\n    src: url('" + __webpack_require__("../../../../../src/assets/font/ABOVE  - PERSONAL USE ONLY.ttf") + "') format('trutype');\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/micanvas/micanvas.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n<p>\n  micanvas works!\n</p>\n-->\n\n<canvas #mcnv id=\"mcnv\" width=\"1000\" height=\"900\">\n\n</canvas>"

/***/ }),

/***/ "../../../../../src/app/micanvas/micanvas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MicanvasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__milib_engines_motor__ = __webpack_require__("../../../../../src/app/milib/engines/motor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__ = __webpack_require__("../../../../../src/app/milib/dataholder/dataholder.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__milib_events_eventsadmin__ = __webpack_require__("../../../../../src/app/milib/events/eventsadmin.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actividad1__ = __webpack_require__("../../../../../src/app/micanvas/actividad1.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MicanvasComponent = (function () {
    function MicanvasComponent(ngZone) {
        this.ngZone = ngZone;
    }
    MicanvasComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.initScreenSize();
        __WEBPACK_IMPORTED_MODULE_3__milib_events_eventsadmin__["a" /* EventsAdmin */].instance.addListener(this);
        this.mcnv.nativeElement.width = __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth;
        this.mcnv.nativeElement.height = __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight;
        this.contexto = this.mcnv.nativeElement.getContext('2d');
        //this.contexto.fillStyle = "rgb(200,0,0)";  
        //this.contexto.fillRect(10, 10, 550, 50);
        this.miMotor = new __WEBPACK_IMPORTED_MODULE_1__milib_engines_motor__["a" /* Motor */](this.contexto, this.ngZone);
        this.miMotor.start();
        this.actividad1 = new __WEBPACK_IMPORTED_MODULE_4__actividad1__["a" /* Actividad1 */](this.miMotor);
        //this.crearEscenarioMenu();
    };
    /*
    private crearEscenarioMenu():void{
      this.p1=new Panel(this.miMotor,0,0,
        DataHolder.instance.nScreenWidth,DataHolder.instance.nScreenHeight);
      this.miMotor.setRaiz(this.p1);
      let p2:Panel=new Panel(this.miMotor,40,50,120,100);
      let btn1 = new Button(this.miMotor,30,30,80,80);
      
      this.p1.setColor("#22AD19");
      p2.setColor("#CD1B56");
      
      this.miMotor.addViewToParentView(this.p1,p2);
      this.miMotor.addViewToParentView(p2,btn1);
    }
    */
    MicanvasComponent.prototype.screenSizeChanged = function (vWidth, vHeight) {
        this.mcnv.nativeElement.width = __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth;
        this.mcnv.nativeElement.height = __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight;
        //this.p1.setSize(DataHolder.instance.nScreenWidth,DataHolder.instance.nScreenHeight);
    };
    return MicanvasComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('mcnv'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object)
], MicanvasComponent.prototype, "mcnv", void 0);
MicanvasComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-micanvas',
        template: __webpack_require__("../../../../../src/app/micanvas/micanvas.component.html"),
        styles: [__webpack_require__("../../../../../src/app/micanvas/micanvas.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]) === "function" && _b || Object])
], MicanvasComponent);

var _a, _b;
//# sourceMappingURL=micanvas.component.js.map

/***/ }),

/***/ "../../../../../src/app/milib/dataholder/dataholder.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataHolder; });
var DataHolder = (function () {
    function DataHolder() {
        this.nScreenWidth = 0;
        this.nScreenHeight = 0;
        this.nScreenWidth2 = 0;
        this.nScreenHeight2 = 0;
        this.initScreenSize();
    }
    DataHolder.prototype.initScreenSize = function () {
        var myWidth = 0, myHeight = 0;
        if (typeof (window.innerWidth) == 'number') {
            //Non-IE
            myWidth = window.innerWidth;
            myHeight = window.innerHeight;
        }
        else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
            //IE 6+ in 'standards compliant mode'
            myWidth = document.documentElement.clientWidth;
            myHeight = document.documentElement.clientHeight;
        }
        else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
            //IE 4 compatible
            myWidth = document.body.clientWidth;
            myHeight = document.body.clientHeight;
        }
        this.nScreenWidth = myWidth;
        this.nScreenHeight = myHeight;
        this.nScreenWidth2 = this.nScreenWidth >> 1;
        this.nScreenHeight2 = this.nScreenHeight >> 1;
        //console.log("!!!!!!!!!!!!!----------->>>>>>>>>>>>>>>>>>>>> "+this.nScreenWidth);
    };
    return DataHolder;
}());

DataHolder.instance = new DataHolder();
//# sourceMappingURL=dataholder.js.map

/***/ }),

/***/ "../../../../../src/app/milib/engines/motor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Motor; });
var Motor = (function () {
    /**
     * Constructor del motor.
     * @param vctx Contexto en el cual se pintara usando el motor
     * @param vngZone ngZone que permite llamar al hilo independiente de PAINT
     */
    function Motor(vctx, vngZone) {
        this.blStarted = false;
        this.dictRelViews = new Map();
        this.sRootViewUID = null;
        this.dictViews = new Map();
        this.contexto = vctx;
        this.ngZone = vngZone;
    }
    /**
     * Metodo que permite crear el arbol jerarquico de Views. Se recibe un View Padre y un View hijo, y se asocian en un arbol
     * @param vParent View padre.
     * @param vChild View hijo.
     */
    Motor.prototype.addViewToParentView = function (vParent, vChild) {
        var archilds = this.dictRelViews[vParent.uid];
        if (archilds == undefined) {
            archilds = Array();
        }
        if (archilds.indexOf(vChild.uid) == -1) {
            archilds.push(vChild.uid);
        }
        this.dictRelViews[vParent.uid] = archilds;
        //if(this.sRootViewUID==null)this.sRootViewUID=vParent.uid;
        this.dictViews[vParent.uid] = vParent;
        this.dictViews[vChild.uid] = vChild;
    };
    /**
     * Metodo que setea la raiz del arbol para que podamos cambiar la view que usemos como raiz.
     * @param vRaiz View que queremos usar como Raiz de nuestro arbol.
     */
    Motor.prototype.setRaiz = function (vRaiz) {
        this.sRootViewUID = vRaiz.uid;
    };
    /**
     * Metodo que arranca el motor
     */
    Motor.prototype.start = function () {
        var _this = this;
        this.blStarted = true;
        requestAnimationFrame(function () { return _this.cicle(); });
    };
    /**
     * Metodo que para el motor.
     */
    Motor.prototype.stop = function () {
        this.blStarted = false;
    };
    /**
     * Metodo que se ejecuta en cada ciclo de motor. Llama a Pintar (Paint) y a Actualizar (Update)
     */
    Motor.prototype.cicle = function () {
        var _this = this;
        if (this.sRootViewUID != null) {
            //console.log("AAAAAAAAAAAA");
            this.actualizar(this.sRootViewUID, null);
            this.ngZone.runOutsideAngular(function () { return _this.pintar(_this.sRootViewUID); });
        }
        if (this.blStarted) {
            requestAnimationFrame(function () { return _this.cicle(); });
        }
    };
    /**
     * Metodo recursivo que recore el arbol de views y ejecuta los metodos de pintar de cada view.
     * @param vUid UID del primer view del arbol que vamos a pintar
     */
    Motor.prototype.pintar = function (vUid) {
        var v = this.dictViews[vUid];
        if (v.blVisible) {
            v.paint(this.contexto);
            var arChilds = this.dictRelViews[vUid];
            if (arChilds != undefined) {
                for (var i = 0; i < arChilds.length; i++) {
                    this.pintar(arChilds[i]);
                }
            }
        }
    };
    /**
     * Metodo recursivo que recore el arbol de views y ejecuta los metodos de update de cada view.
     * @param vUid UID del primer view del arbol que vamos a update
     * @param vParent View del padre del view que se esta actualizando (Update).
     */
    Motor.prototype.actualizar = function (vUid, vParent) {
        var v = this.dictViews[vUid];
        v.update(vParent);
        var arChilds = this.dictRelViews[vUid];
        if (arChilds != undefined) {
            for (var i = 0; i < arChilds.length; i++) {
                this.actualizar(arChilds[i], v);
            }
        }
    };
    /**
     * Metodo recursivo que recore el arbol de views y pone visible o invisible todo los hijos del view que queremos
     * que pase a visible o invisible.
     * @param vUid UID del primer view del arbol que vamos a cambiar su visibilidad
     * @param blVisible El estado de visibilidad que queremos setear a al View y sus hijos.
     */
    Motor.prototype.setViewVisibility = function (vUid, blVisible) {
        var v = this.dictViews[vUid];
        v.blVisible = blVisible;
        var arChilds = this.dictRelViews[vUid];
        if (arChilds != undefined) {
            for (var i = 0; i < arChilds.length; i++) {
                this.setViewVisibility(arChilds[i], blVisible);
            }
        }
    };
    return Motor;
}());

//# sourceMappingURL=motor.js.map

/***/ }),

/***/ "../../../../../src/app/milib/events/eventsadmin.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsAdmin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dataholder_dataholder__ = __webpack_require__("../../../../../src/app/milib/dataholder/dataholder.ts");

var EventsAdmin = (function () {
    function EventsAdmin() {
        this.arListeners = [];
        this.blIsMouseClickRegistered = false;
        this.arViewsForMouseClick = [];
        window.addEventListener("resize", this.screenSizeResized);
    }
    /**
     * Metodo que agrega (o subsribe) a cualquier clase que implemente el EventsAdminListener en el array de subsriptores
     * para que luego pueda recibir notificaciones del EventsAdmin.
     * @param listener La clase que implementa el EventsAdminListener
     */
    EventsAdmin.prototype.addListener = function (listener) {
        if (this.arListeners.indexOf(listener) == -1)
            this.arListeners.push(listener);
    };
    /**
     * Agrega un elemento visual View a la lista de views que detectan si les han pinchado con el Raton encima.
     * @param view View que queremos subscribir a las notificaciones de MouseClick
     */
    EventsAdmin.prototype.addMouseClickToView = function (view) {
        if (this.blIsMouseClickRegistered == false) {
            this.blIsMouseClickRegistered = true;
            window.addEventListener("click", this.mouseClick);
        }
        if (this.arViewsForMouseClick.indexOf(view) == -1)
            this.arViewsForMouseClick.push(view);
    };
    /**
     * Metodo de tipo evento Javascript que se ejecutara cuando el Window detecto un MouseClick
     * @param e evento de tipo MouseEvent que recibe la informacion sobre la posicion donde el raton ha pinchado.
     */
    EventsAdmin.prototype.mouseClick = function (e) {
        var vfin = null;
        for (var i = 0; i < EventsAdmin.instance.arViewsForMouseClick.length; i++) {
            var vtemp = EventsAdmin.instance.arViewsForMouseClick[i];
            if (vtemp.checkPointInView(e.pageX, e.pageY)) {
                vfin = vtemp;
            }
            //EventsAdmin.instance.arListeners[i].screenSizeChanged(
            //DataHolder.instance.nScreenWidth,DataHolder.instance.nScreenHeight);
        }
        if (vfin != null)
            vfin.mouseClicked(e);
    };
    /**
     * Metodo de tipo evento Javascript que se ejecutara cuando el Window detecto un cambio del tamaño de pantalla.
     */
    EventsAdmin.prototype.screenSizeResized = function () {
        __WEBPACK_IMPORTED_MODULE_0__dataholder_dataholder__["a" /* DataHolder */].instance.initScreenSize();
        for (var i = 0; i < EventsAdmin.instance.arListeners.length; i++) {
            EventsAdmin.instance.arListeners[i].screenSizeChanged(__WEBPACK_IMPORTED_MODULE_0__dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth, __WEBPACK_IMPORTED_MODULE_0__dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight);
        }
    };
    return EventsAdmin;
}());

EventsAdmin.instance = new EventsAdmin();
//# sourceMappingURL=eventsadmin.js.map

/***/ }),

/***/ "../../../../../src/app/milib/milib.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/milib/milib.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  milib works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/milib/milib.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MilibComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MilibComponent = (function () {
    function MilibComponent() {
    }
    MilibComponent.prototype.ngOnInit = function () {
    };
    return MilibComponent;
}());
MilibComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-milib',
        template: __webpack_require__("../../../../../src/app/milib/milib.component.html"),
        styles: [__webpack_require__("../../../../../src/app/milib/milib.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MilibComponent);

//# sourceMappingURL=milib.component.js.map

/***/ }),

/***/ "../../../../../src/app/milib/utils/guid.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Guid; });
var Guid = (function () {
    function Guid() {
    }
    Guid.newGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    return Guid;
}());

//# sourceMappingURL=guid.js.map

/***/ }),

/***/ "../../../../../src/app/milib/views/buttons/button.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__("../../../../../src/app/milib/views/view.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__labels_label__ = __webpack_require__("../../../../../src/app/milib/views/labels/label.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_eventsadmin__ = __webpack_require__("../../../../../src/app/milib/events/eventsadmin.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__imgs_imagen__ = __webpack_require__("../../../../../src/app/milib/views/imgs/imagen.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




/**
 * Clase que hereda de View y se encarga de pintar un elemento visual compuesto Boton por un Label y una Imagen.
 */
var Button = (function (_super) {
    __extends(Button, _super);
    /**
     * Metodo de inicializacion de los elementos visuales en el Boton. Se ejecuta ak finalizar el constructor del padre (View)
     */
    /*public initFinish():void{
    
        this.imgBack=new Imagen(this.motor,0,0,this.w,this.h);
        this.motor.addViewToParentView(this,this.imgBack);

        this.lblTexto=new Label(this.motor,0,0,this.w,this.h);
        this.lblTexto.setTexto("Boton");
        this.motor.addViewToParentView(this,this.lblTexto);

        EventsAdmin.instance.addMouseClickToView(this);

    }*/
    function Button(vmotor, vX, vY, vW, vH) {
        var _this = _super.call(this, vmotor, vX, vY, vW, vH) || this;
        _this.sColor = null;
        _this.lblTexto = null;
        _this.imgBack = null;
        _this.imgBack = new __WEBPACK_IMPORTED_MODULE_3__imgs_imagen__["a" /* Imagen */](_this.motor, 0, 0, _this.w, _this.h);
        _this.motor.addViewToParentView(_this, _this.imgBack);
        _this.lblTexto = new __WEBPACK_IMPORTED_MODULE_1__labels_label__["a" /* Label */](_this.motor, 0, 0, _this.w, _this.h);
        _this.lblTexto.setTexto("Boton");
        _this.motor.addViewToParentView(_this, _this.lblTexto);
        __WEBPACK_IMPORTED_MODULE_2__events_eventsadmin__["a" /* EventsAdmin */].instance.addMouseClickToView(_this);
        return _this;
    }
    /**
     * Metodo de setter para el listener que escuche los eventos del boton.
     */
    Button.prototype.setListener = function (listener) {
        this.listener = listener;
    };
    /**
     * Metodo que fija la imagen de fondo para el boton, que llama al metodo setImg de la clase Imagen
     * @param vsPath String que contendra la ruta a la imagen en los ASSETS. Ej: './assets/btnsback/back1.png'
     */
    Button.prototype.setImagePath = function (vsPath) {
        this.imgBack.setImg(vsPath);
    };
    /**
     * Metodo que setea el color de fondo del boton.
     */
    Button.prototype.setColor = function (vsColor) {
        this.sColor = vsColor;
    };
    /**
     * Metodo paint del boton (ademas de pintar los hijos, label e imagen, aqui iria el codigo que queramos dar al boton (padre)
     * para pintarse)
     * @param vctx Contexto donde se va a pintar
     */
    Button.prototype.paint = function (vctx) {
        //console.log(this.xa+"========== "+this.ya);
    };
    /**
     * Metodo para setear el texto del boton.
     * @param vtexto String: Texto del boton.
     */
    Button.prototype.setTexto = function (vtexto) {
        this.lblTexto.setTexto(vtexto);
    };
    Button.prototype.setSize = function (vWidth, vHeight) {
        _super.prototype.setSize.call(this, vWidth, vHeight);
        this.lblTexto.setSize(vWidth, vHeight);
        this.imgBack.setSize(vWidth, vHeight);
    };
    ;
    /**
     * Metodo heredado del padre View que se ejecutara cuando detecte que en el View se ha pinchado con el raton.
     * @param e Evento de MouseEvent con los detalles del evento.
     */
    Button.prototype.mouseClicked = function (e) {
        if (this.listener != null && this.listener.buttonListenerOnClick != undefined)
            this.listener.buttonListenerOnClick(this);
    };
    Button.prototype.getTexto = function () {
        return this.lblTexto.getTexto();
    };
    return Button;
}(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]));

//# sourceMappingURL=button.js.map

/***/ }),

/***/ "../../../../../src/app/milib/views/imgs/imagen.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Imagen; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__("../../../../../src/app/milib/views/view.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Imagen = (function (_super) {
    __extends(Imagen, _super);
    function Imagen(vmotor, vX, vY, vW, vH) {
        var _this = _super.call(this, vmotor, vX, vY, vW, vH) || this;
        _this.blImgLoaded = false;
        _this.imgBack = new Image();
        _this.imgBack.onload = (function () { return _this.imageReady(_this); }); //Unica forma de no perder el hilo central es enviar al que ejecuta la accion como parametro.
        return _this;
    }
    /*
    public initFinish():void{
        this.imgBack=new Image();
        this.imgBack.onload = (() => this.imageReady(this));//Unica forma de no perder el hilo central es enviar al que ejecuta la accion como parametro.
    }
    */
    /**
     * Metodo que devuelve true en caso que la imagen se haya descargado correctamente
     */
    Imagen.prototype.isImgLoaded = function () {
        return this.blImgLoaded;
    };
    /**
     * Setea la URL (RUTA) de la imagen para la imagen. EJEMPLO: './assets/btnsback/back1.png'
     * @param urlImg String con la ruta de la imagen.
     */
    Imagen.prototype.setImg = function (urlImg) {
        this.imgBack.src = urlImg;
    };
    /**
     * Metodo que se ejecuta como un evento que notifica cuando la imagen se descarga correctamente
     */
    Imagen.prototype.imageReady = function (img_self) {
        this.blImgLoaded = true;
    };
    /**
     * Paint de la clase Imagen.
     * @param vctx Contexto para poder pintar la imagen.
     */
    Imagen.prototype.paint = function (vctx) {
        if (this.blImgLoaded) {
            vctx.drawImage(this.imgBack, this.xa, this.ya, this.w, this.h);
        }
    };
    return Imagen;
}(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]));

//# sourceMappingURL=imagen.js.map

/***/ }),

/***/ "../../../../../src/app/milib/views/labels/label.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Label; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__("../../../../../src/app/milib/views/view.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Label = (function (_super) {
    __extends(Label, _super);
    function Label(vmotor, vX, vY, vW, vH) {
        var _this = _super.call(this, vmotor, vX, vY, vW, vH) || this;
        _this.sColor = null;
        _this.sTexto = null;
        _this.sFontStyle = 'ABOVE';
        _this.sFontColor = 'black';
        _this.sAlign = "center";
        _this.sBaseLine = "top";
        _this.nXText = 0;
        _this.nYText = 0;
        _this.setTextAttrs("center", "middle");
        return _this;
    }
    /*
    
        public initFinish():void{
            this.setTextAttrs("center","middle");
        }
    */
    /**
     * Setea el color de fondo de label
     * @param vsColor
     */
    Label.prototype.setColor = function (vsColor) {
        this.sColor = vsColor;
    };
    /**
     * Setea los atributos del label (alineado en el centro horizontal y centro vertical)
     * @param vsAlign Alineado en horizontal (left, center, right)
     * @param vsBaseLine Alineado en el vertical (top, middle, bottom)
     */
    Label.prototype.setTextAttrs = function (vsAlign, vsBaseLine) {
        this.sAlign = vsAlign;
        this.sBaseLine = vsBaseLine;
        if (this.sAlign == "center") {
            this.nXText = (this.w >> 1);
        }
        else if (this.sAlign == "right") {
            this.nXText = (this.w);
        }
        if (this.sBaseLine == "top") {
            this.nYText = 0;
        }
        else if (this.sBaseLine == "middle") {
            this.nYText = (this.h >> 1);
        }
        else if (this.sBaseLine == "bottom") {
            this.nYText = (this.h);
        }
    };
    /**
     * Setea el tipo de fuente de nuestra label.
     * @param vsFontStyle string con el valor de la fuente que vamos a usar. Ej: "30px Comic Sans MS"
     */
    Label.prototype.setFontStyle = function (vsFontStyle) {
        this.sFontStyle = vsFontStyle;
    };
    /**
     * Setea el color de la fuente
     * @param vsFontColor El color de la fuente en formato string. Ej: #FF0000
     */
    Label.prototype.setFontColor = function (vsFontColor) {
        this.sFontColor = vsFontColor;
    };
    /**
     * Paint del label. Primero revisa si hay un color asignado de fondo y lo pinta, luego si tiene texto asignado.
     * Luego setea el tipo de fuente en el contexto, el color de la fuente en el contexto, la alineacion de la fuente en el contexto
     * y la linea de base en el contexto. Por ultimo pinta el texto en el contexto.
     * @param vctx
     */
    Label.prototype.paint = function (vctx) {
        if (this.sColor != null) {
            vctx.fillStyle = this.sColor;
            vctx.fillRect(this.xa, this.ya, this.w, this.h);
        }
        if (this.sTexto != null) {
            //vctx.font = "30px Comic Sans MS";
            //vctx.fillStyle ='#FF0000';
            //vctx.textBaseline='top';
            if (this.sFontStyle != null)
                vctx.font = this.sFontStyle;
            vctx.fillStyle = this.sFontColor;
            vctx.textAlign = this.sAlign;
            vctx.textBaseline = this.sBaseLine;
            vctx.fillText(this.sTexto, this.xa + this.nXText, this.ya + this.nYText);
        }
    };
    /**
     * Setea el texto en el label.
     * @param vtexto El valor del string para asociar.
     */
    Label.prototype.setTexto = function (vtexto) {
        this.sTexto = vtexto;
    };
    Label.prototype.getTexto = function () {
        return this.sTexto;
    };
    Label.prototype.setSize = function (vWidth, vHeight) {
        _super.prototype.setSize.call(this, vWidth, vHeight);
        this.setTextAttrs(this.sAlign, this.sBaseLine);
    };
    return Label;
}(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]));

//# sourceMappingURL=label.js.map

/***/ }),

/***/ "../../../../../src/app/milib/views/view.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return View; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_guid__ = __webpack_require__("../../../../../src/app/milib/utils/guid.ts");

var View = (function () {
    /**
     * Constructor del motor.
     * @param vmotor Referencia al motor para poder usarlo en los hijos.
     * @param vX Posicion X RELATIVA
     * @param vY Posicion Y RELATIVA
     * @param vW Ancho del view
     * @param vH Alto del view
     */
    function View(vmotor, vX, vY, vW, vH) {
        this.xa = 0;
        this.ya = 0;
        this.blVisible = true;
        this.x = vX;
        this.y = vY;
        this.w = vW;
        this.h = vH;
        this.motor = vmotor;
        this.uid = __WEBPACK_IMPORTED_MODULE_0__utils_guid__["a" /* Guid */].newGuid();
        this.initFinish();
    }
    /**
     * Metodo que se heredara por los hijos y sobreescribira para poder facilitar a los hijos agregar su propia configuracion
     * despues del contructor.
     */
    View.prototype.initFinish = function () {
    };
    /**
     * Metodo de pintado que se podra heredar por los hijos.
     * @param vctx
     */
    View.prototype.paint = function (vctx) {
    };
    /**
     * Metodo que se ejecuta en cada ciclo del motor para actualizar el view.
     * @param vParent Recibe como parametro la referencia el View Padre de este View.
     */
    View.prototype.update = function (vParent) {
        if (vParent != null) {
            this.xa = this.x + vParent.xa;
            this.ya = this.y + vParent.ya;
        }
    };
    /**
     * Metodo que fija el tamaño del View. (Ancho y Alto)
     * @param vWidth Ancho nuevo del view.
     * @param vHeight Alto nuevo del view.
     */
    View.prototype.setSize = function (vWidth, vHeight) {
        this.w = vWidth;
        this.h = vHeight;
    };
    View.prototype.setPosition = function (vX, vY) {
        this.x = vX;
        this.y = vY;
    };
    /**
     * Metodo que revisa si el pixel en la posicion X e Y (px y py) se encuentran dentro del view. Metodo usado para detectar
     * si se pincho con el raton encima del View.
     * @param px Coordenada X
     * @param py Coordenada Y
     */
    View.prototype.checkPointInView = function (px, py) {
        var blret = false;
        if ((this.xa < px) && (px < this.xa + this.w) && (this.ya < py) && (py < this.ya + this.h) && this.blVisible) {
            blret = true;
        }
        return blret;
    };
    /**
     * Metodo que se llamara DESDE el EventsAdmin y que el hijo del view sobreescribira. Este metodo se llamara cuando el
     * EventsAdmin quiera notificar al View que hubo un mouseClicked en el View.
     * @param e
     */
    View.prototype.mouseClicked = function (e) {
    };
    return View;
}());

//# sourceMappingURL=view.js.map

/***/ }),

/***/ "../../../../../src/app/milib/views/windows/window.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Window; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__("../../../../../src/app/milib/views/view.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__buttons_button__ = __webpack_require__("../../../../../src/app/milib/views/buttons/button.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * Clase que hereda de View y se encarga de pintar un elemento visual compuesto Boton por un Label y una Imagen.
 */
var Window = (function (_super) {
    __extends(Window, _super);
    /**
     * Metodo de inicializacion de los elementos visuales en el Boton. Se ejecuta ak finalizar el constructor del padre (View)
     */
    /*public initFinish():void{
    
        this.imgBack=new Imagen(this.motor,0,0,this.w,this.h);
        this.motor.addViewToParentView(this,this.imgBack);

        this.lblTexto=new Label(this.motor,0,0,this.w,this.h);
        this.lblTexto.setTexto("Boton");
        this.motor.addViewToParentView(this,this.lblTexto);

        EventsAdmin.instance.addMouseClickToView(this);

    }*/
    function Window(vmotor, vX, vY, vW, vH) {
        var _this = _super.call(this, vmotor, vX, vY, vW, vH) || this;
        _this.sColor = null;
        _this.imgBack = null;
        /*
        this.imgBack=new Imagen(this.motor,0,0,this.w,this.h);
        this.motor.addViewToParentView(this,this.imgBack);
        */
        _this.btnWindow = new __WEBPACK_IMPORTED_MODULE_1__buttons_button__["a" /* Button */](_this.motor, _this.w - _this.w / 5.5, _this.h - _this.h / 1.04, _this.w / 7, _this.h / 18);
        _this.btnWindow.setImagePath('./assets/btn.png');
        _this.btnWindow.setTexto("Volver a menu");
        _this.btnWindow.blVisible = true;
        _this.motor.addViewToParentView(_this, _this.btnWindow);
        _this.btnWindow.setListener(_this);
        _this.blVisible = false;
        return _this;
    }
    /**
     * Metodo de setter para el listener que escuche los eventos del boton.
    
    /**

     * Metodo que fija la imagen de fondo para el boton, que llama al metodo setImg de la clase Imagen
     * @param vsPath String que contendra la ruta a la imagen en los ASSETS. Ej: './assets/btnsback/back1.png'
     */
    Window.prototype.setImagePath = function (vsPath) {
        this.imgBack.setImg(vsPath);
    };
    /**
     * Metodo que setea el color de fondo del boton.
     */
    Window.prototype.setColor = function (vsColor) {
        this.sColor = vsColor;
    };
    /**
     * Metodo paint del boton (ademas de pintar los hijos, label e imagen, aqui iria el codigo que queramos dar al boton (padre)
     * para pintarse)
     * @param vctx Contexto donde se va a pintar
     */
    Window.prototype.paint = function (vctx) {
        //console.log(this.xa+"========== "+this.ya);
    };
    /**
     * Metodo para setear el texto del boton.
     * @param vtexto String: Texto del boton.
     */
    /**
     * Metodo heredado del padre View que se ejecutara cuando detecte que en el View se ha pinchado con el raton.
     * @param e Evento de MouseEvent con los detalles del evento.
     */
    Window.prototype.buttonListenerOnClick = function (btn) {
    };
    return Window;
}(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]));

/**
 * Interface que representara el listener del Boton.
 */
/**
 * Metodo de notificacion del boton para avisar de que se ha presionado en el boton.
 */
//# sourceMappingURL=window.js.map

/***/ }),

/***/ "../../../../../src/assets/font/ABOVE  - PERSONAL USE ONLY.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ABOVE  - PERSONAL USE ONLY.9b1493ee0605492116fc.ttf";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../webpack/hot ^\\.\\/log$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "../../../../webpack/hot/log.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../webpack/hot ^\\.\\/log$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../../../webpack-dev-server/client/index.js?http://localhost:4200");
module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map