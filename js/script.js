var price, crust_price, topping_price;
let total = 0;

$(document).ready(function () {
  // $("button.proceed").click(function(){
  //   $("button.proceed").hide();
  //   $("#information").hide();
  //   $("div.choice").slideDown(1000);
  // });
  $("button.proceed").click(function (event) {
    event.preventDefault();

    let pizzaname = $(".name option:selected").val();
    let pizzasize = $("#size option:selected").val();
    let pizzacrust = $("#crust option:selected").val();
    let pizzatopping = [];
    console.log(pizzaname, pizzasize, pizzacrust);
    $.each($("input[name='toppings']:checked"), function () {
      pizzatopping.push($(this).val());
    });
    console.log(pizzatopping.join(", "));
    switch (pizzasize) {
      case "0":
        price = 0;
        break;
      case "large":
        price = 1200;
        console.log(price);
        break;
      case "medium":
        price = 900;
        console.log("The price is " + price);
        break;
      case "small":
        price = 600;
        console.log(price);
      default:
        console.log("error");
    }
    switch (pizzacrust) {
      case "0":
        crust_price = 0;
        break;
      case "Crispy":
        crust_price = 200;
        break;
      case "Thin":
        crust_price = 250;
        break;
      case "Cheese Filled crust":
        crust_price = 300;
        break;
      default:
        console.log("No price");
    }
    let topping_value = pizzatopping.length * 100;
    console.log("toppins value" + topping_value);

    if (pizzasize == "0" && pizzacrust == "0") {
      console.log("nothing selected");
      $("button.proceed").show();
      $("#information").show();

      $("#delivery-info").hide();
      $("div.choice").hide();
      alert("Please select pizza size and crust");
    } else {
      $("#information").hide();
      $("div.choice").slideDown(1000);
    }

    total = Number(price) + Number(crust_price) + Number(topping_value);
    console.log(total);
    let checkoutTotal = 0;
    checkoutTotal = checkoutTotal + total;

    $("#pizzaname").html($(".name option:selected").val());
    $("#pizzasize").html($("#size option:selected").val());
    $("#pizzacrust").html($("#crust option:selected").val());
    $("#pizzatopping").html(pizzatopping.join(", "));
    $("#totals").html(total);
    $("#choice").show();
    $("#buttons").show();
    $("button#checkout").hide();
    $(".deliver").hide();
    $("#delivery-info").hide();
    
    // Add pizza button
    $("button.addBillingInfo").click(function () {
      $("button.addBillingInfo").hide();
      $("#choice").hide();
      $("#delivery").show();
      $(".deliver").show();
      $("button#checkout").show();

      // constructor function
      var newOrder = { pizzaname, pizzasize, pizzacrust, pizzatopping, total };
        $("#ordersmade").append(
        '<tr><td id="pizzaname">' +
          newOrder.name +
          '</td><td id="pizzasize">' +
          newOrder.size +
          '</td><td id="pizzacrust">' +
          newOrder.crust +
          '</td><td id="pizzatopping">' +
          newOrder.topping +
          '</td><td id="totals">' +
          newOrder.total +
          "</td></tr>"
      );
      console.log(newOrder);
    });


    // Checkout button
    $("button#checkout").click(function () {
      $("#delivery").hide();
      $("#checkout-info").show();
      $("#delivery-info").hide();
      $("button.addBillingInfo").hide();
      $("button.deliver").slideDown(1000);
      $("#addedprice").slideDown(1000);
      console.log("Your total bills is Ksh. " + checkoutTotal);
      $("#checkout-info").append("Your bill is Ksh. " + checkoutTotal);
    });
    let totalBill = checkoutTotal + 200;

    // home delivery button
    $("button.deliver").click(function () {
      $("#delivery").hide();
      $("#checkout-info").hide();
      $("#delivery-info").show();
      $(".pizzatable").hide();
      $(".choice h2").hide();
      $("#addedprice").hide();
      $("button.deliver").hide();
      $("#pizzatotal").hide();


      console.log("You will pay Ksh. " + totalBill + " on delivery");
      $("#total-bill").append("Your bill plus delivery fee is: " + totalBill);

    });

    // when one clicks place order button
    $("button#final-order").click(function (event) {
      event.preventDefault();
      $("#delivery").show();
      $("#pizzatotal").hide();
      $("button#final-order").hide();

      let person = $("input#name").val();
      let phone = $("input#phone").val();
      let location = $("input#location").val();

      if (
        $("input#name").val() &&
        $("input#phone").val() &&
        $("input#location").val() != ""
      ) {
        $("#finallmessage").append(
          person +
            " " +
            phone +
            ", We have recieved your order and it will be delivered to you at " +
            location +
            ". Prepare sh. " +
            totalBill
        );
        $("#totalbill").hide();
        $("#finallmessage").slideDown(1200);
      } else {
        alert("Please fill in the details for delivery!");
        $(".delivery").show();
        $("button#final-order").show();
      }
    });
  });
});
