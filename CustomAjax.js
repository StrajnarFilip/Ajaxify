"use strict";
var _a;

function BodyWarning(http_method, http_body) {
    if (http_method === "GET" && http_body !== undefined) {
        console.warn("Warning! Can't use body in a GET HTTP request. Body changed to undefined.");
        return undefined;
    }
    return http_body;
}

function Ajax__(request_destination, init, then_method, catch_method) {
    fetch(request_destination, init).then(function(response) { then_method(response); })["catch"](function(y) { catch_method(y); });
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