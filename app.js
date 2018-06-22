const app = require('express')();

app.get('/api', (req, res) => {
    res.json(req.query);
})
//lo que escuches en el puerto 3000, me lo envias a la pagina(en la barra del navegador)

app.listen(3000, () => {
    console.log('El servidor funciona en el puerto 3000');
})