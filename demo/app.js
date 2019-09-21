import { apiy } from '../src/index';

const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');
const resultDiv = document.getElementById('results');

const getDemo = () => {
    apiy({
        method: 'get',
        url: 'https://reqres.in/api/users',
    }).then(responseData => {
        resultDiv.innerText = JSON.stringify(responseData.data);
    });
};

const postDemo = () => {
    apiy({
        method: 'POST',
        url: 'https://reqres.in/api/register',
        body: {
            email: 'eve.holt@reqres.in',
            password: 'cityslicka'
        }
    })
    .then(responseData => {
        resultDiv.innerText = JSON.stringify(responseData);
    })
    .catch(err => {
        resultDiv.innerText = JSON.stringify(err);
    });
};

getBtn.addEventListener('click', getDemo);
postBtn.addEventListener('click', postDemo);