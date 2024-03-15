require('dotenv').config()
const mongoose = require("mongoose")


async function main(){
  try {
    const dbUser = process.env.DB_USER
    const dbPassword = process.env.DB_PASS

    await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@cluster0.vdilvbn.mongodb.net/?retryWrites=true&w=majority`
    )

    console.log("Conectado ao banco!")
  } catch (error) {
    console.log(error)
  }

}

module.exports = main;
