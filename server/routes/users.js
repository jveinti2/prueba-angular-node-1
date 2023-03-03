const { Router } = require("express");
const router = Router();

const pool = require("../database");

//routes
router.get("/", async (req, res) => {
  const response = await pool.query("SELECT * FROM user");
  res.send(response);
});
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const response = await pool.query(`SELECT * FROM user WHERE id = ${id}`);
  res.send(response);
});
router.post("/", async (req, res) => {
  await pool.query("INSERT INTO user set ?", [req.body]);
  res.send(req.body);
});
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  await pool.query("UPDATE user set ? WHERE id = ?", [req.body, id]);
  res.send({ message: "Actualizado" });
});
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const response = await pool.query(`DELETE FROM user WHERE id = ${id}`);
  res.send({ message: "usuario eliminado" });
});

module.exports = router;
