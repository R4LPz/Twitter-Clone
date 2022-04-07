require('./database/database');
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const router = require('./routes');
const authentication = require('./middlewares/authentication');
const cors = require('cors');


const app = express();

app.use(
	cors({
		origin: process.env.CLIENT_URL
	})
);
app.use(express.json());
app.use(morgan('common'));
app.use(router);
app.use(authentication);


app.listen(process.env.PORT, ()=>{
	console.log(`🔥 Server is Running on port ${process.env.PORT}`); 
});