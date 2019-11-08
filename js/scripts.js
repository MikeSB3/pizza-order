//Business Logic for Pizza Order
function PizzaOrder(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price;
}

PizzaOrder.prototype.priceTotal = function() {
  this.price = 0;
  if (this.size === "small") {
    this.price += 5.99;
  } else if (this.size === "medium") {
    this.price += 7.99;
  } else if (this.size === "large") {
    this.price += 9.99;
  } else {
    console.log("pizza size error");
  };
  return this.price
}

// //User Logic
// var small = {name: "Small", price: 5.99};
// var medium = {name: "Medium", price: 7.99};
// var large = {name: "Large", price: 9.99};
//
// var size = {name: "Size of Pizza", choices: [small, medium, large]};
//
// var pepperoni = {name: "Pepperoni", price: 1.00};
// var olives = {name: "Olives", price: 1.00};
// var anchovies = {name: "Anchovies", price: 1.00};
// var artichoke = {name: "Artichoke", price: 1.00};
// var sausage = {name: "Sausage", price: 1.00};
// var onions = {name: "Onions", price: 1.00};
//
// var toppings = {name: "Toppings for Pizza", choices: [pepperoni, olives, anchovies, artichoke, sausage, onions]};
// var selection = {}

var pizzaOrder = new PizzaOrder();

$(document).ready(function() {
  $("form#pizza-form").submit(function(event) {
    event.preventDefault();
    $(".order-details").show();
    var size = $("input[name=pizza-size]:checked").val();
    var toppings = $("input:checkbox[name=pizza-topping]:checked").val();
    var pizzaOrder = new PizzaOrder(size, toppings);
    console.log(pizzaOrder);
    console.log(pizzaOrder.priceTotal());


    $("choice").each(function() {
    //   var orderResponse = $(this).val();
    //   pizzaPrice.addChoices(orderResponse);
    //   console.log(pizzaPrice.choices);
      $("span#order-response").append(choices + "<br>");
    //   $("span#order-response").append(orderResponse + "<br>");
    });
  });
});
