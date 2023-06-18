function pizzaOven(tipoCorteza, tipoSalsa, quesos, ingredientes){
var pizza = {};
pizza.tipoCorteza = tipoCorteza;
pizza.tipoSalsa = tipoSalsa;
pizza.quesos = quesos;
pizza.ingredientes = ingredientes;
return pizza;
}

var pizza1 = pizzaOven("estilo Chicago","tradicional","mozzarella","peperoni")
console.log(pizza1);

var pizza2 = pizzaOven("Lanzada a mano","marinara",["mozzarella", "feta"],["champiñones","aceitunas","cebolla"])
console.log(pizza2);

var pizza3 = pizzaOven("delgada","barbecue","mozzarella",["jamon","peperoni"])
console.log(pizza3);

var pizza4 = pizzaOven("tradicional","tomate",["mozzarella","parmesano"],"salame")
console.log(pizza4);