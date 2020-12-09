'use strict';

require('dotenv').config();
const { Pool } = require('pg');


const postgreConnectionString =
    `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DATABASE}`;

// console.log(postgreConnectionString);

const postgrePool = new Pool({
    connectionString: process.env.DATABASE_URL ? process.env.DATABASE_URL : postgreConnectionString,
    ssl: { rejectUnauthorized: false }
});

function getPlaces() {
    return postgrePool.query('select * from place')
    .then(result => result.rows);
}

function getReviews(placeId) {
    return postgrePool.query('select stars, review_comment from review where place_id = $1', [placeId])
    .then(result => result.rows);
}

function getSearchPlace(searchTerm, location) {
    searchTerm = "%" + searchTerm + "%";
    return postgrePool.query(
        'select * from place where lower(place_name) like lower($1) and city = $2 or lower(place_type) like lower($3)', 
        [searchTerm, location, searchTerm])
        .then(result => result.rows[0]);
}

function addPlace(place_name, city, state, place_type) {
    return postgrePool.query('insert into place(place_name, city, state, place_type) values($1, $2, $3, $4) returning id', [place_name, city, state, place_type])
        .then(x => x.rows);
}

function addReview(place_id, stars, review_comment){
    return postgrePool.query('insert into review(stars, review_comment, place_id) values($1, $2, $3) returning id', [stars, review_comment, place_id])
        .then(x => x.rows);
}

module.exports = { getSearchPlace, addPlace, getPlaces, addReview, getReviews }