# Apiy 🚀
> a lightweight plugin that makes asynchronous api calls, one second of code!.

# Installation ⚙️

`npm install apiy` ||
`yarn apiy`

Then...

```
import { Apiy } from 'apiy';

const apiy = new Apiy();

api.get({ url: 'https://jsonplaceholder.typicode.com/todos/1' })
.then(res => console.log(res))
.catch(err => console.log(err))

apiy.post({
      url: 'https://reqres.in/api/register',
      body: {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    }
  })
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
});

  ...
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
 - body: body of request (optional) in "POST", "PUT", "PATCH" methods.

### Todos :fast_forward:
  - Handle Validation For Passed Options.
  - Generic Headers Setting.
  - Handle Custom Callbacks.
  - Handle Loading boolean.
  - Handle CORS.
  - Support ES5 Project.

 License :shipit:
----
ISC

:open_hands:
