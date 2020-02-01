//importar express

const express = require("express");
const routes = require("./routes");
const path = require("path");
const bodyParser = require('body-parser')

const configs = require('./config');
const db = require('./config/database')

db.authenticate().then(() => console.log("conectado jeje")).catch(error=> console.log(console.error()));
// confiurar expreress
const app = express();

//habilitar pug
app.set("view engine", "pug");

//anadir vistar
app.set("views", path.join(__dirname, "/views"));

//cargar una carpeta estatica llamda public
app.use(express.static("public"))


//valida si estamos en desarrollo  o production

const config = configs[app.get('env')]

app.locals.titulo = config.nombresito

//Muestra el año actual
app.use((req, res, next) => {
  const fecha = new Date()
  res.locals.fechaActual = fecha.getFullYear()
  res.locals.ruta = req.path;
  return next();
})

app.use(bodyParser.urlencoded({extended:true}));

//cargar rutas
app.use("/", routes());

app.listen(3000);
