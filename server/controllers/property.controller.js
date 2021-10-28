const Property = require("../models/property.model");

module.exports.createProperty = (req, res) => {
    const { body } = req;
    console.log(body);
    Property.create(body)
      .then((property) => res.json({ property }))
      .catch((err) => {
        console.log(err);
        return res.status(500).json({ error: err });
      });
  };
  module.exports.getAllProperty = async (req, res) => {
    try {
      const property = await Property.find();
      return res.json({ property });
    } catch (error) {
      return res.status(500).json({ error: err });
    }
  };
  module.exports.getOneProperty = async (req, res) => {
    try {
      const { id } = req.params;
      const property = await Property.findById(id);
      return res.json({ property });
    } catch (error) {
      return res.status(500).json({ error: err });
    }
  };
  module.exports.deleteProperty = async (req, res) => {
    try {
      const { id } = req.params;
      const deleteProperty = await Property.deleteOne({ _id: id });
      return res.json({
        message: "Se ha borrado propiedad exitosamente",
        property: deleteProperty,
      });
    } catch (error) {
      return res.status(500).json({ error: err });
    }
  };
  module.exports.UpdateProperty = async (req, res) => {
    try {
      const { id } = req.params;
      const { body } = req;
      const UpdateProperty = await Property.findOneAndUpdate({ _id: id }, body, {
        new: true,
      });
      return res.json({
        message: "Se actualizó la propiedad correctamente",
        UpdateProperty,
      });
    } catch (error) {
      return res.status(500).json({ error: err });
    }
  };
  