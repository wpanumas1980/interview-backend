const db = require("../models");
const nodemailer = require("nodemailer");

const register = async (req, res) => {
  const { fname, lname, address, tel, email, qrUrl } = req.body;
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
    const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${fname}</li>
      <li>Surname: ${lname}</li>
      <li>Email: ${email}</li>
      <li>Address: ${address}</li>
      <li>Tel.: ${tel}</li>
    </ul>
    <div>
    <img src=${qrUrl} alt="qrcode"/>
    </div>
  `;
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'wpanumas@gmail.com',
        pass: 'XXXXXXX' 
      }
    });
    let mailOptions = {
      from: 'wpanumas@gmail.com',
      to: `${email}`,
      subject: 'Welcome to DOOSOFT',
      text: 'See the details as below.........',
      html: output
    };


    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        console.log(err);
        return console.log('Error occurs');
      }
      return console.log('Email sent!!!');
    });

    res.status(201).send({ message: "User created" });
  }
};

const getAllUser = async (req, res) => {
  const allUsers = await db.User.findAll();
   res.status(200).send(allUsers);
};

const getUserbyEmail = async (req, res) => {
  const { email } = req.params
  const targetUser = await db.User.findOne({ where: { email } });
  if (targetUser) {
    res.status(200).send(targetUser);
  } else {
    res.status(404).send({ message: "User not found!!!" });
  }
};
module.exports = {
  register,
  getAllUser,
  getUserbyEmail
};