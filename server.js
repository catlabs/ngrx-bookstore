var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);

var faker = require('faker');

var authors = [];

for (let index = 0; index < 10; index++) {
    authors.push(
        {
            id: index + 1,
            name: faker.name.findName(),
            year: new Date(faker.date.between('1920-10-10', '1990-10-10')).getFullYear()
        }
    );
}

app.get('/authors', function (req, res) {
    res.json(authors);
})