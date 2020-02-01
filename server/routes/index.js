const express = require("express");
const router = express.Router();
const NosotrosController = require("../controllers/ControllerNosotros");
const ViajesController = require("../controllers/ControllerViajes");
const TestimonialesController = require("../controllers/ControllerTestimoniales");
const HomeController = require("../controllers/ControllerHome");

module.exports = function() {
  router.get("/", HomeController.MostrarHome);

  router.get("/nosotros", NosotrosController.MostrarNosotros);

  router.get("/viajes", ViajesController.MostrarViajes);

  router.get("/viajes/:id", ViajesController.MostrarViaje);

  router.get("/testimoniales", TestimonialesController.MostrarTestimoniales);

  router.post("/testimoniales", TestimonialesController.AgregarTestimoniales);

  return router;
};
