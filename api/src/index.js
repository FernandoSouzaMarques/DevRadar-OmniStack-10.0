const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const http = require('http');



const app = express();
const server = http.Server(app)

const port = require('./config/port');
const routes = require('./routes/routes');
const db = require('./config/database').mongoURI;
const { setupWebsocket } = require('./websocket')

setupWebsocket(server);

mongoose
  .connect(
    db,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use(cors());
app.use(express.json());
app.use(routes);



server.listen(port, console.log(`rodando na porta ${port}`));