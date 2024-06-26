const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors())

const registros = [
    {
        usser: 'admin',
        pass: '123',
        name: 'Mod'
    },
    {
        usser: 'angel',
        pass: '2001',
        name: 'damon'
    }
    ];

app.get('/', (req , res) =>{
    res.send('Api de registro funcionando');
});

app.get('/api/registros', (req , res) =>{
    res.send(registros);
});

app.get('/api/registros/:usser', (req , res) =>{
    const registro = registros.find(x => x.usser === req.params.usser);
    if (!registro) return res.status(404).send('No se ha encontrado');
    else res.send(registro);
});

app.post('/api/registros', (req, res) => {
    const registro = {
        usser: req.body.usser,
        pass: req.body.pass,
        name: req.body.name
    };
    registros.push(registro);
    res.send(registro);
});

const port = process.env.port || 3001;
app.listen(port, () => console.log(`Puerto ${port}`));