# Apiy 🚀
> a lightweight plugin that makes asynchronous api calls, one second of code!.

# Installation ⚙️

`npm install apiy` ||
`yarn add apiy`

Then...

```
import { Apiy } from 'apiy'

const apiy = new Apiy()

apiy.get({ url: 'https://jsonplaceholder.typicode.com/todos/1' })
.then(res => console.log(res))
.catch(err => console.log(err))

apiy.post({
    url: 'https://reqres.in/api/register',
    body: {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    },
    headers: { 'Authorization': 'Bearer ++token++' },
    allowCors: true,
    responseType: 'text'
  })
  .then(res => console.log(res))
  .catch(err => console.log(err))

  ...
```
# Options
- url: the URL to request, a string, can be [URL](https://javascript.info/url) object.
- responseType:
  - "json"– get as JSON (parsed automatically). can set to be
  - "" – get as string,
  - "text" – get as string,
  - "arraybuffer" – get as ArrayBuffer (for binary data, see chapter ArrayBuffer, binary arrays),
  - "blob" – get as Blob (for binary data, see chapter ),
  - "document" – get as XML document (can use XPath and other XML methods),
  - json by default.
- body.
- allowCors: Can make cross-origin requests, using the same CORS policy, false by default.

### Todos :fast_forward:
  - Handle Custom Callbacks.
  - Handle Loading boolean.
  - Support ES5 Project.
----
### License :shipit:

ISC

:open_hands:
