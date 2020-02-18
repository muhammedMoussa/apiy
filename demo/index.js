import { Apiy } from '../apiy'
var api = new Apiy();

// api.get({ url: 'https://jsonplaceholder.typicode.com/todos/1' })
// .then(res => console.log(res))
// .catch(err => console.log(err))

// api.post({
//     url: 'https://jsonplaceholder.typicode.com/posts',
//     body: {
//         title: 'foo',
//         body: 'bar',
//         userId: 1
//       },
//       responseType: 'text'
// })
// .then(res => console.log(res))
// .catch(err => console.log(err))

api.put({
    url: 'https://jsonplaceholder.typicode.com/posts/1',
    body: {
        title: 'foo',
        body: 'bar',
        userId: 1
    }
})
.then(res => console.log(res))
.catch(err => console.log(err))

