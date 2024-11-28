// Calculer dynamiquement le total de la commande en fonction de la quantité commandée.
document.querySelector(".quantity").addEventListener("input", function () {
    const price = 750;
    const quantity = parseInt(this.value) || 1;//1 si aucune valeur n'est saisie
    const total = price * quantity;//calcul du total
    document.querySelector(".total").textContent = total + "MAD";//mise a jour du texte

});

//validation du formulaire
document.querySelector(".order.form").addEventListener("submit",function(e){
e.preventDefault();//empeche l'envoi du formulaire par défaut

//récupération des valeurs saisies
const name=document.querySelector(".name").value.trim();
const email=document.querySelector(".email").value.trim();
const adress=document.querySelector(".adress").value.trim();
const phone=document.querySelector(".phone").value.trim();

//vérification des champs obligatoires
if(!name || !email || !adress || !phone){
    alert("veuillez remplir tous les champs correctement.")
    return; //arrete l'execution si un champ estt vide
}

//vérification du numéro de telephone
const phoneRegex= /^\d{10}$/;
if(!phoneRegex.test(phone)){
    alert("veuillez entrer un numéro de téléphone")
    return;
}
//confirmation de la commande
alert("commande passée avec succés!");

//rénitialisation du formulaire
document.querySelector(".order.form").reset();
document.querySelector(".total").textContent="750 MAD"




});


