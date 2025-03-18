const express = require('express');
require('./NameDB/config');
const User = require('./NameDB/cont_user');
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors());

app.post('/register',async(req,resp)=>{
   const data= new User(req.body);
   const res = await data.save();
   app.post('/register', async (req, res) => {
    
  try {
    const data = new User(req.body);
    const result = await data.save();
    console.log(result);
    res.status(201).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error registering user' });
  }
});
  console.warn(res);
  resp.send(res);
})

app.listen(4000);

