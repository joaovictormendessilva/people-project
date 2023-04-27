const express = require('express');
const app = express();
const cors = require('cors');

// Models
const Person = require('./models/Person');
const Address = require('./models/Address');

// Routes
const personRoutes = require('./routes/personRoutes');

// DB Connection
const conn = require('./db/conn');

// Read body
app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

// Cors
app.use(cors());

// Routes
app.use('/', personRoutes);

// DB Connection
conn.sync()
.then(() => {
    app.listen(3000);
    console.log("Conectado com sucesso!");
}).catch((error) => {
    console.log("Erro de conexão ao banco! ", error);
});