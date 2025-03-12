let arg2 = setInterval(async () => {
    const values = JSON.parse(await getValues());
    updateUI(values);
}, 500);

// Initialisation des Web Workers
const autoFarmerWorker = new Worker('workers/workerFarmer.js');
const autoVendreWorker = new Worker('workers/workerVendre.js');
const autoReplanterWorker = new Worker('workers/workerReplanter.js');

// Gestionnaire pour autoFarmer
autoFarmerWorker.onmessage = function(e) {
    console.log("Message reçu de autoFarmerWorker out :", e.data);
    if (e.data === 'execute') {
        functionAutoFarmer();
    }
};

autoVendreWorker.onmessage = function(e){
    console.log("Message reçu de autoVendreWorker out :", e.data);
    if (e.data === 'execute') {
        functionAutoVendre();
    }
}

autoReplanterWorker.onmessage = function (e) {
    console.log("Message reçu de autoReplanterWorker out :", e.data);
    if (e.data === 'execute') {
        functionAutoReplanter();
    }
};


function updateUI(elementsToUpdate) {
    if (!Array.isArray(elementsToUpdate)) return;
    
    elementsToUpdate.forEach(element => {
        const domElement = document.getElementById(element.id);
        if (domElement) {
            domElement.textContent = element.value;
        }
    });

    console.log(elementsToUpdate);
}

async function farmer() {
    const values = JSON.parse(await functionFarmer());
    if (values) {
        updateUI(values);
    } else {
        actionImpossible(document.getElementById('boutonFarmer'));
    }
}

async function buyAutoFarmer() {
    const values = JSON.parse(await functionAcheterEtActiverDesactiverAutoFarmer());
    if (!values) {
        actionImpossible(document.getElementById('boutonBuyAutoFarmer'));
        return;
    }

    const autoFarmerAcheter = values.find(el => el.id === "autoFarmerAcheter");
    const autoFarmerActiver = values.find(el => el.id === "autoFarmerActiver");

    if (autoFarmerAcheter?.value) {
        const bouton = document.getElementById('boutonBuyAutoFarmer');

        if (document.querySelector('#boutonBuyAutoFarmer span')) {
            removeBalise(document.querySelector('#boutonBuyAutoFarmer span'));
        }

        if (autoFarmerActiver?.value) {
            changeColorGreen(bouton);
            autoFarmerWorker.postMessage('start')
        } else {
            autoFarmerWorker.postMessage('stop')
            changeColorRed(bouton);
        }
    } else {
        actionImpossible(document.getElementById('boutonBuyAutoFarmer'));
    }

    updateUI(values);
}

async function vendre() {
    const values = JSON.parse(await functionVendre());
    if (values) {
        updateUI(values);
    } else {
        actionImpossible(document.getElementById('boutonVendre'));
    }
}

async function buyAutoVendre() {
    const values = JSON.parse(await functionAcheterEtActiverDesactiverAutoVendre());
    if (!values) {
        actionImpossible(document.getElementById('boutonBuyAutoVendre'));
        return;
    }

    const autoVendreAcheter = values.find(el => el.id === "autoVendreAcheter");
    const autoVendreActiver = values.find(el => el.id === "autoVendreActiver");

    if (autoVendreAcheter?.value) {
        const bouton = document.getElementById('boutonBuyAutoVendre');

        if (document.querySelector('#boutonBuyAutoVendre span')) {
            removeBalise(document.querySelector('#boutonBuyAutoVendre span'));
        }

        if (autoVendreActiver?.value) {
            changeColorGreen(bouton);
            autoVendreWorker.postMessage('start')
        } else {
            autoVendreWorker.postMessage('stop')
            changeColorRed(bouton);
        }
    } else {
        actionImpossible(document.getElementById('boutonBuyAutoVendre'));
    }

    updateUI(values);
}

async function replanter() {
    const values = JSON.parse(await functionReplanter());
    if (values) {
        updateUI(values);
    } else {
        actionImpossible(document.getElementById('boutonReplanter'));
    }
}

async function buyAutoReplanter() {
    const values = JSON.parse(await functionAcheterEtActiverDesactiverAutoReplanter());
    if (!values) {
        return actionImpossible(document.getElementById('boutonBuyAutoReplanter'));
    }

    const autoReplanterAcheter = values.find(el => el.id === "autoReplanterAcheter");
    const autoReplanterActiver = values.find(el => el.id === "autoReplanterActiver");

    if (autoReplanterAcheter?.value) {
        const bouton = document.getElementById('boutonBuyAutoReplanter');

        if (document.querySelector('#boutonBuyAutoReplanter span')) {
            removeBalise(document.querySelector('#boutonBuyAutoReplanter span'));
        }

        if (autoReplanterActiver?.value) {
            changeColorGreen(bouton);
            autoReplanterWorker.postMessage('start');
        } else {
            autoReplanterWorker.postMessage('stop');
            changeColorRed(bouton);
        }
    } else {
        actionImpossible(document.getElementById('boutonBuyAutoReplanter'));
    }

    updateUI(values);
}

async function ameliorerTailleOutil() {
    const values = JSON.parse(await functionAmeliorerTailleOutil());
    if (values) {
        updateUI(values);
        actionEffectuer(document.getElementById('boutonAmeliorerTailleOutil'));
    } else {
        actionImpossible(document.getElementById('boutonAmeliorerTailleOutil'));
    }
}

async function ameliorerMateriauxOutil() {
    const values = JSON.parse(await functionAmeliorerMateriauxOutil());
    if (values) {
        updateUI(values);
        actionEffectuer(document.getElementById('boutonAmeliorerMateriauxOutil'));
    } else {
        actionImpossible(document.getElementById('boutonAmeliorerMateriauxOutil'));
    }
}

async function ameliorerSacAdos() {
    const values = JSON.parse(await functionAmeliorerSacAdos());
    if (values) {
        updateUI(values);
        actionEffectuer(document.getElementById('boutonAmeliorerSacAdos'));
    } else {
        actionImpossible(document.getElementById('boutonAmeliorerSacAdos'));
    }
}

async function ameliorerTailleChamp() {
    const values = JSON.parse(await functionAmeliorerTailleChamp());
    
    if (values) {
        const tailleMax = values.find(el => el.id === "tailleMax");
        if (!tailleMax) {
            removeMax(document.getElementById('boutonAmeliorerTailleChamp'))
        }else{
            updateUI(values);
            actionEffectuer(document.getElementById('boutonAmeliorerTailleChamp'));
        }
    } else {
        actionImpossible(document.getElementById('boutonAmeliorerTailleChamp'));
    }
}

async function ameliorerFertiliterChamp() {
    const values = JSON.parse(await functionAmeliorerFertiliterChamp());
    
    if (values) {
        const fertiliterMax = values.find(el => el.id === "fertiliterMax");
        if(!fertiliterMax){
            removeMax(document.getElementById('boutonAmeliorerFertiliterChamp'))
        }else{
            updateUI(values);
            actionEffectuer(document.getElementById('boutonAmeliorerFertiliterChamp'));
        }
    } else {
        actionImpossible(document.getElementById('boutonAmeliorerFertiliterChamp'));
    }
}

function actionImpossible(bouton) {
    bouton.style.animation = "actionImpossible 1s linear";
    setTimeout(() => { bouton.style.animation = "none"; }, 1000);
}

function actionEffectuer(bouton) {
    bouton.style.animation = "actionEffectuer 1s linear";
    setTimeout(() => { bouton.style.animation = "none"; }, 1000);
}

function removeBalise(boutonSpan) {
    boutonSpan.remove();
}

function removeMax(bouton) {
    // Extraire le premier mot avant ":"
    const textBeforeColon = bouton.textContent.split(':')[0].trim();

    // Supprimer l'ancien bouton
    bouton.remove();

    // Créer un nouvel élément bouton
    const newButton = document.createElement('button');
    newButton.className = 'improve-button';
    newButton.id = bouton.id; // Conserver le même ID
    newButton.textContent = `${textBeforeColon} : Max`;

    // Ajouter le nouveau bouton au DOM
    const parentDiv = bouton.closest('.improve-item');
    if (parentDiv) {
        parentDiv.appendChild(newButton);
    }
}


function changeColorGreen(bouton) {
    bouton.style.backgroundColor = "#84ff86";
}

function changeColorRed(bouton) {
    bouton.style.backgroundColor = "#ff6767";
}
