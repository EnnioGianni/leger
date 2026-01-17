// =========================================
// script_global.js — Le Postillon
// Gestion des prix par ligne (version stabilisée)
// =========================================

// Tableau global des prix par ligne
var prixParLigneGlobal = {
  1: '4.00',
  2: '6.00',
  3: '12.00',
  4: '17.00',
  5: '22.00',
  6: '30.00',
  7: '35.00',
  8: '50.00',
  9: '60.00',
  10: '70.00',
  11: '80.00',
  12: '90.00',
  13: '110.00',
  14: '130.00',
  15: '160.00',
  16: '190.00',
  17: '240.00',
  18: '340.00',
  19: '420.00',
  20: '600.00',
  21: '700.00',
  22: '800.00',
  23: '1000.00',
  24: '1300.00',
  25: '1500.00',
  26: '1750.00',
  27: '2000.00',
  28: '2250.00',
  29: '2550.00',
  30: '3000.00',
  31: '3500.00',
  32: '4000.00',
  33: '5500.00',
  34: '6500.00',
  35: '7500.00',
  36: '8500.00',
  37: '9500.00',
  38: '11000.00',
  39: '12000.00',
  0: '0' // LavitDeLoumagne
};

// -----------------------------
// Formatage du prix en euros
// -----------------------------
function formaterPrixEnEuros(prix) {
  var n = parseFloat(prix);
  if (isNaN(n)) return '';
  return n.toFixed(2) + '€';
}

// -----------------------------
// Applique le prix à une ligne
// -----------------------------
function changerPrix(idLigne, nouveauPrix) {
  if (nouveauPrix == null) return;

  var elementsPrix = document.querySelectorAll(
    '.prixProduit[data-id="' + idLigne + '"]'
  );

  elementsPrix.forEach(function (elementPrix) {
    elementPrix.textContent = formaterPrixEnEuros(nouveauPrix);
  });
}

// -----------------------------
// Application automatique
// -----------------------------
Object.keys(prixParLigneGlobal).forEach(function (id) {
  changerPrix(id, prixParLigneGlobal[id]);
});
