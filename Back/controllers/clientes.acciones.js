import { pool } from "../database/conexion.js";

export const getLogin = (req, res) => res.send("pagina login");

export const getClientes = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM clientes");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: " Algo salio mal ",
    });
  }
};

export const getCliente = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM clientes WHERE ID = ? ", [
      req.params.id,
    ]);
    if (rows.length <= 0)
      return res.status(404).json({
        message: "cliente no encontrado",
      });
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: " Algo salio mal ",
    });
  }
};

export const postClientes = async (req, res) => {
  const { nombre, usuario, password } = req.body;
  try {
    const [rows] = await pool.query(
      "INSERT INTO clientes (nombre, usuario, password) VALUES(?, ?, ?)",
      [nombre, usuario, password]
    );
    res.send({
      id: rows.insertId,
      nombre,
      usuario,
      password,
    });
  } catch (error) {
    return res.status(500).json({
      message: " Algo salio mal ",
    });
  }
};

export const updateClientes = async (req, res) => {
  const { id } = req.params;
  const { nombre, usuario, password } = req.body;
  try {
    const [result] = await pool.query(
      "UPDATE clientes SET nombre = IFNULL(?, nombre), usuario = IFNULL(?, usuario), password = IFNULL(?, password) WHERE id = ?",
      [nombre, usuario, password, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({
        message: "cliente no encontrado",
      });
    const [rows] = await pool.query("SELECT * FROM clientes WHERE id = ?", [
      id,
    ]);
    // res.josn("actualizado");
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: " Algo salio mal ",
    });
  }
};

export const deleteClientes = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM clientes WHERE id = ?", [
      req.params.id,
    ]);
    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: "Cliente no encontrado",
      });
    res.send(`cliente: ${req.params.id} borrado`);
  } catch (error) {
    return res.status(500).json({
      message: " Algo salio mal ",
    });
  }
};
