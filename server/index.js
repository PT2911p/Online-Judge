const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const Route = require("./routes/Route");
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const { DBConnection } = require('./database/db');
const PORT = 8000;

app.use(
  cors({
    credentials: true,
    origin: ["https://deploy2--enchanting-conkies-3032f4.netlify.app/"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);


DBConnection();

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});



app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.json());
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: 'public/'
}))

app.use("/", Route);
