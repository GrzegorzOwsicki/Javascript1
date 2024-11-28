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

// start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
