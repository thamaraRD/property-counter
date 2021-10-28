const { createProperty, getAllProperty, getOneProperty, deleteProperty, UpdateProperty } = require("../controllers/property.controller");

module.exports = (app) => {
app.post('/api/property', createProperty);
app.get('/api/property', getAllProperty);
app.get('/api/property/:id', getOneProperty);
app.delete('/api/property/delete/:id', deleteProperty);
app.put('/api/property/update/:id', UpdateProperty);
};
