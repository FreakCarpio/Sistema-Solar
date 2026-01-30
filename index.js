const express = require('express');
const app = express();
const path = require('path');

// Carpeta de vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('pages/planetas');
});

app.get('/Mercurio', (req, res) => {
    res.render('pages/mercurio');
});

app.get('/Jupiter', (req, res) => {
    res.render('pages/Jupiter');
});

app.get('/Venus', (req, res) => {
    res.render('pages/Venus');
});

app.get('/Tierra', (req, res) => {
    res.render('pages/Tierra');
});

app.get('/Saturno', (req, res) => {
    res.render('pages/Saturno');
});

app.get('/urano', (req, res) => {
    res.render('pages/Urano');
});

app.get('/Neptuno', (req, res) => {
    res.render('pages/Neptuno');
});

app.get('/Marte', (req, res) => {
    res.render('pages/Marte');
});

app.listen(4000, () => {
    console.log('listen to port 4000');
});
