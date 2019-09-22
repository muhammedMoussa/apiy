import { apiyCore } from '../src/index';

const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');
const putBtn = document.getElementById('put-btn');
const patchBtn = document.getElementById('patch-btn');
const deleteBtn = document.getElementById('delete-btn');
const resultDiv = document.getElementById('results');

const apiy = apiyCore();

const getDemo = () => {
    apiy.get('https://reqres.in/api/users')
    .then(res => {
        resultDiv.innerText = JSON.stringify(res.data);
    });
};

const postDemo = () => {
    apiy.post({
        url: 'https://reqres.in/api/register',
        body: {
            email: 'eve.holt@reqres.in',
            password: 'cityslicka'
        }
    })
    .then(res => {
        resultDiv.innerText = JSON.stringify(res);
    })
    .catch(err => {
        resultDiv.innerText = JSON.stringify(err);
    });
};

const putDemo = () => {
    apiy.put({
        url: 'https://reqres.in/api/users/2',
        body: {
            'name': 'morpheus',
            'job': 'zion resident'
        }
    })
    .then(res => {
        resultDiv.innerText = JSON.stringify(res);
    })
    .catch(err => {
        resultDiv.innerText = JSON.stringify(err);
    });
};

const patchDemo = () => {
    apiy.patch({
        url: 'https://reqres.in/api/users/2',
        body: {
            'name': 'morpheus',
            'job': 'zion resident'
        }
    })
    .then(res => {
        resultDiv.innerText = JSON.stringify(res);
    })
    .catch(err => {
        resultDiv.innerText = JSON.stringify(err);
    });
};

const deleteDemo = () => {
    apiy.delete('https://reqres.in/api/users/2')
    .then(res => {
        resultDiv.innerText = JSON.stringify(res);
    });
};

getBtn.addEventListener('click', getDemo);
postBtn.addEventListener('click', postDemo);
putBtn.addEventListener('click', putDemo);
patchBtn.addEventListener('click', patchDemo);
deleteBtn.addEventListener('click', deleteDemo);