document.addEventListener('DOMContentLoaded', function () {
    const plusButtons = document.querySelectorAll('.plus');
    const minusButtons = document.querySelectorAll('.moins');
    const prixTotalElement = document.querySelector('.totalPrice span');
    
    let totalPrix = 0;

    plusButtons.forEach(button => {
        button.addEventListener('click', () => {
            const articleId = button.getAttribute('data-article');
            const articlePrixElement = document.getElementById(articleId).querySelector('.prix');
            const articlePrix = parseFloat(articlePrixElement.innerText.replace('$', '').trim());

            // Vérifier le nombre d'articles restant
            const nombreRestantElement = document.getElementById(articleId).querySelector('.nombre-restant');
            let nombreRestant = parseInt(nombreRestantElement.innerText);

            if (nombreRestant > 0) {
                totalPrix += articlePrix;
                nombreRestant--;

                // Mettre à jour le nombre d'articles restant, le prix total et le prix total affiché
                nombreRestantElement.innerText = nombreRestant;
                updateTotalPrix();
            }
        });
    });

    minusButtons.forEach(button => {
        button.addEventListener('click', () => {
            const articleId = button.getAttribute('data-article');
            const articlePrixElement = document.getElementById(articleId).querySelector('.prix');
            const articlePrix = parseFloat(articlePrixElement.innerText.replace('$', '').trim());

            // Vérifier le nombre d'articles restant
            const nombreRestantElement = document.getElementById(articleId).querySelector('.nombre-restant');
            let nombreRestant = parseInt(nombreRestantElement.innerText);

            if (nombreRestant < 5) {
                // Augmenter le nombre d'articles restant
                nombreRestant++;

                // Déduire le prix si le nombre d'articles était supérieur à 0
                if (nombreRestant > 0) {
                    totalPrix -= articlePrix;
                }

                // Mettre à jour le nombre d'articles restant, le prix total et le prix total affiché
                nombreRestantElement.innerText = nombreRestant;
                updateTotalPrix();
            }
        });
    });

    function updateTotalPrix() {
        prixTotalElement.innerText = totalPrix.toFixed(2) + ' $';
    }
});

