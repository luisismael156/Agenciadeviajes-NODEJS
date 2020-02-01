const Viaje = require("../models/Viajes");

exports.MostrarViajes = async (req, res) => {
  const viajes = await Viaje.findAll();
  res.render("viajes", {
    pagina: "Proximos Viajes",
    viajes
  });
};

exports.MostrarViaje = async (req, res) => {
  const viaje = await Viaje.findByPk(req.params.id);
  res.render("viaje", {
    viaje
  });
};
