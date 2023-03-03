const express = require("express");
const app = express();
const cors = require('cors')

//setting
const port = process.env.port || 3000;

//middelwers
app.use(express.json());
app.use(cors())

//routes
// app.use(require('./routes/index'))
app.use('/api/users', require('./routes/users'))


app.listen(port, () => {
    console.log("server up");
});
