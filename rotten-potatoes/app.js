// INDEX
app.get('/reviews', (req, res) => {
  res.render('reviews-index', { reviews: reviews });
})

app.use(bodyParser.urlencoded({ extended: true }));
// CREATE
app.post('/reviews', (req, res) => {
  console.log(req.body);
  // res.render('reviews-new', {});
})

// app.js

// CREATE
app.post('/reviews', (req, res) => {
  Review.create(req.body).then((review) => {
    console.log(review);
    res.redirect('/');
  }).catch((err) => {
    console.log(err.message);
  })
})
// app.js

// OUR MOCK ARRAY OF PROJECTS
let reviews = [
  { title: "Great Review" },
  { title: "Next Review" }
]

// app.js
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// app.js

app.get('/', (req, res) => {
  res.render('home', { msg: 'Hello World!' });
})

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})

// INITIALIZE BODY-PARSER AND ADD IT TO APP
const bodyParser = require('body-parser');
// app.js

// INDEX
app.get('/', (req, res) => {
  res.render('reviews-index', { reviews: reviews });
})

// app.js

...

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rotten-potatoes', { useMongoClient: true });

...

// app.js

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rotten-potatoes', { useMongoClient: true });

const Review = mongoose.model('Review', {
  title: String
});

// app.js

// var reviews = [
//   { title: "Great Review" },
//   { title: "Next Review" }
// ]

// INDEX
app.get('/', (req, res) => {
  Review.find()
    .then(reviews => {
      res.render('reviews-index', { reviews: reviews });
    })
    .catch(err => {
      console.log(err);
    })
})


// app.js

// NEW
app.get('/reviews/new', (req, res) => {
  res.render('reviews-new', {});
})
