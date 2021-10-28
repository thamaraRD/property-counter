const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/property_counter_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("We are making connection!"))
.catch((err) => console.log(err));
