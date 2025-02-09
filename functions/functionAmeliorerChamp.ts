import { zeroNull } from "../farm.ts";
import { champs } from "../farm.ts";
import { joueurs } from "../farm.ts";

export function functionAmeliorerChamp(){
    const faire = zeroNull("\nQue voulez vous améliorer dans votre \x1b[34mchamp\x1b[0m ?\n\x1b[34mtaille du champ\x1b[0m : "+champs.prixAmeliorationTaille+"€\n\x1b[34mfertiliter\x1b[0m : "+champs.prixAmeliorationFertiliter+"€\n")
    if(faire == "1" || faire.toLowerCase() ==="taille du champ"){
        const prix = champs.prixAmeliorationTaille
        if(joueurs.monaie >= prix){
            joueurs.monaie -= prix
            champs.augmenterTaille()
            console.log(`\x1b[32mVous venez d'augmenter la taille de votre champ à ${champs.tailles.parcellesPleine} \x1b[0mpour\x1b[31m ${prix}€\x1b[0m`)
            console.log(`Long : ${champs.tailles.longueur}\nLarg : ${champs.tailles.largeur}`)
        }else{
            console.log(`\n\x1b[31mVous n'avez pas assez d'argent (${joueurs.monaie}/${prix}€) !\x1b[0m\n`)
        }
    }else if(faire == "2" || faire.toLowerCase() ==="fertiliter"){
        const prix = champs.prixAmeliorationFertiliter
        if(joueurs.monaie >= prix){
            joueurs.monaie -= prix
            champs.augmenterLaFertiliter()
            console.log(`\x1b[32mVous venez d'augmenter la fertiliter de votre champ à ${champs.fertiliter} \x1b[0mpour\x1b[31m ${prix}€\x1b[0m`)
        }else{
            console.log(`\n\x1b[31mVous n'avez pas assez d'argent (${joueurs.monaie}/${prix}€) !\x1b[0m\n`)
        }
    }
}