const router = require('express').Router(); // require the Express Router
let User = require('../models/user.model'); // require the user Mongoose model

/* First route or endpoint that handles the HTTP GET requests on the /users path */
router.route('/').get((req, res) => { // if url after /users is just / and the request is get...
  User.find() // find() is a Mongoose method that gets a list of all users from the MongoDB Atlas database
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

/* Second route or endpoint */
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const newUser = new User({username});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
