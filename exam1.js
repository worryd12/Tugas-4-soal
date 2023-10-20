const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library
const cors = require("cors") // memanggil library cors

//implementasi express
const app = express()//implementasi express

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())

// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())



app.listen(8000, () => {
    console.log("Server run on port 8000");
})