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
     switch(pizzasize){
        case "0":
          price =0;
        break;
        case "large":
           price = 1200;
           console.log(price);
         break;
         case "medium":
           price = 900;
           console.log("The price is "+price);
         break;
         case "small":
           price = 600;
           console.log(price);
         default:
           console.log("error"); 
       }
       switch(pizzacrust){
          case "0":
            crust_price = 0;
          break;
          case "Crispy":
            crust_price = 200;
          break;
          case "Stuffed":
            crust_price = 250;
          break;
          case "Cheese Filled crust":
            crust_price = 300;
          break;
          default:
            console.log("No price"); 
        }
     