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

let rep 
export function zeroNull(phrases :string) {
    do {
        rep = prompt(phrases)
    } while (rep === null);
    return rep
}
const names = functionChoisirNom()

export const sacAdoss = new SacAdos("tout petit sac",1,1,1);
export const champs = new Champ("Blé", 2, 2, 1);
export const outils = new Outil("mains",1);
export const joueurs = new Joueur(names,0,0,0);
joueurs.sacAdos = sacAdoss.Nom
joueurs.outil = outils.Nom

//console.log(`sac a dos prix 1 : ${sacAdoss.prixAmelioration}\nprix 2 : ${sacAdoss.augmenterStockage(),sacAdoss.prixAmelioration}\nprix 3 : ${sacAdoss.augmenterStockage(),sacAdoss.prixAmelioration}\nprix 4 : ${sacAdoss.augmenterStockage(),sacAdoss.prixAmelioration}\nprix 5 : ${sacAdoss.augmenterStockage(),sacAdoss.prixAmelioration}\nprix 6 : ${sacAdoss.augmenterStockage(),sacAdoss.prixAmelioration}\nprix 7 : ${sacAdoss.augmenterStockage(),sacAdoss.prixAmelioration}\nprix 8 : ${sacAdoss.augmenterStockage(),sacAdoss.prixAmelioration}\nprix 9 : ${sacAdoss.augmenterStockage(),sacAdoss.prixAmelioration}`)
console.log(`taille champ prix 1 : ${champs.prixAmeliorationTaille}\ntaille champ prix 2 : ${champs.augmenterTaille(),champs.prixAmeliorationTaille}\ntaille champ prix 3 : ${champs.augmenterTaille(),champs.prixAmeliorationTaille}\ntaille champ prix 4 : ${champs.augmenterTaille(),champs.prixAmeliorationTaille}\ntaille champ prix 5 : ${champs.augmenterTaille(),champs.prixAmeliorationTaille}\ntaille champ prix 6 : ${champs.augmenterTaille(),champs.prixAmeliorationTaille}`)
jeu(zeroNull("\nPour jouer veillez entrer ce que vous voulez faire :\nAfficher des \x1b[34minfos\x1b[0m : 1\n\x1b[34mFarmer\x1b[0m : 2\n\x1b[34mVendre\x1b[0m : 3\n\x1b[34mReplanter\x1b[0m : 4\n\x1b[34mAméliorer\x1b[0m : 5\n"))
console.log()
function jeu(faire:string){
    if(faire === "1" || faire.toLowerCase() === "infos"){
        console.log(`votre profile :\n\x1b[34mNom\x1b[0m : ${joueurs.name}\n\x1b[34mArgent\x1b[0m : ${joueurs.monaie}€\n\x1b[34mNiveau\x1b[0m : ${joueurs.niveau} (${joueurs.xp}/100xp)\n\x1b[34mBlé\x1b[0m : ${sacAdoss.remplissement}\n\x1b[34m   Champ\x1b[0m : ${champs.tailles.parcellesPleine - champs.parcellesVide}/${champs.tailles.parcellesPleine}\n\x1b[34m   Fertiliter\x1b[0m : ${champs.fertiliter}\n\x1b[34m   Type de blé\x1b[0m : ${champs.typeDeBle}\n\x1b[34mEquipements\x1b[0m : ${sacAdoss.Nom}, ${outils.Nom}\n\x1b[34m   Stockage du sac a dos\x1b[0m : ${sacAdoss.remplissement}/${sacAdoss.tailles.stockage}\n\x1b[34m   Tailles de recolte de l'outil\x1b[0m : ${outils.tailleDeLaRecolte}`)
    }else if(faire === "2" || faire.toLowerCase() === "farmer"){
        functionFarmer()
    }else if(faire === "3" || faire.toLowerCase() === "vendre"){
        functionVendre()
    }else if(faire === "4" || faire.toLowerCase() === "replanter"){
        functionReplanter()
    }else if(faire === "5" || faire.toLowerCase() === "amélioration"){
        faire = zeroNull("\nQue voulez vous améliorer ?\n\x1b[34mOutil\x1b[0m : 1\n\x1b[34mSac a dos\x1b[0m : 2\n\x1b[34mChamp\x1b[0m : 3\n")
        if(faire === "1" || faire.toLowerCase() === "outil"){
            functionAmeliorerOutil()
        }else if(faire === "2" || faire.toLowerCase() === "sac a dos"){
            functionAmeliorerSacAdos()
        }else if(faire === "3" || faire.toLowerCase() === "champ"){
            functionAmeliorerChamp()
        }else{
            console.log("\x1b[96mVeuillez entrer quelque chose de correcte !\x1b[0m")
        }
    }else{
        console.log("\x1b[96mVeuillez entrer quelque chose de correcte !\x1b[0m")
    }
    return jeu(zeroNull("\nPour jouer veillez entrer ce que vous voulez faire :\nAfficher des \x1b[34minfos\x1b[0m : 1\n\x1b[34mFarmer\x1b[0m : 2\n\x1b[34mVendre\x1b[0m : 3\n\x1b[34mReplanter\x1b[0m : 4\n\x1b[34mAméliorer\x1b[0m : 5\n"))
}
