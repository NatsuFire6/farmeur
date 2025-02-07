import { joueurs } from "../farm.ts";
import { outils } from "../farm.ts";
import { zeroNull } from "../farm.ts";

export function functionAmeliorerOutil(){
    const faire = zeroNull("\nQue voulez vous améliorer sur votre \x1b[34moutil\x1b[0m ?\ntaille de la récolte : "+outils.prixAmelioration+"€")
    if(faire =="1" || faire === "taille de la recolte"){
        if(joueurs.monaie >= outils.prixAmelioration){
            joueurs.monaie -= outils.prixAmelioration
            outils.augmenterLaTailleDeLaRecolte(1)
            console.log("\nVous venez d'augmenter la taille de votre recolte à "+outils.tailleDeLaRecolte)
        }else{
            console.log(`\n\x1b[31mVous n'avez pas assez d'argent (${joueurs.monaie}/${outils.prixAmelioration}€) !\x1b[0m`)
        }
    }
}