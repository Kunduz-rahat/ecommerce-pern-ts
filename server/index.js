require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const sequelize = require("./db");
const models = require("./models/models.js");
const router = require("./routes/index.js");
const path = require('path')
const errorHandler = require("./middleware/ErrorHandleMiddleware");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use("/api", router);

// обработчик ошибок, всегда ставится в самом конце
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`server started on PORT ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};
start();
