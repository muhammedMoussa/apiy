import { Apiy } from '../apiy'
var apiy = new Apiy();

// apiy.get({
//     url: 'https://jsonplaceholder.typicode.com/todos/1',
//     headers: {
//         hhh: 'aaaaaaaa'
//     },
//     allowCors: false,
//     responseType: 'text'
// })
// .then(res => console.log(res))
// .catch(err => console.log(err))

apiy.post({
    url: 'https://jsonplaceholder.typicode.com/posts',
    body: {
        title: 'foo',
        body: 'bar',
        userId: 1
      },
      headers: {
            hhh: 'aaaaaaaa'
        },
    allowCors: true,
      responseType: 'text'
})
.then(res => console.log(res))
.catch(err => console.log(err))

// apiy.put({
//     url: 'https://jsonplaceholder.typicode.com/posts/1',
//     body: {
//         title: 'foo',
//         body: 'bar',
//         userId: 1
//     },
//     allowCors: true,
//         headers: {
//         hhh: 'aaaaaaaa'
//     },
//     responseType: 'text'
// })
// .then(res => console.log(res))
// .catch(err => console.log(err))

// apiy.delete({
//     url: 'https://jsonplaceholder.typicode.com/posts/1'
// })
// .then(res => console.log(res))
// .catch(err => console.log(err))

// apiy.patch({
//     url: 'https://jsonplaceholder.typicode.com/posts/1',
//     body: {
//         title: 'foo'
//     },
//     headers: {
//         'ttt': 'jjjjjj'
//     }
// })
// .then(res => console.log(res))
// .catch(err => console.log(err))

// console.log('ssss')

