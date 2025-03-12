import express from 'express';
import bodyParser from 'body-parser';
import axios from "axios";
import ejs from "ejs";
import math from "math";


const app = express();
const port = 3000;
let data;
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', async (req, res) => {
    try{
        const number = math.floor(Math.random() * 200);
        const response = await axios.get(`https://api.jikan.moe/v4/manga/${number}/full`);
        res.render('index.ejs', { posts: response.data });
        data = response.data;
        console.log(number);
    }catch(error){
        res.send(error);
}});
app.listen(port, () => {
    console.log('Server is running on port 3000');
});