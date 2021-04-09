# Ajaxify
Simpler form of Ajax

# Available functions:
AjaxString(request_destination,http_method,http_body,then_method,catch_method)
AjaxXML(request_destination,http_method,http_body,then_method,catch_method)
AjaxJSON(request_destination,http_method,http_body,then_method,catch_method)

# How to use:

You should download the TypeScript (CustomAjax.ts) file if you're using tsc. All functions have very strict types, which should help you make correct code at compile time.

If you use regular JavaScript, you can download regular (CustomAjax.js) file, and use it.

Since the file is so short (it's just a wrapper function around fetch API), you could also just copy-paste the file.


# Example use in browser:
Simply add <script> HTML tag before your JS:
```html
<script src="https://raw.githubusercontent.com/StrajnarFilip/Ajaxify/main/CustomAjax.js"></script>
<script src="yourOwn.js"></script>
```

# Example use in node.js:

```ts
import { AjaxJSON, AjaxXML, AjaxString } from "./AjaxNode";

function ErrorLogger(error_name: Error) {
    console.log(error_name);
}

function Fetch_handle_1(response: Response) {
    console.log("Response recieved:");
    response.json().then((x: any) => { console.log("We got back:"); console.log(x) });
}

AjaxJSON("http://127.0.0.1:3001/", "POST", { _path: "" }, Fetch_handle_1, ErrorLogger);
```
