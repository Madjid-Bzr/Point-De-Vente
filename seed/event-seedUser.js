const db = require('../config/database');
const EventUser = require('../models/user');

let newEvent = [
    new EventUser({
        lastName: 'User ',
        firstName: 'utilisateur',
        email: 'test@gmail.com',
        tel:'055588888',
        adress: 'cité 400log',
        mdp: 'pass',
        date: '10/10/2020',
        created_at: Date.now()

    }),
]


newEvent.forEach((event) => {
    event.save((err) => {
        if (err) {
            console.log(err)
        }
    })
})