import express from 'express';

const app = express();
const port = 3000;

app.get('/',(req, res, next) => {
    res.send('hello world! welcome');

});

app.listen(port, () =>{
    console.log(`server is running on port ${port}`)
});