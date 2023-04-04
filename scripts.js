function getAbilities() {
  var _abilities = document.getElementsByClassName("ability");

  for (var i = 0; i < _abilities.length; i++) {
    _abilities[i].onclick = search;
  }
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

getAbilities();
