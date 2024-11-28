const express = require('express');
const app = express();

// define endpoint for exercise 4 here
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
// start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
