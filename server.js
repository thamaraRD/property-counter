const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
const PropertyRoutes = require("./server/routes/property.routes");
require("./server/config/mongoose.config");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

PropertyRoutes(app);

app.listen(port, () => {console.log(`Listening at Port ${port}`)});
