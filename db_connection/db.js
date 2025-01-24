const mongoose = require("mongoose")


async function db_connection() {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("DATABASE IS CONNECTED SUCCESSFULLY")
    } catch (error) {
        console.log(error.message)
    }
}



const db = db_connection()



module.exports = db