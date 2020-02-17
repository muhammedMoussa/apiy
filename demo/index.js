import { Apiy } from '../apiy'
var api = new Apiy();
api.get({ url: 'https://jsonplaceholder.typicode.com/todos/1' })
.then(res => console.log(res))
.catch(err => console.log(err))