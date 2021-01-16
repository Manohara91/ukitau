const namaFileController = "coa.controller.js";
const controller = require(`../controllers/${namaFileController}`);
const router = require("express").Router();
router.get("/", controller.findAll); //INDEX
router.post("/", controller.create); //CREATE
router.get("/:id", controller.findOne); //SHOW
router.put("/:id", controller.update); //UPDATE
router.patch("/:id", controller.update); //UPDATE
router.delete("/:id", controller.delete); //DELETE
module.exports = router;
