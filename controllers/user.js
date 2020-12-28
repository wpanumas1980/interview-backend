const db = require("../models");

const register = async (req, res) => {
    const { fname, lname, address,tel, email, qrUrl } = req.body;
    const targetUser = await db.User.findOne({ where: { fname } });

    if (targetUser) {
      res.status(400).send({ message: "Username alraedy taken." });
    } else { 
      await db.User.create({
        fname, 
        lname, 
        address,
        tel,
        email,
        qrUrl
      });
  
      res.status(201).send({ message: "User created" });
    }
  };
  
  
const getUserbyEmail = async (req, res) => {
  const {email} = req.params
  const targetUser = await db.User.findOne({ where: { email} });
  if (targetUser) {
    res.status(200).send(targetUser);
  } else {
    res.status(404).send({ message: "User not found!!!" });
  }
};
  module.exports = {
    register,
    getUserbyEmail
  };