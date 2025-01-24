const express = require("express")
const router = express.Router()
const chatGeneration = require("../controllers/chatGeneration")
const imageGeneration =  require("../controllers/imageGeneration")
const imgDetectionRoute = require("../controllers/imgDetection")
const groqKeyHandler = require("../controllers/groqKeyHandler")
const imgToVideo = require("../controllers/imageToVideo")
const stabilityKeyHandler = require("../controllers/stabilityKeyController")
const upload = require("../middlewares/multer")



router.post("/chatGen",chatGeneration) 


router.post("/imgGen",imageGeneration)


router.post("/imgDetection",upload.single("ifd"),imgDetectionRoute)


router.get("/imgToVideo",imgToVideo)


router.post("/addStability",stabilityKeyHandler)


router.post("/addGroq",groqKeyHandler)




module.exports = router