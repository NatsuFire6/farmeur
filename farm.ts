import { Joueur } from "./class/joueur.ts";

import { functionAmeliorerSacAdos } from "./functions/functionAmeliorerSacAdos.ts";
import { functionAmeliorerFertiliterChamp, functionAmeliorerTailleChamp } from "./functions/functionAmeliorerChamp.ts";
import { functionAmeliorerMateriauxOutil, functionAmeliorerTailleOutil } from "./functions/functionAmeliorerOutil.ts";
import { functionReplanter,functionFarmer,functionVendre } from "./functions/functionAction.ts";

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
        myWindow.bind("functionAmeliorerTailleOutil", functionAmeliorerTailleOutil);
        myWindow.bind("functionAmeliorerMateriauxOutil", functionAmeliorerMateriauxOutil);
        myWindow.bind("functionAmeliorerSacAdos", functionAmeliorerSacAdos);
        myWindow.bind("functionAmeliorerTailleChamp", functionAmeliorerTailleChamp);
        myWindow.bind("functionAmeliorerFertiliterChamp", functionAmeliorerFertiliterChamp);
        myWindow.bind("impossibleAction", impossibleAction);
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
        { id: "bleRecolter", value: joueurs.bleRecolter.toString() },
        { id: "outilName", value: joueurs.outil.Nom.toString() },
        { id: "outilMaterial", value: joueurs.outil.Material.toString() },
        { id: "outilTaille", value: joueurs.outil.tailleDeLaRecolte.toString()},
        { id: "sacAdosStats", value: `${joueurs.sacAdos.remplissement}/${joueurs.sacAdos.tailles.stockage}` },
        { id: "sacAdosName", value: joueurs.sacAdos.Nom.toString() },
        { id: "typeDeBle", value: joueurs.champ.typeDeBle.toString() },
        { id: "champTaille", value: `${joueurs.champ.tailles.parcellesPleine - joueurs.champ.parcellesVide}/${joueurs.champ.tailles.parcellesPleine}` },
        { id: "champFertiliter", value : joueurs.champ.fertiliter.toString() },
        { id: "prixAmeliorerTailleOutil", value: joueurs.outil.prixAmeliorationTaille.toString() },
        { id: "prixAmeliorerMateriauxOutil", value: joueurs.outil.prixAmeliorationMateriaux.toString() },
        { id: "prixAmeliorerSacAdos", value: joueurs.sacAdos.prixAmelioration.toString() },
        { id: "prixAmeliorerTailleChamp", value: joueurs.champ.prixAmeliorationTaille.toString() },
        { id: "prixAmeliorerFertiliterChamp", value: joueurs.champ.prixAmeliorationFertiliter.toString() },
    ]);
}

export function impossibleAction() {return false}