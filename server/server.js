const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

//dotenv configuartion
dotenv.config();

//rest object
const app = express();

//midlewares
app.use(cors());
app.use(express.json());

// static file access build hai ye
// app.use(express.static(path.join(__dirname, './client/build')))
// app.get('*', function (req, res) {
//     res.sendFile(path.join(__dirname, './client/build/index.html'))
// })
// end 


//routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoute.js"));
app.get("/", (req, res) => {
    // dont need to pass key in double quote , json method will do it
    res.json({
        activeStatus: true,
        error: false,
    })
});


// //port
const PORT = process.env.PORT || 8000;

//listen
app.listen(PORT, () => {
    console.log(`Server Runnning On PORT ${PORT} `);
});