const express = require('express')
const app = express()
const port = 3333

const hbs = require("hbs");

app.set('view engine', 'hbs');


hbs.registerPartials(__dirname + '/views/partials')
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    console.log(`${req.ip} - ${req.method} ${req.path}`);
    next();
})
app.get('/', (req, res) => {
    res.sendFile(__dirname + 'index.html');
})

app.get('/faq', (req, res) => {
    //res.send('<h1>Frequently Asked Questions.<h1>')
    res.render("faq.hbs", {
        pageHeading: "Frequently Asked Questions",
        copyrights: " Andrew Clark 2021"
    })
})

app.get("/contact", (req, res) => {
    res.render("contact.hbs", {
        pageHeading: "Contact",
        headerText: "Contact Header",
        welcomeMessage: "Welcome"
    })
})

app.get('/data', (req, res) => {
    res.send({'temp': 98.6, 'power': 'on', 'enabled': true});
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})