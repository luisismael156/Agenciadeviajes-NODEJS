const Viaje = require("../models/Viajes");
const Testimonial = require("../models/Testimoniales");

exports.MostrarHome = async (req, res) => {
  const viajes = await Viaje.findAll({ limit: 3 });
  const testimonials = await Testimonial.findAll({ limit: 3 });

  res.render("index", {
    pagina: "Inicio",
    clase: "home",
    viajes,
    testimonials
  });
};
