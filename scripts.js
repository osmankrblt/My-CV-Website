function getAbilities() {
  var _abilities = document.getElementsByClassName("ability");

  for (var i = 0; i < _abilities.length; i++) {
    _abilities[i].onclick = search;
  }
}

function calculate() {
  var _calc = document.getElementById("calculatenumber");
  _calc.onclick = calculateInterface;
}
function search() {
  var _deger = this.innerHTML;

  tempGoogle = "https://www.google.com/search?q=";

  for (var i = 0; i < _deger.split(" ").length; i++) {
    console.log(_deger.split(" ")[i]);
    tempGoogle += _deger.split(" ")[i] + "+";
  }

  this.setAttribute("href", tempGoogle);
  this.setAttribute("target", "_blank");
}

function getPoint(E, F, G, H, year) {
  return (
    (E * Math.pow(year, 3) + F * Math.pow(year, 2) + G * year + H) /
    Math.pow(year, 4)
  );
}
function getChanceNumber(point) {
  return 100 * (Math.random() + parseInt(String(point).toString()));
}

function calculateInterface() {
  var dt = new Date();
  var _deger = document.getElementById("fschoolnumber").value;

  var year =
    parseInt(dt.getUTCFullYear().toString()) - parseInt(_deger.slice(0, 4));

  var E = parseInt(_deger.slice(8, 9));
  var F = parseInt(_deger.slice(9, 10));
  var G = parseInt(_deger.slice(10, 11));
  var H = parseInt(_deger.slice(11, 12));

  var point = getPoint(E, F, G, H, year);

  var change_number = getChanceNumber(point);
  console.log(point);
  console.log(change_number);
  console.log(String(point).slice(0, 2).toString());

  document.getElementById("resultScreen").innerText =
    "Puan: " + point + "\n Şanslı numara: " + change_number;
}

function setFunctions() {
  [getAbilities(), calculate()].forEach((element) => {
    element();
  });
}

setFunctions();
