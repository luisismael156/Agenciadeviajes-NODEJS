const express = require('express');
const router = express.Router();
const Viaje = require('../models/Viajes')

module.exports = function() {
  router.get("/", (req, res) => {
    res.render('index',{
      pagina:'Inicio'

    });
  });

  router.get("/nosotros", (req, res) => {
    res.render('nosotros',{
      pagina:'Sobre Nosotros'

    });
  });


  router.get("/viajes", (req, res) => {
    Viaje.findAll().then(viajes => res.render('viajes',{
      pagina:'Proximos Viajes'

    })).catch(error => console.log(error));
  });


  return router;
};
