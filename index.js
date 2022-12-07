var express = require("express");
var app = express();
var { produto } = require("./models")
var cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({
  extended: true
}))

app.get("/", async function (req, res){
    try {
      const resultado =  await produto.findAll();
     res.json(resultado)
    } catch (error) {
      console.log(error)
    }   
   });

   app.get("/:id", async function (req, res){
    try {
      const resultado =  await produto.findOne({where:{id: req.params.id}});
     res.json(resultado)
    } catch (error) {
      console.log(error)
    }
     
   });

app.post("/", async function (req, res){
    const resultado =  await produto.create(req.body);
     res.json(resultado)
     
   });

app.put("/:id", function (req, res){
  var resultado =  produto.update(req.body, {where : {id:req.params.id}});
    res.json(resultado) 
   });

app.delete("/:id", async function (req, res){
    var resultado = await produto.destroy({where : {id:req.params.id}});
      res.json(resultado) 
     });

app.listen(3001, function(){
  console.log("O servidor esta em killing spree B)")
});