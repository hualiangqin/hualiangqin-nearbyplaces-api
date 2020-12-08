const express = require('express');
var cors = require('cors');
const app = express();
const port = 3000;

//middlewares
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, ()=> {
    console.log(`app listening on port ${port}`);
});