var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "node-fetch"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.AjaxXML = exports.AjaxString = exports.AjaxJSON = void 0;
    var node_fetch_1 = __importDefault(require("node-fetch"));
    function BodyWarning(http_method, http_body) {
        if (http_method === "GET" && http_body !== undefined) {
            console.warn("Warning! Can't use body in a GET HTTP request. Body changed to undefined.");
            return undefined;
        }
        return http_body;
    }
    function Ajax__(request_destination, init, then_method, catch_method) {
        node_fetch_1["default"](request_destination, init).then(function (response) { then_method(response); })["catch"](function (y) { catch_method(y); });
    }
    function AjaxString(request_destination, http_method, http_body, then_method, catch_method) {
        http_body = BodyWarning(http_method, http_body);
        var init = {
            method: http_method,
            body: http_body,
            headers: {
                'Content-Type': 'text/string'
            }
        };
        Ajax__(request_destination, init, then_method, catch_method);
    }
    exports.AjaxString = AjaxString;
    function AjaxXML(request_destination, http_method, http_body, then_method, catch_method) {
        http_body = BodyWarning(http_method, http_body);
        var init = {
            method: http_method,
            body: http_body,
            headers: {
                'Content-Type': 'application/xml'
            }
        };
        Ajax__(request_destination, init, then_method, catch_method);
    }
    exports.AjaxXML = AjaxXML;
    function AjaxJSON(request_destination, http_method, http_body, then_method, catch_method) {
        http_body = BodyWarning(http_method, http_body);
        var init = {
            method: http_method,
            body: JSON.stringify(http_body),
            headers: {
                'Content-Type': 'application/json'
            }
        };
        Ajax__(request_destination, init, then_method, catch_method);
    }
    exports.AjaxJSON = AjaxJSON;
});
