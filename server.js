console.log("Web serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const http = require('http');


// 1.  Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// 2. Session code

// 3.  Views code
app.set("views", "views");
app.set("view engine", "ejs");


// 4. Rooting code

// app.get("/Hello", function(req, res){
//       res.end(`<h1 style="background: red">HELLO WORLD by Dostonbek</h1>`);
// });

// app.get("/gift", function(req, res){
//     res.end(`<h1 style="background: blue">Siz sovgalar bolimidasiz</h1>`);
// });

app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({test: "succes"});
})

app.get("/", function(req, res){
    res.render("harid");
});


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function(){
    console.log(`The server is running succesfully on ports: ${PORT}`);
});