var insert_kg = document.getElementById("kg");
var insert_gr = document.getElementById("g");
var insert_mg = document.getElementById("mg");
var insert_p = document.getElementById("p");
var insert_o = document.getElementById("o");

var insert_unit = document.getElementById("unit");

function getOption() {
  var type = document.getElementById("type");
  var choice = type[type.selectedIndex].value;

  var input_number = document.querySelector("#input-num");
  input_number.addEventListener("keyup", function (e) {
    var input_num = e.target.value.toLowerCase();

    if (choice === "kilogram") {
      insert_unit.innerHTML = "kg";
      insert_kg.innerHTML = input_num;
      insert_gr.innerHTML = input_num * 1000;
      insert_mg.innerHTML = input_num * 1000000;
      insert_p.innerHTML = input_num * 2.205;
      insert_o.innerHTML = input_num * 35.274;
    } else if (choice === "gram") {
      insert_unit.innerHTML = "gr";
      insert_kg.innerHTML = input_num / 1000;
      insert_gr.innerHTML = input_num;
      insert_mg.innerHTML = input_num * 1000;
      insert_p.innerHTML = (input_num / 454).toFixed(7);
      insert_o.innerHTML = (input_num / 28.35).toFixed(7);
    } else if (choice === "miligram") {
      insert_unit.innerHTML = "mg";
      insert_mg.innerHTML = input_num;
      insert_gr.innerHTML = input_num / 1000;
      insert_kg.innerHTML = input_num / 1000000;
      insert_p.innerHTML = (input_num / 453592).toFixed(7);
      insert_o.innerHTML = (input_num / 28350).toFixed(7);
    } else if (choice === "pound") {
      insert_unit.innerHTML = "lb";
      insert_p.innerHTML = input_num;
      insert_mg.innerHTML = input_num * 453592;
      insert_gr.innerHTML = input_num * 454;
      insert_kg.innerHTML = (input_num / 2.205).toFixed(7);
      insert_o.innerHTML = input_num * 16;
    } else if (choice === "ounce") {
      insert_unit.innerHTML = "oz";
      insert_o.innerHTML = input_num;
      insert_p.innerHTML = (input_num / 16).toFixed(7);
      insert_mg.innerHTML = input_num * 28350;
      insert_gr.innerHTML = input_num * 28.35;
      insert_kg.innerHTML = (input_num / 35.274).toFixed(7);
    }
  });
}
