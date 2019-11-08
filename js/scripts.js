//Business Logic for Pizza Price
function PizzaPrice() {
  this.choices = [];
}

PizzaPrice.prototype.addChoices = function(choice){
  this.choices.push(choice);
}

//Business Logic for Choice
function Choice(size, toppings){
  this.size = size;
  this.toppings = toppings;
}


//User Logic
// var size = {choices: "small", "medium", "large"}
// var toppings = {choices: "pepperoni", "olives", "anchovies", "artichoke", "sausage", "onions"}

var small = {name: "Small", price: 5.99};
var medium = {name: "Medium", price: 7.99};
var large = {name: "Large", price: 9.99};

var size = {name: "Size of Pizza", choices: [small, medium, large]};

var pepperoni = {name: "Pepperoni", price: 1.00};
var olives = {name: "Olives", price: 1.00};
var anchovies = {name: "Anchovies", price: 1.00};
var artichoke = {name: "Artichoke", price: 1.00};
var sausage = {name: "Sausage", price: 1.00};
var onions = {name: "Onions", price: 1.00};

var toppings = {name: "Toppings for Pizza", choices: [pepperoni, olives, anchovies, artichoke, sausage, onions]};



$(document).ready(function(){
  $("form#pizza-form").submit(function(event){
    event.preventDefault();
    $(".order-details").show();
    $("input:checkbox[name=pizza-choice]:checked").each(function(){
      var orderResponse = $(this).val();
      $("span#order-response").append(orderResponse + "<br>");
    });
  });
});
