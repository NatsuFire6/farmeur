import { joueurs } from "../farm.ts";
import { outils } from "../farm.ts";
import { zeroNull } from "./functionFaireEnNombre.ts";

export function functionAmeliorerOutil(){
    const faire = zeroNull("\nQue voulez vous améliorer sur votre \x1b[34moutil\x1b[0m ?\n\x1b[34mtaille de la récolte\x1b[0m : "+outils.prixAmelioration+"€\n")
    if(faire =="1" || faire.toLowerCase() === "taille de la recolte"){
        if(joueurs.monaie >= outils.prixAmelioration){
            const temp = outils.prixAmelioration
            joueurs.monaie -= outils.prixAmelioration
            outils.augmenterLaTailleDeLaRecolte(1)
            console.log("\n\x1b[32mVous venez d'augmenter la taille de votre recolte à "+outils.tailleDeLaRecolte+" \x1b[0mpour\x1b[31m "+temp+"€\x1b[0m")
        }else{
            console.log(`\n\x1b[31mVous n'avez pas assez d'argent (${joueurs.monaie}/${outils.prixAmelioration}€) !\x1b[0m\n`)
        }
    }else if (faire == "0"){
        return
    }else{
        console.log("\x1b[96mVeuillez entrer quelque chose de correcte (0, 1 ou taille de la recolte) !\x1b[0m")
        functionAmeliorerOutil()
    }
}