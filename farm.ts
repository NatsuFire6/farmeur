import { Champ } from "./class/champ.ts";
import { Outil } from "./class/outil.ts";
import { SacAdos } from "./class/sacAdos.ts";
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
import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";

export const sacAdoss = new SacAdos("tout petit sac", 1, 1, 1);
export const champs = new Champ("Blé", 2, 2, 1);
export const outils = new Outil("mains", 1);
export const joueurs = new Joueur("names", 0, 0, 0);
joueurs.sacAdos = sacAdoss.Nom;
joueurs.outil = outils.Nom;

async function functionHTML(): Promise<void> {
    const myWindow = new WebUI();
    try {
        const htmlContent: string = await Deno.readTextFile("./main.html");
        const document = new DOMParser().parseFromString(htmlContent, "text/html");
        if (document) {
            globalThis.document = document;
            await myWindow.show(htmlContent);
        } else {
            throw new Error("Failed to parse HTML content");
        }
    } catch (error) {
        console.error("Erreur lors de la lecture du fichier HTML :", error);
    }
}

await functionHTML();

(globalThis as any).functionFarmer = functionFarmer;
(globalThis as any).functionVendre = functionVendre;
(globalThis as any).functionReplanter = functionReplanter;
(globalThis as any).functionAmeliorerOutil = functionAmeliorerOutil;
(globalThis as any).functionAmeliorerSacAdos = functionAmeliorerSacAdos;
(globalThis as any).functionAmeliorerChamp = functionAmeliorerChamp;

(globalThis as any).joueurs = joueurs;
(globalThis as any).sacAdoss = sacAdoss;
(globalThis as any).champs = champs;
(globalThis as any).outils = outils;

(globalThis as any).Champ = Champ;
(globalThis as any).Outil = Outil;
(globalThis as any).SacAdos = SacAdos;
(globalThis as any).Joueur = Joueur;

function updateResources() {
    const niveauElement = document.getElementById('niveau');
    const xpElement = document.getElementById('xp');
    const argentElement = document.getElementById('argent');
    const bleElement = document.getElementById('ble');
    const outilElement = document.getElementById('outil');
    const sacAdosElement = document.getElementById('sac_a_dos');
    const champElement = document.getElementById('champ');
    const champIcon = document.getElementById('champ-icon');

    if (niveauElement && xpElement && argentElement && bleElement && outilElement && sacAdosElement && champElement && champIcon) {
        niveauElement.textContent = joueurs.niveau.toString();
        xpElement.textContent = joueurs.xp.toString();
        argentElement.textContent = joueurs.monaie.toString();
        bleElement.textContent = sacAdoss.remplissement.toString();
        outilElement.textContent = outils.Nom;
        sacAdosElement.textContent = sacAdoss.Nom;

        const parcellesPleine = champs.tailles.parcellesPleine;
        const parcellesVide = champs.parcellesVide;
        const champState = parcellesPleine - parcellesVide;

        champElement.textContent = `${champState}/${parcellesPleine}`;

        if (champState === 0) {
            champIcon.src = './images/wheat_icon_empty.png';
        } else if (champState < parcellesPleine) {
            champIcon.src = './images/wheat_icon_half.png';
        } else {
            champIcon.src = './images/wheat_icon_full.png';
        }
    }
}

(globalThis as any).updateResources = updateResources;

function harvestAndRefresh() {
    functionFarmer();
    updateResources();
}

(globalThis as any).harvestAndRefresh = harvestAndRefresh;

// Initial resource update
updateResources();

