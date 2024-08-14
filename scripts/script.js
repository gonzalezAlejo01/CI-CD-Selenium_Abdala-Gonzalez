"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var chromedriver = require("chromedriver");
var selenium_webdriver_1 = require("selenium-webdriver");
var chrome = require("selenium-webdriver/chrome");
var assert = require("assert");
var fs = require("fs");
var service = new chrome.ServiceBuilder(chromedriver.path).build();
var laUrl = "http://lolcalhost:4200";
describe('la selenio prueba', function () {
    var driver;
    before(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new selenium_webdriver_1.Builder().forBrowser("chrome").setChromeOptions(new chrome.Options().headless()).build()];
                case 1:
                    driver = _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    after(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, driver.quit()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    describe("poner datos", function () {
        it("login", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, driver.get(laUrl + "/login")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id("name")).sendKeys("!admin")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id("password")).sendKeys("!admin")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id("btn")).click()];
                    case 4:
                        _a.sent();
                        driver.sleep(3000);
                        return [2 /*return*/];
                }
            });
        }); });
        it("carga", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, driver.get(laUrl + "/carga")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id("palabra")).sendKeys("palabra(YaSeSoyMuyGraciosoJaJaJa)")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id("numero")).sendKeys("123456789")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id("mandar")).click()
                            /*const titulo = await driver.getTitle();
                            assert.strictEqual(titulo, 'carga de datos');*/
                        ];
                    case 4:
                        _a.sent();
                        /*const titulo = await driver.getTitle();
                        assert.strictEqual(titulo, 'carga de datos');*/
                        driver.sleep(3000);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe("Navegacion", function () {
        it("menu", function () { return __awaiter(void 0, void 0, void 0, function () {
            var titulo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, driver.get(laUrl + "/Datos")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, driver.getTitle()];
                    case 2:
                        titulo = _a.sent();
                        assert.strictEqual(titulo, "Datos");
                        return [2 /*return*/];
                }
            });
        }); });
        it("carga datos", function () { return __awaiter(void 0, void 0, void 0, function () {
            var titulo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, driver.get(laUrl + "/Datos")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id("cargadatos")).click()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, driver.getTitle()];
                    case 3:
                        titulo = _a.sent();
                        assert.strictEqual(titulo, "carga de datos");
                        return [2 /*return*/];
                }
            });
        }); });
        it("ver datos", function () { return __awaiter(void 0, void 0, void 0, function () {
            var titulo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, driver.get(laUrl + "/carga")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id("cargardatos")).click()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, driver.getTitle()];
                    case 3:
                        titulo = _a.sent();
                        assert.strictEqual(titulo, "carga de datos");
                        return [2 /*return*/];
                }
            });
        }); });
        it("cerrar sesion", function () { return __awaiter(void 0, void 0, void 0, function () {
            var titulo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, driver.get(laUrl + "/Datos")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id("logout")).click()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, driver.getTitle()];
                    case 3:
                        titulo = _a.sent();
                        assert.strictEqual(titulo, "login");
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('Screenshot', function () {
        it('Menu (no es el home)', function () { return __awaiter(void 0, void 0, void 0, function () {
            var imagen;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, driver.get(laUrl)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, driver.takeScreenshot()];
                    case 2:
                        imagen = _a.sent();
                        fs.writeFileSync('meniu.png', imagen, 'base64');
                        return [2 /*return*/];
                }
            });
        }); });
        it('Datos', function () { return __awaiter(void 0, void 0, void 0, function () {
            var imagen;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, driver.get(laUrl + "/Datos")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, driver.takeScreenshot()];
                    case 2:
                        imagen = _a.sent();
                        fs.writeFileSync('datos.png', imagen, 'base64');
                        return [2 /*return*/];
                }
            });
        }); });
        it('Login', function () { return __awaiter(void 0, void 0, void 0, function () {
            var imagen;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, driver.get(laUrl + "/login")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, driver.takeScreenshot()];
                    case 2:
                        imagen = _a.sent();
                        fs.writeFileSync('login.png', imagen, 'base64');
                        return [2 /*return*/];
                }
            });
        }); });
        it('Register', function () { return __awaiter(void 0, void 0, void 0, function () {
            var imagen;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, driver.get(laUrl + "/registro")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, driver.takeScreenshot()];
                    case 2:
                        imagen = _a.sent();
                        fs.writeFileSync('register.png', imagen, 'base64');
                        return [2 /*return*/];
                }
            });
        }); });
        it('Carga de Datos', function () { return __awaiter(void 0, void 0, void 0, function () {
            var imagen;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, driver.get(laUrl + "/carga")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, driver.takeScreenshot()];
                    case 2:
                        imagen = _a.sent();
                        fs.writeFileSync('cargaDatos.png', imagen, 'base64');
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
