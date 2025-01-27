const multer  = require("multer")

try {
    const storage  = multer.diskStorage({})

    const upload = multer({storage:storage})

    module.exports = upload
} catch (error) {
    console.log(error.message)
}

