(function () {
  var ex1_button = document.getElementById("ex1_button");
  var ex1_content = document.getElementById("ex1_content");


})();
ex1_button.onclick = function () {
  var tabela = [];

  for (var i = 0; i <= 9; i++) {
    tabela.push(i);
  }

  ex1_content.innerHTML = tabela.toString();
};

var ex2_text = document.getElementById("ex2_text");
var ex2_content = document.getElementById("ex2_content");

ex2_text.addEventListener("input", function() {
  var phoneNumber = ex2_text.value;

  if (phoneNumber.length !== 9) {
    ex2_content.innerHTML = "Długość numeru musi być równa 9";
    return;
  }

  if (/[a-zA-Z]/.test(phoneNumber)) {
    ex2_content.innerHTML = "Numer nie może zawierać liter";
    return;
  }

  if (/[^0-9]/.test(phoneNumber)) {
    ex2_content.innerHTML = "Numer nie może zawierać znaków specjalnych";
    return;
  }

  ex2_content.innerHTML = "Numer telefonu jest poprawny";
});