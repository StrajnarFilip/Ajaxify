function BodyWarning(http_method: "GET" | "POST" | "PUT" | "DELETE" | "CONNECT" | "OPTIONS" | "TRACE" | "PATCH" | undefined,
    http_body: any | undefined): any | undefined {
    if (http_method === "GET" && http_body !== undefined) {
        console.warn("Warning! Can't use body in a GET HTTP request. Body changed to undefined.");
        return undefined;
    }
    return http_body;
}

function Ajax__(request_destination: RequestInfo, init: RequestInit, then_method: (data_recieved: Response) => any, catch_method: (error: any) => any) {

    fetch(request_destination, init).then((response: any) => { then_method(response) }).catch((y: any) => { catch_method(y) });
}

function AjaxString(request_destination: RequestInfo, http_method: "GET" | "POST" | "PUT" | "DELETE" | "CONNECT" | "OPTIONS" | "TRACE" | "PATCH" | undefined,
    http_body: string | undefined, then_method: (data_recieved: Response) => any, catch_method: (error: any) => any) {
    http_body = http_body = BodyWarning(http_method, http_body);
    let init: RequestInit = {
        method: http_method,
        body: http_body,
        headers: {
            'Content-Type': 'text/string',
        }
    }

    Ajax__(request_destination, init, then_method, catch_method);
}

function AjaxXML(request_destination: RequestInfo, http_method: "GET" | "POST" | "PUT" | "DELETE" | "CONNECT" | "OPTIONS" | "TRACE" | "PATCH" | undefined,
    http_body: string | undefined, then_method: (data_recieved: Response) => any, catch_method: (error: any) => any) {
    http_body = http_body = BodyWarning(http_method, http_body);
    let init: RequestInit = {
        method: http_method,
        body: http_body,
        headers: {
            'Content-Type': 'application/xml',
        }
    }

    Ajax__(request_destination, init, then_method, catch_method);
}

function AjaxJSON(request_destination: RequestInfo, http_method: "GET" | "POST" | "PUT" | "DELETE" | "CONNECT" | "OPTIONS" | "TRACE" | "PATCH" | undefined,
    http_body: any | undefined, then_method: (data_recieved: Response) => any, catch_method: (error: any) => any) {
    http_body = BodyWarning(http_method, http_body);
    let init: RequestInit = {
        method: http_method,
        body: JSON.stringify(http_body),
        headers: {
            'Content-Type': 'application/json',
        }
    }
    Ajax__(request_destination, init, then_method, catch_method);
}