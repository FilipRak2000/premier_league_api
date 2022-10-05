const { Router }= require('express')
const controller = require("./controller")

const router = Router()

router.get("/", controller.AllTeams)
router.get("/:id", controller.GetTeamById )
router.put("/:id", controller.UpdateTeam)
router.post("/", controller.AddTeam )
router.delete("/:id", controller.DeleteTeam)









module.exports = router;