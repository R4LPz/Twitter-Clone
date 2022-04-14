const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const authentication = require('./middlewares/authentication');
const router = require('./routes');
require('./database/database');


const app = express();

app.use(cors({
	origin: process.env.CLIENT_URL
}));
app.use(express.json());
app.use(morgan('common'));
app.use(router);
app.use(authentication);

app.listen(process.env.PORT, ()=>{
	console.log(`🔥 Server is Running on port ${process.env.PORT}`); 
});