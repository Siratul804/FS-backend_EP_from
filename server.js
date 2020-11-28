import express from 'express';
import mongoose from 'mongoose';

import Data from './data.js';
import dbModel from './dbModel.js';
import cors from 'cors';



const app = express();
const port = 8000;


app.use(express.json());
app.use(cors());



const connection_url = 'mongodb+srv://admin:N7tYk75sRgdZBbN1@cluster0.yo72m.mongodb.net/testM?retryWrites=true&w=majority;';

mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

 const hello = 'hi rubaiya'

app.get('/', (req,res) => res.status(200).send(`${hello}`));

app.get ('/get', (req,res) => res.status(201).send(Data) )


app.post('/post', (req,res)=> {
    

    const dbMts = req.body

    dbModel.create(dbMts, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else  {

            res.status(201).send(data)

        }
    })

})

app.listen(port, () => console.log(`listing on localhost: ${port}`));


