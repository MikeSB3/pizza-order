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
  }
  for (var i = 0; i < this.toppings.length; i ++) {
    this.price += 1;
  };
  return this.price
}

PizzaOrder.prototype.order = function() {
  return this.size + " " + this.toppings + " " + this.price;
}

//User Logic
$(document).ready(function() {
  $("form#pizza-form").submit(function(event) {
    event.preventDefault();
    $(".order-details").show();
    var size = $("input[name=pizza-size]:checked").val();
    var toppings = $("input:checkbox[name=pizza-topping]:checked").map(function(){
      return this.value;
    }).get();
    var pizzaOrder = new PizzaOrder(size, toppings);
    pizzaOrder.priceTotal();
    $("#order-response").append(pizzaOrder.order());
    console.log(pizzaOrder.order());
  });
});
