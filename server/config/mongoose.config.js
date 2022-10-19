const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/jokes", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Se establecio una conección con la base de datos"))
  .catch(err => console.log("Algo salio mal con la conexión", err))
	