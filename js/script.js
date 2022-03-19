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
    //   $("div.choice").slideDown(1000);
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
        let topping_value = pizzatopping.length*100;
    console.log("toppins value" + topping_value);

    if((pizzasize == "0") && (pcrust == "0")){
      console.log("nothing selected");
      $("button.proceed").show();
      $("#information").show();
      $("div.choice").hide();
      alert("Please select pizza size and crust"); 
    }
    else{
      $("button.proceed").hide();
      $("#information").hide();
      $("div.choice").slideDown(1000);
    }

    total = price + crust_price + topping_value;
    console.log(total);
    let checkoutTotal =0;
    checkoutTotal = checkoutTotal + total;

    $("#pizzaname").html($(".name option:selected").val());
    $("#pizzasize").html( $("#size option:selected").val());
    $("#pizzacrust").html($("#crust option:selected").val());
    $("#pizzatopping").html(ptopping.join(", "));
    $("#totals").html(total);

    // Add pizza button
    $("button.addPizza").click(function(){
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
          let topping_value = pizzatopping.length*50;
          console.log("toppins value" + topping_value);
          total = price + crust_price + topping_value;
          console.log(total);
  
          checkoutTotal = checkoutTotal + total;
          console.log(checkoutTotal);
        // constractor function
        var newOrder = new Getpizza(pizzaname, pizzasize, pizzacrust,pizzatopping,total);
  
        $("#ordersmade").append('<tr><td id="pizzaname">'+newOrder.name +'</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">'+newOrder.crust + '</td><td id="pizzatopping">'+newOrder.topping+'</td><td id="totals">'+newOrder.total+'</td></tr>');
        console.log(newOrder);
    });


    // Checkout button
    $("button#checkout").click(function(){ 
      $("button#checkout").hide();
      $("button.addPizza").hide();
      $("button.deliver").slideDown(1000);
      $("#addedprice").slideDown(1000);
      console.log("Your total bills is Ksh. "+checkoutTotal);
      $("#pizzatotal").append("Your bill is Ksh. "+checkoutTotal);
    });

    // home delivery button
    $("button.deliver").click(function(){
      $(".pizzatable").hide();
      $(".choise h2").hide();
      $(".delivery").slideDown(1000);
      $("#addedprice").hide();
      $("button.deliver").hide();
      $("#pizzatotal").hide();
      let deliceryamount= checkoutTotal+200;
      console.log("You will pay Ksh. "+deliveryamount+" on delivery");
      $("#totalbill").append("Your bill plus delivery fee is: "+deliveryamount);
    });

    // when one clicks place order button
    $("button#final-order").click(function(event){
      event.preventDefault();

      $("#pizzatotal").hide();
      $(".delivery").hide();
      $("button#final-order").hide();
      let deliveryamount= checkoutTotal+200;
      console.log("Final Bill is: "+deliveryamount);
      let person = $("input#name").val();
      let phone = $("input#phone").val();
      let location = $("input#location").val();

      if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){
  
        $("#finallmessage").append(person+", We have recieved your order and it will be delivered to you at "+location+ ". Prepare sh. "+deliceryamount);
        $("#totalbill").hide();
        $("#finallmessage").slideDown(1200);
      }
      else {
        alert("Please fill in the details for delivery!");
        $(".delivery").show();
        $("button#final-order").show();
      }
    });
   event.preventDefault();
  });
});
     