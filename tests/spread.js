const defaults = {
    name: '',
    lastname: '',
    email: ''
};

const someProperties = {
    ...defaults,
    name: 'Pepito',
    email: 'Perez'
};

console.log('defaults: ', defaults);
console.log('someProperties: ', someProperties);




