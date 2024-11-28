// Calculer dynamiquement le total de la commande en fonction de la quantité commandée.
document.querySelector(".quantity").addEventListener("input", function () {
    const price = 750;
    const quantity = parseInt(this.value) || 1;//1 si aucune valeur n'est saisie
    const total = price * quantity;//calcul du total
    document.querySelector(".total").textContent = total + "MAD";//mise a jour du texte

});

//validation du formulaire
// document.querySelector(".order.form").addEventListener("submit",function(e) {

// )}


