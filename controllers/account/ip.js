module.exports = (req, res) => {
  res.json({ ipAddress: req.ip });
}