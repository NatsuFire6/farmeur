function updateValues(){
    updateUI()
    requestAnimationFrame(updateValues());
}
updateValues()

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
    }else{
        actionImpossible(document.getElementById('boutonAmeliorerTailleOutil'));
    }
}
async function ameliorerMateriauxOutil(){
    const values = JSON.parse(await functionAmeliorerMateriauxOutil());
    if(values != false){
        updateUI(values);
    }else{
        actionImpossible(document.getElementById('boutonAmeliorerMateriauxOutil'));
    }
}
async function ameliorerSacAdos(){
    const values = JSON.parse(await functionAmeliorerSacAdos());
    if(values != false){
        updateUI(values);
    }else{
        actionImpossible(document.getElementById('boutonAmeliorerSacAdos'));
    }
}
async function ameliorerTailleChamp(){
    const values = JSON.parse(await functionAmeliorerTailleChamp());
    if(values != false){
        updateUI(values);
    }else{
        actionImpossible(document.getElementById('boutonAmeliorerTailleChamp'));
    }
}
async function ameliorerFertiliterChamp(){
    const values = JSON.parse(await functionAmeliorerFertiliterChamp());
    if(values != false){
        updateUI(values);
    }else{
        actionImpossible(document.getElementById('boutonAmeliorerFertiliterChamp'));
    }
}

function actionImpossible(bouton){
    bouton.style.animation = "actionImpossible 1s linear";
    setTimeout(function(){ bouton.style.animation = "none";} , 1000);
}