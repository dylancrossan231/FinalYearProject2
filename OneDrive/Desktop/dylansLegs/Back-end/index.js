import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
// import routes from './src/routes/crmRoutes';
const dotenv = require('dotenv');
const router = express.Router();
dotenv.config();

const app = express();

//import routes
const authRoute = require('./src/routes/auth')
const postRoute = require('./src/routes/posts')
const workoutsRoute = require('./src/routes/workouts')
const exercisesRoute = require('./src/routes/exercises')




// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/CRMdb', {
//     useNewUrlParser: true,useUnifiedTopology: true
// });

const PORT = 3000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser: true,useUnifiedTopology: true}, ()=>   
         console.log("connected to DBs :)")     
, );

app.use(express.json());
 
//Route middlewares
app.use('/api/posts', postRoute);
app.use('/api/user', authRoute);
app.use("/api/exercises", exercisesRoute);

app.use('/api/workouts', workoutsRoute);







// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes(app);


// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);

