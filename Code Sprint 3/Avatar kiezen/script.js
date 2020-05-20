var inhoud1 = document.getElementById('inhoud1');

var knop1 = document.getElementById('k1');


inhoud1.parentNode.removeChild(inhoud1);


knop1.addEventListener('click', function() {
  modaal.open(inhoud1);
});
