const express = require("express")
const router = express.Router()

const ctrls = require("../controllers")

//CRUD Routes
router.get("/", ctrls.game.index)
router.post("/", ctrls.game.create)
router.delete("/:id", ctrls.game.destroy)
router.put("/:id", ctrls.game.update)
router.get("/:id", ctrls.game.search )



module.exports = router