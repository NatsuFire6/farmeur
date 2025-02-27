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
        return myWindow.show(htmlContent);
    } catch (error) {
        return console.error("Erreur lors de la lecture du fichier HTML :", error);
    }
}

//const names = functionChoisirNom();
export const joueurs = new Joueur("names",0,0,0);
await functionHTML();

function updateUI() {
    document.getElementById("niveau").textContent = joueurs.niveau.toString();
    document.getElementById("xp-actuelle").textContent = joueurs.xp.toString();
    document.getElementById("xp-necessaire").textContent = joueurs.xpPass.toString();
    document.getElementById("argent").textContent = joueurs.monaie.toString();
    document.getElementById("ble").textContent = joueurs.sacAdos.remplissement.toString();
    document.getElementById("outil-stats").textContent = [joueurs.outil.tailleDeLaRecolte.toString()];
    document.getElementById("sac_a_dos-stats").textContent = [joueurs.sacAdos.remplissement,"/",joueurs.sacAdos.tailles.stockage.toString()];
    document.getElementById("champ-stats").textContent = [(joueurs.champ.tailles.parcellesPleine - joueurs.champ.parcellesVide).toString,"/",joueurs.champ.tailles.parcellesPleine.toString()];
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