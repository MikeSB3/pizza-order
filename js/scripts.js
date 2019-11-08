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
