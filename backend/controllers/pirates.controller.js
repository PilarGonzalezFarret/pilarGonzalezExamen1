import Pirates from "../models/pirates.model.js";

//CREATE
const createPirate = async (req, res) => {
  try {
    let data = req.body;
    let newData = await Pirates.create(data);
    res.status(200).json(newData);
  } catch (error) {
    console.log("Error" + error.message);
    res.status(400).json({
      message: "Please fill the form correctly",
    });
  }
};

// GET ALL
const getAllPirates = async (req, res) => {
  try {
    let list = await Pirates.find().sort({ pirateType: 1 }).exec();
    res.status(200).json(list);
  } catch (error) {
    console.log("Error" + error.message);
    res.status(400).json({
      message: error.message,
    });
  }
};

// GET BY ID
const getPiratesById = async (req, res) => {
  try {
    let id = req.params.piratesId;
    let found = await Pirates.findById(id);
    res.status(200).json(found);
  } catch (error) {
    console.log("Error" + error.message);
    res.status(400).json({
      message: error.message,
    });
  }
};

//UPDATE NORMAL
const updatePirate = async (req, res) => {
  try {
    let id = req.params.piratesId;
    let data = req.body;
    await Pirates.findByIdAndUpdate(id, data, { runValidators: true });
    res.status(200).json();
  } catch (error) {
    console.log("Error" + error);
    res.status(400).json({
      message: error.message,
    });
  }
};

//BORRAR
const deletePirate = async (req, res) => {
  try {
    let id = req.params.piratesId;
    await Pirates.findByIdAndDelete(id);
    res.status(200).json();
  } catch (error) {
    console.log("Error" + error.message);
    res.status(400).json({
      message: error.message,
    });
  }
};

export { createPirate, getAllPirates, getPiratesById, updatePirate, deletePirate };