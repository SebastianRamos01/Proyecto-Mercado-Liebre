let express = require("express")
let path = require("path")

let port = process.env.PORT || 3001;

let app = express()

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));

app.get("/home", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
})

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
})

app.use(express.static("public"));

