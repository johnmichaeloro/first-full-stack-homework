//This is a first attempt at a database for my company, Emphasis AI. This database holds examples of different patterns of emphasis. Each example is taken from a single text. It contains three different patterns of emphasis.

const express = require('express');
const app = express();
const port = 3000;
const examples = require("./models/examples");
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.use(methodOverride('_method'));

app.use(bodyParser.urlencoded({extended:false}));

require('./db/db');

app.get('/examples', (req, res) => {
  examples.find({}, (error, allExamples) => {
    res.render('index.ejs', {
      examples: allExamples
    })
  })
});

//I need to make sure that this route is sending me to the correct page
app.get('/examples/new', (req, res) => {
  res.render('new.ejs', {
    examples: examples
  })
})

app.get('/examples/:id', (req, res) => {
  examples.findById(req.params.id, (err, foundExample) => {
    res.render('show.ejs', {
      examples: foundExample
    })
  })
})

app.get('/examples/:id/edit', (req, res) => {
  examples.findById(req.params.id, (err, editExample) => {
    res.render('edit.ejs', {
      examples: editExample
    })
  })
})

app.post('/examples', (req, res) => {
  examples.create(req.body, (err, createdExample) => {
    res.redirect('/examples')
  });
});

app.put('/examples/:id', (req, res) => {
  examples.findOneAndUpdate(req.params.id, req.body, (err, updatedModel) => {
    console.log(updatedModel);
    res.redirect('/examples')
  });
});

app.delete('/examples/:id', (req, res) => {
  examples.findByIdAndDelete(req.params.id, (err, data) => {
    res.redirect('/examples');
  });
});

//I need a delete route created
//I need to check my update route

app.listen(port, () => {
  console.log("I am listening.");
});
