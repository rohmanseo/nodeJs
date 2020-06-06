import express from 'express';

const PORT = 3000;
const server = express();

server.get('/',(req,res,next) => {
    res.send('Hello World');
});

server.listen(PORT,() => {
    console.log('Server started on port ' + PORT);
});