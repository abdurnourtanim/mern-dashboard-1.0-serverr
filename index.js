const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const clientRoute = require("./routes/client");
const generalRoute = require("./routes/general");
const salesRoute = require("./routes/sales");
const managmentRoute = require("./routes/managment");
const dbConnection = require("./config/db");

// Configuration
const app = express();
dotenv.config();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.use("/client", clientRoute);
app.use("/general", generalRoute);
app.use("/managment", managmentRoute);
app.use("/sales", salesRoute);

// Server Listening
const PORT = process.env.PORT || 4001;
app.listen(4000, () => {
  dbConnection();
  console.log(`Server running on http://localhost:${PORT}`);
});
