"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
require("rxjs/add/operator/map");
var AuthService = (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.isLoggedIn = false;
        this.baseUrl = "http://localhost:8000/";
        this.redirectUrl = "/dashboard";
        console.log("Auth service initialized...");
    }
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        var body = {
            email: email,
            password: password
        };
        return this.http.post(this.baseUrl + "users/login", JSON.stringify(body), { headers: headers }).map(function (res) {
            _this.isLoggedIn = true;
            _this.user = res.json();
            _this.router.navigate([_this.redirectUrl]);
        });
    };
    // public authenticated(callback): boolean {
    //
    //     this.isUserLoggedIn(function(loggedIn: boolean){
    //         return loggedIn;
    //     });
    //
    //     return false;
    // }
    AuthService.prototype.authenticated = function () {
        return this.http.get("users/authenticated").map(function (res) {
            return res.status === 200 ? true : false;
        });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return this.http.get(this.baseUrl + "users/logout").map(function (res) {
            // do whatever with your response
            _this.isLoggedIn = false;
            _this.router.navigate(["/login"]);
        });
    };
    AuthService.prototype.getLoggedUser = function () {
        if (this.user)
            return this.user;
        return null;
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map
