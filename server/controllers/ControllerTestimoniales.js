const Testimonial = require("../models/Testimoniales");

exports.MostrarTestimoniales = async (req, res) => {
  const testimonials = await Testimonial.findAll();
  res.render("testimoniales", {
    pagina: "Testimoniales",
    testimonials
  });
};

exports.AgregarTestimoniales = async (req, res) => {
  //validar que todos los campos esten llenos
  var { nombre, correo, mensaje } = req.body;

  let errores = [];

  if (!nombre) {
    errores.push({ mensaje: "Agrega tu Nombre" });
  }
  if (!correo) {
    errores.push({ mensaje: "Agrega tu Correo" });
  }
  if (!mensaje) {
    errores.push({ mensaje: "Agrega tu Mensaje" });
  }

  //revisar por errores
  if (errores.length > 0) {
    //muestra la visa con errores
    res.render("testimoniales", {
      errores,
      nombre,
      correo,
      mensaje
    });
  } else {
    //almecnar en la BD
    Testimonial.create({
      nombre,
      correo,
      mensaje
    })
      .then(testimonial => res.redirect("/testimoniales"))
      .catch(error => console.log(error));
  }
};
