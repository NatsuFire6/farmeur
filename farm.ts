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
const myWindow = new WebUI();
myWindow.show("<html><script src=\"webui.js\"></script> Hello World! </html>");
await WebUI.wait();

const names = functionChoisirNom()

export const sacAdoss = new SacAdos("tout petit sac",1,1,1);
export const champs = new Champ("Blé", 2, 2, 1);
export const outils = new Outil("mains",1);
export const joueurs = new Joueur(names,0,0,0);
joueurs.sacAdos = sacAdoss.Nom
joueurs.outil = outils.Nom


aaaaaaaa
//console.log(`sac a dos prix 1 : ${sacAdoss.prixAmelioration}\nprix 2 : ${sacAdoss.augmenterStockage(),sacAdoss.prixAmelioration}\nprix 3 : ${sacAdoss.augmenterStockage(),sacAdoss.prixAmelioration}\nprix 4 : ${sacAdoss.augmenterStockage(),sacAdoss.prixAmelioration}\nprix 5 : ${sacAdoss.augmenterStockage(),sacAdoss.prixAmelioration}\nprix 6 : ${sacAdoss.augmenterStockage(),sacAdoss.prixAmelioration}\nprix 7 : ${sacAdoss.augmenterStockage(),sacAdoss.prixAmelioration}\nprix 8 : ${sacAdoss.augmenterStockage(),sacAdoss.prixAmelioration}\nprix 9 : ${sacAdoss.augmenterStockage(),sacAdoss.prixAmelioration}`)
//console.log(`taille champ prix 1 : ${champs.prixAmeliorationTaille}\ntaille champ prix 2 : ${champs.augmenterTaille(),champs.prixAmeliorationTaille}\ntaille champ prix 3 : ${champs.augmenterTaille(),champs.prixAmeliorationTaille}\ntaille champ prix 4 : ${champs.augmenterTaille(),champs.prixAmeliorationTaille}\ntaille champ prix 5 : ${champs.augmenterTaille(),champs.prixAmeliorationTaille}\ntaille champ prix 6 : ${champs.augmenterTaille(),champs.prixAmeliorationTaille}`)
//console.log(`fertiliter prix 1 : ${champs.prixAmeliorationFertiliter}\nprix 2 : ${champs.augmenterLaFertiliter(),champs.prixAmeliorationFertiliter}\nprix 3 : ${champs.augmenterLaFertiliter(),champs.prixAmeliorationFertiliter}\nprix 4 : ${champs.augmenterLaFertiliter(),champs.prixAmeliorationFertiliter}\nprix 5 : ${champs.augmenterLaFertiliter(),champs.prixAmeliorationFertiliter}\nprix 6 : ${champs.augmenterLaFertiliter(),champs.prixAmeliorationFertiliter}\nprix 7 : ${champs.augmenterLaFertiliter(),champs.prixAmeliorationFertiliter}\nprix 8 : ${champs.augmenterLaFertiliter(),champs.prixAmeliorationFertiliter}\nprix 9 : ${champs.augmenterLaFertiliter(),champs.prixAmeliorationFertiliter}`)
//console.log(`outil prix 1 : ${outils.prixAmelioration}\ntaille champ prix 2 : ${outils.augmenterLaTailleDeLaRecolte(),outils.prixAmelioration}\ntaille champ prix 3 : ${outils.augmenterLaTailleDeLaRecolte(),outils.prixAmelioration}\ntaille champ prix 4 : ${outils.augmenterLaTailleDeLaRecolte(),outils.prixAmelioration}\ntaille champ prix 5 : ${outils.augmenterLaTailleDeLaRecolte(),outils.prixAmelioration}\ntaille champ prix 6 : ${outils.augmenterLaTailleDeLaRecolte(),outils.prixAmelioration}`)

jeu(functionFaireEnNombre("\nPour jouer veillez entrer ce que vous voulez faire :\nAfficher des \x1b[34minfos\x1b[0m : 1\n\x1b[34mFarmer\x1b[0m : 2\n\x1b[34mVendre\x1b[0m : 3\n\x1b[34mReplanter\x1b[0m : 4\n\x1b[34mAméliorer\x1b[0m : 5\n"))
console.log()
function jeu(faire:number){
    if(faire === 1){
        console.log(`votre profile :\n\x1b[34mNom\x1b[0m : ${joueurs.name}\n\x1b[34mArgent\x1b[0m : ${joueurs.monaie}€\n\x1b[34mNiveau\x1b[0m : ${joueurs.niveau} (${joueurs.xp}/100xp)\n\x1b[34mBlé\x1b[0m : ${sacAdoss.remplissement}\n\x1b[34m   Champ\x1b[0m : ${champs.tailles.parcellesPleine - champs.parcellesVide}/${champs.tailles.parcellesPleine}\n\x1b[34m   Fertiliter\x1b[0m : ${champs.fertiliter}\n\x1b[34m   Type de blé\x1b[0m : ${champs.typeDeBle}\n\x1b[34mEquipements\x1b[0m : ${sacAdoss.Nom}, ${outils.Nom}\n\x1b[34m   Stockage du sac a dos\x1b[0m : ${sacAdoss.remplissement}/${sacAdoss.tailles.stockage}\n\x1b[34m   Tailles de recolte de l'outil\x1b[0m : ${outils.tailleDeLaRecolte}`)
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
    return jeu(functionFaireEnNombre("\nPour jouer veillez entrer ce que vous voulez faire :\nVoir \x1b[34mprofile\x1b[0m : 1\n\x1b[34mFarmer\x1b[0m : 2\n\x1b[34mVendre\x1b[0m : 3\n\x1b[34mReplanter\x1b[0m : 4\n\x1b[34mAméliorer\x1b[0m : 5\n"))
}
