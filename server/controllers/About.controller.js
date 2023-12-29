const { About } = require("../models/About.model");

const AboutController = {
  getAll: async (req, res) => {
    try {
      const data = await About.find({});
      res.status(200).send(data);
    } catch (err) {
      res.send(err);
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const target = await About.findById(id);
      res.status(200).send(target)
    } catch (err) {
      res.send(err);
    }
  },
  add: async (req, res) => {
    try {
      const { icon, title, description, date } = req.body;
      const newData = new About({ icon, title, description, date });
      await newData.save();
      res.send(newData).status(201);
    } catch (err) {
      res.status(404).send("Cannot add product");
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      await About.findByIdAndDelete(id);
      const allData = await About.find({});
      res.status(203).send(allData);
    } catch (err) {
      res.status(404).send("Item not found to delete");
    }
  },
};


module.exports = { AboutController }