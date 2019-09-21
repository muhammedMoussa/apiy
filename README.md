# Apiy 🚀
> a lightweight plugin that makes asynchronous api calls, one second of code!.

# Installation ⚙️

`npm i --save apiy`

Then...

```
import { apiy } from 'apiy';

apiy({
  method: 'get',
  url: 'https://reqres.in/api/users'
}).then(res => {
  console.log(res);
});
```
# Options
- method: HTTP-method. Usually "GET" or "POST".
- url:  the URL to request, a string, can be [URL](https://javascript.info/url) object.
- responseType: "json"– get as JSON (parsed automatically). can set to be 
   - "" – get as string,
   - "text" – get as string,
   - "arraybuffer" – get as ArrayBuffer (for binary data, see chapter ArrayBuffer, binary arrays),
   - "blob" – get as Blob (for binary data, see chapter ),
   - "document" – get as XML document (can use XPath and other XML methods),
 - body: body of request "op" (optional) in "POST", "PUT", "PATCH" methods.

### Todos :fast_forward:
  - Custom Functions To Every Request.
  - Handle Validation For Passed Options.
  - Handle Utilities.
  - Generic Headers Setting.
  - Handle Custom Callbacks.
 
 License :shipit:
----
ISC 

:open_hands:
