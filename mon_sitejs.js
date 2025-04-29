async function chargerRecette() {
    const reponse = await fetch("https://api.openbrewerydb.org/v1/breweries");
    const recette = await reponse.json();
    console.log(recette);
}
chargerRecette();

function afficheBrewerises {
    //Création d'un élément HTML pour afficher les infos
    const hero = document.createElement('div');
    //Selection d'un élément du DOM par l'ID
    const card = document.getElementById("breweries")

    hero.innerHTML = `
        <h2>${brewery.name}</h2>
        <p>Type: ${brewery.index}</p>
        <p>Size: ${brewery.size}</p>
        
        `;



    card.appendChild(brewery)
}
