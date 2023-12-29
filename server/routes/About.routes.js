const express = require("express");
const { AboutController } = require("../controllers/About.controller");
const router = express.Router()

router.get('/', AboutController.getAll)
router.get('/:id', AboutController.getById)
router.post('/', AboutController.add)
router.delete('/:id', AboutController.delete)

module.exports = router