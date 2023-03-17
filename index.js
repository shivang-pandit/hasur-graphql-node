const express = require('express');
const app = express();

const router = require('./src/routes');

app.use(express.json());

app.get('/',(req,res)=> {
    res.send('Welcome!!!!');
})

app.use('/api/v1/', router);

const server = app.listen(3030, () => {
    console.log("server listening on port 3030");
});