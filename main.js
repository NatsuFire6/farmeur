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
    updateUI(values);
}

async function vendre(){
    const values = JSON.parse(await functionVendre());
    updateUI(values);
}
async function replanter(){
    const values = JSON.parse(await functionReplanter());
    updateUI(values);
}
async function ameliorerOutil(){
    const values = JSON.parse(await functionAmeliorerOutil());
    updateUI(values);
}
async function ameliorerSacAdos(){
    const values = JSON.parse(await functionAmeliorerSacAdos());
    updateUI(values);
}
async function ameliorerTailleChamp(){
    const values = JSON.parse(await functionAmeliorerTailleChamp());
    updateUI(values);
}
async function ameliorerFertiliterChamp(){
    const values = JSON.parse(await functionAmeliorerFertiliterChamp());
    updateUI(values);
}