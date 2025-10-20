const express = require('express');
const path = require('path');
const router = express.Router();

// Serve the index.html file for the root route
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

 // Routes for static pages
router.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});
router.get('/control_mensual.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/control_mensual.html'));
});
router.get('/evolucion_finanzas.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/evolucion_finanzas.html'));
});
router.get('/prepagado.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/prepagado.html'));
});
module.exports = router;
