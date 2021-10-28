const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const PropertySchema = new mongoose.Schema({
    propertyName: {
        type: String,
        required: [true, 'Debe ingresar un nombre'],
        minlength: [2, 'El nombre no puede tener menos de 2 caracteres'],
        maxlength: [50, 'No debe exceder los 50 caracteres']
    },
    description: {
        type: String,
        required: [true, 'Debe ingresar una descripción'],
        minlength: [2, 'La descripción no puede tener menos de 2 caracteres'],
        maxlength: [50, 'No debe exceder los 50 caracteres']
    },
    location: {
        type: String,
        required: [true, 'Este campo es requerido'],
        
    },
    isSold: {
        type: Boolean,
        default: false
    },
    price: {
        type: Number,
        required: [true, 'Debe ingresar un precio por la propiedad'],
        min: [0, 'Propiedad debe tener un valor']
    },
    owner: {
        type: String,
        required: [true, 'Este campo es requerido'],
        minlength: [2, 'El nombre no puede tener menos de 2 caracteres'],
        maxlength: [50, 'No debe exceder los 50 caracteres']
    }
    
}, {timestamps: true});


const Property = mongoose.model("Property", PropertySchema);
PropertySchema.plugin(uniqueValidator, { message: "{PATH} debe ser único" });
module.exports = Property;
