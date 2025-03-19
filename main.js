// deno-lint-ignore-file
let arg2 = setInterval(async () => {
    const values = JSON.parse(await getValues());
    updateUI(values);
    prestigePossible()
    const PrestigePossible = values.find(el => el.id === "prestigePossible");
    if (PrestigePossible) {
        document.getElementById('boutonPrestige').classList.add('visible');
        document.getElementById('boutonPrestige').classList.remove('hidden');
    } else {
        document.getElementById('boutonPrestige').classList.add('hidden');
        document.getElementById('boutonPrestige').classList.remove('visible');
    }
}, 500);

// Initialisation des Web Workers
const autoFarmerWorker = new Worker('workers/workerFarmer.js');
const autoVendreWorker = new Worker('workers/workerVendre.js');
const autoReplanterWorker = new Worker('workers/workerReplanter.js');

// Gestionnaire pour autoFarmer
autoFarmerWorker.onmessage = function(e) {
    console.log("Message reçu de autoFarmerWorker out :", e.data);
    if (e.data === 'execute') {functionAutoFarmer();}
};
autoVendreWorker.onmessage = function(e){
    console.log("Message reçu de autoVendreWorker out :", e.data);
    if (e.data === 'execute') {functionAutoVendre();}
};
autoReplanterWorker.onmessage = function (e) {
    console.log("Message reçu de autoReplanterWorker out :", e.data);
    if (e.data === 'execute') {functionAutoReplanter();}
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
    const bouton = document.getElementById('boutonBuyAutoFarmer');
    if (!values) {
        actionImpossible(bouton);
        return;
    }
    const autoFarmerAcheter = values.find(el => el.id === "autoFarmerAcheter");
    const autoFarmerActiver = values.find(el => el.id === "autoFarmerActiver");

    if (autoFarmerAcheter?.value) {
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
        actionImpossible(bouton);
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
    const bouton = document.getElementById('boutonBuyAutoVendre');
    if (!values) {
        actionImpossible(bouton);
    return;
    }
    const autoVendreAcheter = values.find(el => el.id === "autoVendreAcheter");
    const autoVendreActiver = values.find(el => el.id === "autoVendreActiver");

    if (autoVendreAcheter?.value) {
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
        actionImpossible(bouton);
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
    const bouton = document.getElementById('boutonBuyAutoReplanter');
    if (!values){
        actionImpossible(bouton);
    return;
    }
    const autoReplanterAcheter = values.find(el => el.id === "autoReplanterAcheter");
    const autoReplanterActiver = values.find(el => el.id === "autoReplanterActiver");

    if (autoReplanterAcheter?.value) {
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
        actionImpossible(bouton);
    }
    updateUI(values);
}

async function ameliorerTailleOutil() {
    const values = JSON.parse(await functionAmeliorerTailleOutil());
    const bouton = document.getElementById('boutonAmeliorerTailleOutil');

    if (values) {
        updateUI(values);
        actionEffectuer(bouton);
    } else {
        actionImpossible(bouton);
    }
}

async function ameliorerMateriauxOutil() {
    const values = JSON.parse(await functionAmeliorerMateriauxOutil());
    const bouton = document.getElementById('boutonAmeliorerMateriauxOutil');

    if (values) {
        updateUI(values);
        actionEffectuer(bouton);
    } else {
        actionImpossible(bouton);
    }
}

let sacMax = 0;
async function ameliorerSacAdos() {
    const values = JSON.parse(await functionAmeliorerSacAdos());
    const bouton = document.getElementById('boutonAmeliorerSacAdos');

    if (values) {
        if(sacMax >= 37){
            bouton.textContent = "Taille du sac à dos : Max";
            bouton.style.boxShadow = '2px 2px 0 #8b4513, inset 2px 2px 5px 2px #d81717b2, inset -2px -2px 5px 2px #d81717b2';
            removeBalise(document.getElementById('info-sacAdos'));
        }else{
            updateUI(values);
            actionEffectuer(bouton);
            sacMax++;
        }
    } else {
        actionImpossible(bouton);
    }
}

let tailleMax = 0;
async function ameliorerTailleChamp() {
    const values = JSON.parse(await functionAmeliorerTailleChamp());
    const bouton = document.getElementById('boutonAmeliorerTailleChamp')

    if (values) {
        if (tailleMax >= 27 ) {
            bouton.textContent = "Taille du Champ : Max";
            bouton.style.boxShadow = '2px 2px 0 #8b4513, inset 2px 2px 5px 2px #d81717b2, inset -2px -2px 5px 2px #d81717b2';
            removeBalise(document.getElementById('info-champTaille'));
        }else{
            updateUI(values);
            actionEffectuer(bouton);
            tailleMax++;
        }
    } else {
        actionImpossible(bouton);
    }
}

let fertiliterMax = 0;
async function ameliorerFertiliterChamp() {
    const values = JSON.parse(await functionAmeliorerFertiliterChamp());
    const bouton = document.getElementById('boutonAmeliorerFertiliterChamp');

    if (values) {
        if(fertiliterMax >= 34){
            bouton.textContent = "Fertiliter du Champ : Max";
            bouton.style.boxShadow = '2px 2px 0 #8b4513, inset 2px 2px 5px 2px #d81717b2, inset -2px -2px 5px 2px #d81717b2';
            removeBalise(document.getElementById('info-champFertiliter'));
        }else{
            updateUI(values);
            actionEffectuer(bouton);
            fertiliterMax++;
        }
    } else {
        actionImpossible(bouton);
    }
}

function fairePrestige() {
    functionPrestige();
    document.getElementById('boutonPrestige').style.display = 'none';

    // Reset "auto" buttons to their initial state
    const autoButtons = [
        { id: 'boutonBuyAutoFarmer', text: 'Auto farmer <br><span>100 000€</span>' },
        { id: 'boutonBuyAutoVendre', text: 'Auto vendre <br><span>50 000€</span>' },
        { id: 'boutonBuyAutoReplanter', text: 'Auto replanter <br><span>10 000€</span>' }
    ];

    autoButtons.forEach(button => {
        const btnElement = document.getElementById(button.id);
        if (btnElement) {
            btnElement.innerHTML = button.text; // Reset text
            btnElement.style.backgroundColor = ''; // Reset background color
        }
    });

    // Restore removed elements
    const infoElements = [
        { id: 'info-sacAdos', text: 'Augmente la capacité de stockage du sac à dos.' },
        { id: 'info-champTaille', text: 'Augmente la surface cultivable du champ.' },
        { id: 'info-champFertiliter', text: 'Améliore l\'abondances des récoltes de 1. <br>Double le pris à : <span id="bonusFertiliter">1/4</span>' }
    ];

    infoElements.forEach(info => {
        if (!document.getElementById(info.id)) {
            const parent = document.getElementById(info.id.replace('info-', 'boutonAmeliorer'));
            if (parent) {
                const newElement = document.createElement('p');
                newElement.id = info.id;
                newElement.innerHTML = info.text;
                parent.parentNode.insertBefore(newElement, parent.nextSibling);
            }
        }
    });
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

function changeColorGreen(bouton) {
    bouton.style.backgroundColor = "#84ff86";
}

function changeColorRed(bouton) {
    bouton.style.backgroundColor = "#ff6767";
}
