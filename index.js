const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/math/circle/:r', (req, res) => {
  //TODO1  
    const r = parseFloat(req.params.r);
  
    if(isNaN(r) || r <= 0){
      return res.status(400).json({ error: 'Invalid input' });
    }
  
    const pole = Math.PI * Math.pow(r,2);
    const obwod = 2 * Math.PI * r;
    
    const result = {
      pole: pole,
      obwod: obwod
      
    }
  
    res.json(result);
  });


  app.get('/math/rectangle/:width/:heigh', (req,res) => {
    const a = parseFloat(req.params.width);
    const h = parseFloat(req.params.heigh);
  
    if(isNaN(a) || a <= 0 || isNaN(h) || h <= 0){
      return res.status(400).json({ error: 'Invalid input' });
    }
  
    const pole = a * h;
    const obwod = 2*a+2*h;
  
    const result = {
      pole: pole,
      obwod: obwod
      
    }
  
    res.json(result);
  })


  app.get('/math/power/:base/:exponent', (req, res) => {
    const base = parseFloat(req.params.base);
    const exponent  = parseFloat(req.params.exponent);
  
    if (isNaN(base) || isNaN(exponent)) {
      return res.status(400).json({ error: 'Invalid input' });
    }
    const power = Math.pow(base, exponent);
  
    let root = null;
    if (req.query.root === 'true'){
      root  = Math.sqrt(base)
    }
  
    const result = {
      power:power,
      ...(root !== null && { root: root })
    };
  
    res.json(result);
  })

  let categories = ['funnyJoke', 'lameJoke'];

  let funnyJoke = [
    { 'joke': 'Dlaczego komputer poszedł do lekarza?', 'response': 'Bo złapał wirusa!' },
    { 'joke': 'Dlaczego komputer nie może być głodny?', 'response': 'Bo ma pełen dysk!' },
    { 'joke': 'Co mówi jeden bit do drugiego?', 'response': '„Trzymaj się, zaraz się przestawiamy!”' }
  ];

  let lameJoke = [
    { 'joke': 'Dlaczego programiści preferują noc?', 'response': 'Bo w nocy jest mniej bugów do łapania!' },
    { 'joke': 'Jak nazywa się bardzo szybki programista?', 'response': 'Błyskawiczny kompilator!' }
  ];


  app.get('/jokebook/categories', (req, res) => {
    res.json({ categories });
  });


  app.get('/jokebook/joke/:category', (req, res) => {
    const category = req.params.category;

    let jokes;
    if (category === 'funnyJoke'){
      jokes = funnyJoke;
    }
    else if(category === 'lameJoke'){
      jokes =  lameJoke
    }
    else{
      return res.status(400).json({ error: `no jokes for category ${category}` });
    }

    const randomJoke = jokes[Math.floor(Math.random()*jokes.length)];
    res.json(randomJoke);
});


// start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
