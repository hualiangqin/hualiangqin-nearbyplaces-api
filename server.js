const express = require('express');
var cors = require('cors');
const { res, req, response } = require('express'); 
const bodyParser = require('body-parser');
let data = require('./data');
const db = require('./db');
const app = express();
const port = process.env.PORT || 3002;

//middlewares
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to nearbyplaces API');
});

app.get('/places', (req, res) => {
    db.getPlaces()
    .then(result => res.json(result))
    .catch(e => res.status(500).json({error: 'Places could not be retrieved.'}));
});

app.get('/search/:searchTerm/:location', (req, res) =>{
    let searchTerm = req.params.searchTerm;
    let location = req.params.location;
    db.getSearchPlace(searchTerm, location)
    .then(result => {
        if (result){
            res.json(result)
        }else{
            res.status(404).json({message: `place with ${searchTerm} in ${location} is not found`});
        }
    })
    .catch(e => {
        console.log(e);
        res.status(500).json({ error: `An error happened on the server.` });
    });
});

app.post('/place', (req, res) => {
    let place = req.body;
    let place_name = place.place_name;
    let city = place.city;
    let state = place.state;
    let place_type = place.place_type;
    db.addPlace(place_name, city, state, place_type)
    .then(x => res.json({message: 'The place is added successfully'}))
    .catch(e => {
        console.log(e);
        res.status(500).json({ error: `An error happened on the server.` });
    });
});

app.post('/review/:placeId', (req, res) => {
    let placeId = req.params.placeId;
    let review = req.body;
    let stars = review.stars;
    let review_comment = review.review_comment;

    db.addReview(placeId, stars, review_comment)
    .then(x => res.json({message: `The review for place ${placeId} is added.`}))
    .catch(e => {
        console.log(e);
        res.status(500).json({ error: `An error happened on the server.` });
    });
});

app.listen(port, ()=> {
    console.log(`app listening on port ${port}`);
});