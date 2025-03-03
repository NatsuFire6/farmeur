import { Joueur } from "./class/joueur.ts";

import { functionAmeliorerSacAdos } from "./functions/functionAmeliorerSacAdos.ts";
import { functionAmeliorerFertiliterChamp, functionAmeliorerTailleChamp } from "./functions/functionAmeliorerChamp.ts";
import { functionAmeliorerOutil } from "./functions/functionAmeliorerOutil.ts";
import { functionReplanter } from "./functions/functionReplanter.ts";
import { functionFarmer } from "./functions/functionFarmer.ts";
import { functionVendre } from "./functions/functionVendre.ts";

import { WebUI } from "https://deno.land/x/webui@2.5.3/mod.ts";
async function functionHTML(): Promise<void> {
    const myWindow = new WebUI();
    try {
        const htmlContent: string = await Deno.readTextFile("./main.html");
        console.log("HTML content loaded successfully.");
        myWindow.bind("getValues", getValues);
        myWindow.bind("functionFarmer", functionFarmer);
        myWindow.bind("functionVendre", functionVendre);
        myWindow.bind("functionReplanter", functionReplanter);
        myWindow.bind("functionAmeliorerOutil", functionAmeliorerOutil);
        myWindow.bind("functionAmeliorerSacAdos", functionAmeliorerSacAdos);
        myWindow.bind("functionAmeliorerTailleChamp", functionAmeliorerTailleChamp);
        myWindow.bind("functionAmeliorerFertiliterChamp", functionAmeliorerFertiliterChamp);       
        return myWindow.show(htmlContent);
    } catch (error) {
        return console.error("Erreur lors de la lecture du fichier HTML :", error);
    }
}

//const names = functionChoisirNom();
export const joueurs = new Joueur("names");
await functionHTML();
await WebUI.wait();

export function getValues() {
    return JSON.stringify([
        { id: "niveau", value: joueurs.niveau.toString() },
        { id: "xp-actuelle", value: joueurs.xp.toString() },
        { id: "xp-necessaire", value: joueurs.xpPass.toString() },
        { id: "argent", value: joueurs.monaie.toString() },
        { id: "ble", value: joueurs.sacAdos.remplissement.toString() },
        { id: "outil-stats", value: joueurs.outil.tailleDeLaRecolte.toString() },
        { id: "sac_a_dos-stats", value: `${joueurs.sacAdos.remplissement}/${joueurs.sacAdos.tailles.stockage}` },
        { id: "champ-stats", value: `${joueurs.champ.tailles.parcellesPleine - joueurs.champ.parcellesVide}/${joueurs.champ.tailles.parcellesPleine}` }
    ]);
    
}