let places =
[
    {
        id: 1,
        name: "place1",
        city: "tucson",
        state: "AZ",
        type : "restaurant",
        reviews:[
            {
                stars: 5,
                comment: "nice place"        
            },
            {
                stars: 2,
                comment: "will not come again"
            }
        ]
    },
    {
        id: 2,
        name: "place 3",
        city: "tucson",
        state: "AZ",
        type: "shopping mall",
        reviews:[
            {
                stars: 1,
                comment: "too many people"
            },
            {
                stars: 4,
                comment: "have bought what I wanted"
            }
        ]
    },
    {
        id: 3,
        name: "place 8",
        city: "tempe",
        state: "AZ",
        type: "dry cleaning",
        reviews: [
            {
                stars: 0,
                comment: "every dirty"
            }
        ]
    },
    {
        id: 4,
        name: "place 28",
        city: "phoenix",
        state: "AZ",
        type: "barber",
        reviews: [
            {
                stars: 5,
                comment: "nice person!"
            }
        ]
    },
    {
        id: 5,
        name: "place 167",
        city: "apache junction",
        state: "AZ",
        type: "grocery",
        reviews :[
            {
                stars: 4,
                comment: "have everything I needed"
            },
            {
                stars: 1,
                comment: "the vege is not fresh"
            }
        ]
    }
]

module.exports.places = places;