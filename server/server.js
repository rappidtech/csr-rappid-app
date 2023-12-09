require('@babel/register')({
    presets: ['@babel/preset-env', '@babel/preset-react']
});
const express = require('express');
const fs = require('fs');
const generarHTML = require('./generadorHTML');
const path = require('path');
const app = express();
const PORT = 8000;
   
app.get('/', (req, res) => {
  
    const user = req.params.user;
    const routeData = path.join(__dirname,'../src/edits/data.json');
    const routeStyle = path.join(__dirname,'../src/edits/styles.json');
    console.log(routeStyle)
    // const routeData = `usuarios/${user}/datos/data.json`;
    // const routeStyle = `usuarios/${user}/styles/styles.json`; 

    if (fs.existsSync(routeData) && fs.existsSync(routeStyle)) {
        console.log('Los archivos existen');

        // console.log('user', user)
 
        const datos = JSON.parse(fs.readFileSync(routeData, 'utf8'));
        const estilos = JSON.parse(fs.readFileSync(routeStyle, 'utf8'));

        // console.log('estilos', estilos)

        const page = generarHTML( datos, estilos );

        res.send(page);
         
    } else {
        console.log('Los archivos no existen');
        res.status(404).send(`Usuario no encontrado.`);
    }

});
 
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
 