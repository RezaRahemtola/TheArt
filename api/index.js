require('dotenv').config()

const express = require("express");
const app = express();

app.listen(process.env.PORT, () => {
    console.log(`app listening at http://localhost: `, process.env.PORT);
});
