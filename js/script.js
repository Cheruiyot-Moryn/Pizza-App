var price , crust_price, topping_price ;
let total = 0;
function Getpizza( name,size,crust,topping, total ){
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}
$(document).ready(function(){
    // $("button.proceed").click(function(){
    //   $("button.proceed").hide();
    //   $("#information").hide();
    //   $("div.choise").slideDown(1000);
    // });
    $("button.proceed").click(function(event){
     let pizzaname = $(".name option:selected").val();
     let pizzasize = $("#size option:selected").val();
     let pizzacrust = $("#crust option:selected").val();
     let pizzatopping = [];
     $.each($("input[name='toppings']:checked"), function(){            
         pizzatopping.push($(this).val());
     });
     console.log(pizzatopping.join(", "));
  