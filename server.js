const express = require('express');
var cors = require('cors');
const { res, req, response } = require('express'); 
const bodyParser = require('body-parser');
let data = require('./data');

const app = express();
const port = process.env.PORT || 3002;

//middlewares
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to nearbyplaces API');
});

app.get('/places', (req, res) => {
    let places = data.places;
    let metadata = places.map(x => {
        return {id: x.id, name: x.name, city: x.city, state: x.state, type: x.type};
    });
    res.json(metadata);
});

app.get('/search/:searchTerm/:location', (req, res) =>{
    let searchTerm = request.params.searchTerm;
    let location = request.params.location;

});

app.post('/place', (req, res) => {
    let place = request.body;

    response.json({message: 'The place is saved successfully'})
});

app.post('/review/:placeId', (req, res) => {
    let placeId = request.params.placeId;
    let review = request.body;

    response.json({message: `The review for place=${placeId} succeeded.`});
});

app.listen(port, ()=> {
    console.log(`app listening on port ${port}`);
});