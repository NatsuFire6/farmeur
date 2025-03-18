import { Joueur } from "./class/joueur.ts";

import { functionAmeliorerSacAdos } from "./functions/functionAmeliorerSacAdos.ts";
import { functionAmeliorerFertiliterChamp, functionAmeliorerTailleChamp } from "./functions/functionAmeliorerChamp.ts";
import { functionAmeliorerMateriauxOutil, functionAmeliorerTailleOutil } from "./functions/functionAmeliorerOutil.ts";
import { functionReplanter,functionFarmer,functionVendre, functionAutoFarmer, functionAcheterEtActiverDesactiverAutoFarmer, functionAcheterEtActiverDesactiverAutoReplanter, functionAcheterEtActiverDesactiverAutoVendre, functionAutoReplanter, functionAutoVendre } from "./functions/functionAction.ts";

import { WebUI } from "https://deno.land/x/webui@2.5.3/mod.ts";
async function functionHTML(): Promise<void> {
    const myWindow = new WebUI();
    try {
        const htmlContent: string = await Deno.readTextFile("./main.html");
        console.log("HTML content loaded successfully.");
        myWindow.bind("getValues", getValues);
        myWindow.bind("functionFarmer", functionFarmer);
        myWindow.bind("functionReplanter", functionReplanter);
        myWindow.bind("functionVendre", functionVendre);
        myWindow.bind("functionAutoFarmer",functionAutoFarmer);
        myWindow.bind("functionAutoReplanter",functionAutoReplanter);
        myWindow.bind("functionAutoVendre",functionAutoVendre);
        myWindow.bind("functionAcheterEtActiverDesactiverAutoFarmer",functionAcheterEtActiverDesactiverAutoFarmer);
        myWindow.bind("functionAcheterEtActiverDesactiverAutoReplanter",functionAcheterEtActiverDesactiverAutoReplanter);
        myWindow.bind("functionAcheterEtActiverDesactiverAutoVendre",functionAcheterEtActiverDesactiverAutoVendre);
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
        { id: "niveau", value: joueurs.niveau},
        { id: "xp-actuelle", value: joueurs.xp},
        { id: "xp-necessaire", value: joueurs.xpPass},
        { id: "argent", value: joueurs.monaie},
        { id: "bleRecolter", value: joueurs.bleRecolter},
        { id: "outilName", value: joueurs.outil.Nom },
        { id: "outilMaterial", value: joueurs.outil.Material},
        { id: "outilTaille", value: joueurs.outil.tailleDeLaRecolte},
        { id: "necessiterUpgradeOutil", value: `${joueurs.outil.tailleDeLaRecolte}/${joueurs.outil.nextLevelMateriaux+2}`},
        { id: "sacAdosStats", value: `${joueurs.sacAdos.remplissement}/${joueurs.sacAdos.tailles.stockage}` },
        { id: "sacAdosName", value: joueurs.sacAdos.Nom},
        { id: "typeDeBle", value: joueurs.champ.typeDeBle},
        { id: "champTaille", value: `${joueurs.champ.tailles.parcellesPleine - joueurs.champ.parcellesVide}/${joueurs.champ.tailles.parcellesPleine}` },
        { id: "champFertiliter", value: joueurs.champ.fertiliter},
        { id: "bonusFertiliter", value: `${joueurs.champ.fertiliter}/${joueurs.champ.nextLevelBle === 36 ? joueurs.champ.nextLevelBle : joueurs.champ.nextLevelBle + 4}` },
        { id: "prixAmeliorerTailleOutil", value: joueurs.outil.prixAmeliorationTaille},
        { id: "prixAmeliorerMateriauxOutil", value: joueurs.outil.prixAmeliorationMateriaux},
        { id: "prixAmeliorerSacAdos", value: joueurs.sacAdos.prixAmelioration},
        { id: "prixAmeliorerTailleChamp", value: joueurs.champ.prixAmeliorationTaille},
        { id: "prixAmeliorerFertiliterChamp", value: joueurs.champ.prixAmeliorationFertiliter},
        { id: "autoFarmerAcheter", value: joueurs.champ.autoRecolteAcheter},
        { id: "autoFarmerActiver", value: joueurs.champ.autoRecolte},
        { id: "autoVendreAcheter", value: joueurs.champ.autoVendreAcheter},
        { id: "autoVendreActiver", value: joueurs.champ.autoVendre},
        { id: "autoReplanterAcheter", value: joueurs.champ.autoReplanterAcheter},
        { id: "autoReplanterActiver", value: joueurs.champ.autoReplanter},
        { id: "prixble", value: joueurs.champ.prixDuBle},
    ]);
}

export function impossibleAction() {return false}