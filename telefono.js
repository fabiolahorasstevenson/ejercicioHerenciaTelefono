var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var telefono = /** @class */ (function () {
    function telefono(pEstaPrendido, pBateriaActual) {
        this.bateriaActual = pBateriaActual;
        this.estaPrendido = pEstaPrendido;
    }
    telefono.prototype.mandarMensaje = function (pNumeroTelefono) {
        console.log("Mandando mensaje a" + pNumeroTelefono);
    };
    telefono.prototype.hacerLlamada = function (pNumeroTelefono) {
        console.log("Llamando a " + pNumeroTelefono);
    };
    telefono.prototype.prenderApagar = function () {
        if (this.estaPrendido == true) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    return telefono;
}());
var telefonoConCamara = /** @class */ (function (_super) {
    __extends(telefonoConCamara, _super);
    function telefonoConCamara(pEstaPrendido, pBateriaActual) {
        return _super.call(this, pEstaPrendido, pBateriaActual) || this;
    }
    telefonoConCamara.prototype.sacarFotos = function () {
        console.log("Se ha sacado la foto deseada ");
    };
    return telefonoConCamara;
}(telefono));
var telefonoConRadio = /** @class */ (function (_super) {
    __extends(telefonoConRadio, _super);
    function telefonoConRadio(pEstaPrendido, pBateriaActual, pFrecuenciaActual) {
        var _this = _super.call(this, pEstaPrendido, pBateriaActual) || this;
        _this.frencuenciaActual = pFrecuenciaActual;
        return _this;
    }
    telefonoConRadio.prototype.verFrecuenciaActual = function () {
        return this.frencuenciaActual;
    };
    return telefonoConRadio;
}(telefono));
var telefono1 = new telefono(true, true);
