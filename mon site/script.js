// Fonction pour charger le contenu d'un fichier texte dans un élément spécifié
function chargerFichierTexte(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => {
            console.error('Erreur:', error);
        });
}

// Charger les fichiers texte lors du chargement de la page
window.onload = function () {
    chargerFichierTexte('exemple.txt', 'season1-content');
};
