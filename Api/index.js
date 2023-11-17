const express = require('express');
const fees = require('./routes/fees')
const members = require('./routes/members')
const revenue = require('./routes/revenue')
const schedule = require('./routes/schedule')
const students = require('./routes/students')
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());

app.use('/fees', fees);
app.use('/members', members);
app.use('/revenue', revenue);
app.use('/schedule', schedule);
app.use('/students', students);

app.listen(8080, () => {
    console.log(`Server is running on ${process.env.REACT_API_ENDPOINT}`);
});