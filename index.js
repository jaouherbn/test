// const { address } = require('faker');

// const { Person } = require('./entities/Person');

// const ville = address.city();

// const person = new Person("Jhon", "Doe");

// console.log(ville);

// person.display();
const server = require("express");
const app = server();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!!');
});

app.get('/:firstname/:lastname', (req, res) => {
    const user = { fn: () => {}, firstname: req.params.firstname, lastname: req.params.lastname, fullname: `${req.params.firstname} ${req.params.lastname}` };
    res.send(user);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});