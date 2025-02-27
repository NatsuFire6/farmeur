import { Joueur } from "./class/joueur.ts";

import { functionAmeliorerSacAdos } from "./functions/functionAmeliorerSacAdos.ts";
import { functionAmeliorerChamp } from "./functions/functionAmeliorerChamp.ts";
import { functionAmeliorerOutil } from "./functions/functionAmeliorerOutil.ts";
import { functionReplanter } from "./functions/functionReplanter.ts";
import { functionFarmer } from "./functions/functionFarmer.ts";
import { functionVendre } from "./functions/functionVendre.ts";
import { functionChoisirNom } from "./functions/functionChoisirNom.ts";
import { functionFaireEnNombre } from "./functions/functionFaireEnNombre.ts";

import { WebUI } from "https://deno.land/x/webui@2.5.3/mod.ts";
async function functionHTML(): Promise<void> {
    const myWindow = new WebUI();
    try {
        const htmlContent: string = await Deno.readTextFile("./main.html");
        console.log("HTML content loaded successfully.");        
        return myWindow.show(htmlContent);
    } catch (error) {
        await logError(error as Error);
        return console.error("Erreur lors de la lecture du fichier HTML :", error);
    }
}
// Fonction pour nettoyer les séquences d'échappement ANSI
function cleanAnsiSequences(input: string): string {
    // eslint-disable-next-line no-control-regex
    return input.replace(/\x1b\[[0-9;]*m/g, '');
}
// Fonction pour enregistrer les erreurs dans un fichier de log
async function logError(error: Error) {
    const encoder = new TextEncoder();
    const cleanError = cleanAnsiSequences(error.toString());
    const data = encoder.encode(`[${new Date().toISOString()}] ${cleanError}\n`);
    await Deno.writeFile("error.log", data, { append: true });
}

//const names = functionChoisirNom();
export const joueurs = new Joueur("names");
await functionHTML();
console.log(`\nBienvenue ${joueurs.name} !`)

function updateUI() {
    const elementsToUpdate = [
        { id: "niveau", value: joueurs.niveau.toString() },
        { id: "xp-actuelle", value: joueurs.xp.toString() },
        { id: "xp-necessaire", value: joueurs.xpPass.toString() },
        { id: "argent", value: joueurs.monaie.toString() },
        { id: "ble", value: joueurs.sacAdos.remplissement.toString() },
        { id: "outil-stats", value: joueurs.outil.tailleDeLaRecolte.toString() },
        { id: "sac_a_dos-stats", value: `${joueurs.sacAdos.remplissement}/${joueurs.sacAdos.tailles.stockage}` },
        { id: "champ-stats", value: `${joueurs.champ.tailles.parcellesPleine - joueurs.champ.parcellesVide}/${joueurs.champ.tailles.parcellesPleine}` }
    ];
    elementsToUpdate.forEach(element => {
        const domElement = document.getElementById(element.id);
        if (domElement) {
            domElement.textContent = element.value;
        }
    });
}
//console.log(`sac a dos prix 1 : ${joueurs.sacAdos.prixAmelioration}\nprix 2 : ${joueurs.sacAdos.augmenterStockage(),joueurs.sacAdos.prixAmelioration}\nprix 3 : ${joueurs.sacAdos.augmenterStockage(),joueurs.sacAdos.prixAmelioration}\nprix 4 : ${joueurs.sacAdos.augmenterStockage(),joueurs.sacAdos.prixAmelioration}\nprix 5 : ${joueurs.sacAdos.augmenterStockage(),joueurs.sacAdos.prixAmelioration}\nprix 6 : ${joueurs.sacAdos.augmenterStockage(),joueurs.sacAdos.prixAmelioration}\nprix 7 : ${joueurs.sacAdos.augmenterStockage(),joueurs.sacAdos.prixAmelioration}\nprix 8 : ${joueurs.sacAdos.augmenterStockage(),joueurs.sacAdos.prixAmelioration}\nprix 9 : ${joueurs.sacAdos.augmenterStockage(),joueurs.sacAdos.prixAmelioration}`)
//console.log(`taille champ prix 1 : ${joueurs.champ.prixAmeliorationTaille}\ntaille champ prix 2 : ${joueurs.champ.augmenterTaille(),joueurs.champ.prixAmeliorationTaille}\ntaille champ prix 3 : ${joueurs.champ.augmenterTaille(),joueurs.champ.prixAmeliorationTaille}\ntaille champ prix 4 : ${joueurs.champ.augmenterTaille(),joueurs.champ.prixAmeliorationTaille}\ntaille champ prix 5 : ${joueurs.champ.augmenterTaille(),joueurs.champ.prixAmeliorationTaille}\ntaille champ prix 6 : ${joueurs.champ.augmenterTaille(),joueurs.champ.prixAmeliorationTaille}`)
//console.log(`fertiliter prix 1 : ${joueurs.champ.prixAmeliorationFertiliter}\nprix 2 : ${joueurs.champ.augmenterLaFertiliter(),joueurs.champ.prixAmeliorationFertiliter}\nprix 3 : ${joueurs.champ.augmenterLaFertiliter(),joueurs.champ.prixAmeliorationFertiliter}\nprix 4 : ${joueurs.champ.augmenterLaFertiliter(),joueurs.champ.prixAmeliorationFertiliter}\nprix 5 : ${joueurs.champ.augmenterLaFertiliter(),joueurs.champ.prixAmeliorationFertiliter}\nprix 6 : ${joueurs.champ.augmenterLaFertiliter(),joueurs.champ.prixAmeliorationFertiliter}\nprix 7 : ${joueurs.champ.augmenterLaFertiliter(),joueurs.champ.prixAmeliorationFertiliter}\nprix 8 : ${joueurs.champ.augmenterLaFertiliter(),joueurs.champ.prixAmeliorationFertiliter}\nprix 9 : ${joueurs.champ.augmenterLaFertiliter(),joueurs.champ.prixAmeliorationFertiliter}`)
//console.log(`outil prix 1 : ${joueurs.outil.prixAmelioration}\ntaille champ prix 2 : ${joueurs.outil.augmenterLaTailleDeLaRecolte(),joueurs.outil.prixAmelioration}\ntaille champ prix 3 : ${joueurs.outil.augmenterLaTailleDeLaRecolte(),joueurs.outil.prixAmelioration}\ntaille champ prix 4 : ${joueurs.outil.augmenterLaTailleDeLaRecolte(),joueurs.outil.prixAmelioration}\ntaille champ prix 5 : ${joueurs.outil.augmenterLaTailleDeLaRecolte(),joueurs.outil.prixAmelioration}\ntaille champ prix 6 : ${joueurs.outil.augmenterLaTailleDeLaRecolte(),joueurs.outil.prixAmelioration}`)

jeu(functionFaireEnNombre("\nPour jouer veillez entrer ce que vous voulez faire :\n\x1b[34mprofile\x1b[0m : 1\n\x1b[34mFarmer\x1b[0m : 2\n\x1b[34mVendre\x1b[0m : 3\n\x1b[34mReplanter\x1b[0m : 4\n\x1b[34mAméliorer\x1b[0m : 5\n"))
function jeu(faire:number){
    if(faire === 1){
        console.log(`votre profile :\n\x1b[34mNom\x1b[0m : ${joueurs.name}\n\x1b[34mArgent\x1b[0m : ${joueurs.monaie}€\n\x1b[34mNiveau\x1b[0m : ${joueurs.niveau} (${joueurs.xp}/100xp)\n\x1b[34mBlé\x1b[0m : ${joueurs.sacAdos.remplissement}\n\x1b[34m   Champ\x1b[0m : ${joueurs.champ.tailles.parcellesPleine - joueurs.champ.parcellesVide}/${joueurs.champ.tailles.parcellesPleine}\n\x1b[34m   Fertiliter\x1b[0m : ${joueurs.champ.fertiliter}\n\x1b[34m   Type de blé\x1b[0m : ${joueurs.champ.typeDeBle}\n\x1b[34mEquipements\x1b[0m : ${joueurs.sacAdos.Nom}, ${joueurs.outil.Nom}\n\x1b[34m   Stockage du sac a dos\x1b[0m : ${joueurs.sacAdos.remplissement}/${joueurs.sacAdos.tailles.stockage}\n\x1b[34m   Tailles de recolte de l'outil\x1b[0m : ${joueurs.outil.tailleDeLaRecolte}`)
    }else if(faire === 2){
        functionFarmer()
    }else if(faire === 3){
        functionVendre()
    }else if(faire === 4){
        functionReplanter()
    }else if(faire === 5){
        faire = functionFaireEnNombre("\nQue voulez vous améliorer ?\n\x1b[34mOutil\x1b[0m : 1\n\x1b[34mSac a dos\x1b[0m : 2\n\x1b[34mChamp\x1b[0m : 3\n")
        if(faire === 1){
            functionAmeliorerOutil()
        }else if(faire === 2){
            functionAmeliorerSacAdos() 
        }else if(faire === 3){
            functionAmeliorerChamp()
        }else{
            console.log("\x1b[96mVeuillez entrer quelque chose de correcte !\x1b[0m")
        }
    }else{
        console.log("\x1b[96mVeuillez entrer quelque chose de correcte !\x1b[0m")
    }
    return jeu(functionFaireEnNombre("\nPour jouer veillez entrer ce que vous voulez faire :\n\x1b[34mprofile\x1b[0m : 1\n\x1b[34mFarmer\x1b[0m : 2\n\x1b[34mVendre\x1b[0m : 3\n\x1b[34mReplanter\x1b[0m : 4\n\x1b[34mAméliorer\x1b[0m : 5\n"))
}