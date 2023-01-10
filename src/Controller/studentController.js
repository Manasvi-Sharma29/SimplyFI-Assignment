const userModel = require("../Models/studentModel");
const { readCSV } = require("../readCSV");
const studentModel = require("../Models/studentModel");
const createStudent = async function (req, res) {
  try {
    const file = req.file;
    const data = await readCSV(`${file.path}`);
    let result = await studentModel.insertMany(data);
    return res.status(201).send({ status: true, data: result });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ Error: error.message });
  }
};

const getResult = async function (req, res) {
  try {
    let id = req.params.id;
    let result = await studentModel
      .findOne({ ID: id })
      .select({ _id: 0, __v: 0, createdAt: 0, updatedAt: 0, age: 0 });
    if (!result) {
      return res
        .status(404)
        .send({ status: false, message: "No Student Data" });
    }
    return res.status(200).send({ status: true, data: result });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ Error: error.message });
  }
};

const getStatus = async function (req, res) {
  let status = req.query.resultStatus;
  if (!["passed", "failed"].includes(status)) {
    return res
      .status(400)
      .send({ status: false, message: "Enetr valid status" });
  }
  let result = [];
  let data = await studentModel
    .find()
    .select({ _id: 0, __v: 0, createdAt: 0, updatedAt: 0 });
  let passingMarks = (100 * 33) / 100;
  
  if (status == "passed") {
    for (i = 0; i < data.length; i++) {
      if (data[i].mark1 <= passingMarks) {
        continue;
      }
      if (data[i].mark2 <= passingMarks) {
        continue;
      }
      if (data[i].mark3 <= passingMarks) {
        continue;
      }
      result.push(data[i]);
    }
  }
  if(status == "failed"){
    for (i = 0; i < data.length; i++) {
        if ((data[i].mark1 <= passingMarks) || (data[i].mark2 <= passingMarks) || (data[i].mark3 <= passingMarks)) {
            result.push(data[i]);
        }
      }
  }
  return res.status(200).send({status:true,data:result})
};

module.exports = { createStudent, getResult, getStatus };
