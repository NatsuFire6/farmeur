//arg2 = setInterval(updateUI, 500, JSON.parse(getValues()));

function updateUI(elementsToUpdate) {
    elementsToUpdate.forEach(element => {
        const domElement = document.getElementById(element.id);
        if (domElement) {
            domElement.textContent = element.value;
        }
    })
    console.log(elementsToUpdate);
}

async function farmer(){
    const values = JSON.parse(await functionFarmer());
    if(values != false){
        updateUI(values);
    }else{
        actionImpossible(document.getElementById('boutonFarmer'));
    }
}

async function buyAutoFarmer(){
    const values = JSON.parse(await functionAcheterEtActiverDesactiverAutoFarmer());
    const autoFarmerAcheter = values.find((element) => element.id === "autoFarmerAcheter");
    const autoFarmerActiver = values.find((element) => element.id === "autoFarmerActiver");
    //let arg
    if(values != false && autoFarmerAcheter.value){
        if(document.querySelector('#boutonBuyAutoFarmer span') != null){
            removeBalise(document.querySelector('#boutonBuyAutoFarmer span'));
        }
        if(autoFarmerActiver.value){
            changeColorGreen(document.getElementById('boutonBuyAutoFarmer'))
            //arg = setInterval(updateUI, 1000, JSON.parse(await functionAutoFarmer()));
        }
        if(!autoFarmerActiver){
            //clearInterval(arg)
            changeColorRed(document.getElementById('boutonBuyAutoFarmer'))
        }
    }else{
        actionImpossible(document.getElementById('boutonBuyAutoFarmer'));
    }
    updateUI(values);
}

async function vendre(){
    const values = JSON.parse(await functionVendre());
    if(values != false){
        updateUI(values);
    }else{
        actionImpossible(document.getElementById('boutonVendre'));
    }
}
async function replanter(){
    const values = JSON.parse(await functionReplanter());
    if(values != false){
        updateUI(values);
    }else{
        actionImpossible(document.getElementById('boutonReplanter'));
    }
}
async function ameliorerTailleOutil(){
    const values = JSON.parse(await functionAmeliorerTailleOutil());
    if(values != false){
        updateUI(values);
        actionEffectuer(document.getElementById('boutonAmeliorerTailleOutil'));
    }else{
        actionImpossible(document.getElementById('boutonAmeliorerTailleOutil'));
    }
}
async function ameliorerMateriauxOutil(){
    const values = JSON.parse(await functionAmeliorerMateriauxOutil());
    if(values != false){
        updateUI(values);
        actionEffectuer(document.getElementById('boutonAmeliorerMateriauxOutil'));
    }else{
        actionImpossible(document.getElementById('boutonAmeliorerMateriauxOutil'));
    }
}
async function ameliorerSacAdos(){
    const values = JSON.parse(await functionAmeliorerSacAdos());
    if(values != false){
        updateUI(values);
        actionEffectuer(document.getElementById('boutonAmeliorerSacAdos'));
    }else{
        actionImpossible(document.getElementById('boutonAmeliorerSacAdos'));
    }
}
async function ameliorerTailleChamp(){
    const values = JSON.parse(await functionAmeliorerTailleChamp());
    if(values != false){
        updateUI(values);
        actionEffectuer(document.getElementById('boutonAmeliorerTailleChamp'));
    }else{
        actionImpossible(document.getElementById('boutonAmeliorerTailleChamp'));
    }
}
async function ameliorerFertiliterChamp(){
    const values = JSON.parse(await functionAmeliorerFertiliterChamp());
    if(values != false){
        updateUI(values);
        actionEffectuer(document.getElementById('boutonAmeliorerFertiliterChamp'));
    }else{
        actionImpossible(document.getElementById('boutonAmeliorerFertiliterChamp'));
    }
}

function actionImpossible(bouton){
    bouton.style.animation = "actionImpossible 1s linear";
    setTimeout(function(){ bouton.style.animation = "none";} , 1000);
}
function actionEffectuer(bouton){
    bouton.style.animation = "actionEffectuer 1s linear";
    setTimeout(function() {bouton.style.animation = "none";},1000);
}
function removeBalise(boutonSpan){
    boutonSpan.remove();
  
}
function changeColorGreen(bouton){
    bouton.style.backgroundColor = "#84ff86";
}
function changeColorRed(bouton){
    bouton.style.backgroundColor = "#ff6767";
}