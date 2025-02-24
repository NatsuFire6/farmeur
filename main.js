function updateResources() {
    document.getElementById('niveau').textContent = joueurs.niveau;
    document.getElementById('xp').textContent = joueurs.xp;
    document.getElementById('argent').textContent = joueurs.monaie;
    document.getElementById('ble').textContent = sacAdoss.remplissement;
    document.getElementById('outil').textContent = outils.Nom;
    document.getElementById('sac_a_dos').textContent = sacAdoss.Nom;

    const champElement = document.getElementById('champ');
    const champIcon = document.getElementById('champ-icon');
    const parcellesPleine = champs.tailles.parcellesPleine;
    const parcellesVide = champs.parcellesVide;
    const champState = parcellesPleine - parcellesVide;

    champElement.textContent = `${champState}/${parcellesPleine}`;

    if (champState === 0) {
        champIcon.src = './images/wheat_icon_empty.png';
    } else if (champState < parcellesPleine) {
        champIcon.src = './images/wheat_icon_half.png';
    } else {
        champIcon.src = './images/wheat_icon_full.png';
    }

    document.getElementById('outil-stats').textContent = `Nom: ${outils.Nom}, Taille de la récolte: ${outils.tailleDeLaRecolte}`;
    document.getElementById('sac_a_dos-stats').textContent = `Nom: ${sacAdoss.Nom}, Stockage: ${sacAdoss.remplissement}/${sacAdoss.tailles.stockage}`;
    document.getElementById('champ-stats').textContent = `Type de blé: ${champs.typeDeBle}, Parcelles pleines: ${parcellesPleine - parcellesVide}/${parcellesPleine}, Fertilité: ${champs.fertiliter}`;
}

function harvestAndRefresh() {
    functionFarmer();
    updateResources();
}

function farmerAndRefresh() {
    functionFarmer();
    updateResources();
}

// Initial resource update
updateResources();

// Continuously update resources every second
setInterval(updateResources, 1000);
