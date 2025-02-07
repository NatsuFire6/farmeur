import { zeroNull } from "../farm.ts";
import { champs } from "../farm.ts";
import { joueurs } from "../farm.ts";
import { outils } from "../farm.ts";

export function functionAmeliorerChamp(){
    const faire = zeroNull("\nQue voulez vous améliorer dans votre \x1b[34mchamp\x1b[0m ?\n\x1b[34mtaille du champ\x1b[0m : "+champs.prixAmeliorationTaille+"€\n\x1b[34mfertiliter\x1b[0m : "+champs.prixAmeliorationFertiliter+"€\nacheter du \x1b[34mfertilizant\x1b[0m : "+champs.prixFertilizant+"€")
    if(faire == "1" || faire ==="taille du champ"){
        if(joueurs.monaie >= champs.prixAmeliorationTaille){
            joueurs.monaie -= champs.prixAmeliorationTaille
            champs.augmenterTaille()
        }else{
            console.log(`\n\x1b[31mVous n'avez pas assez d'argent (${joueurs.monaie}/${outils.prixAmelioration}€) !\x1b[0m`)
        }
    }else if(faire == "2" || faire ==="fertiliter"){
        if(joueurs.monaie >= champs.prixAmeliorationFertiliter){
            joueurs.monaie -= champs.prixAmeliorationFertiliter
            champs.augmenterLaFertiliter()
        }else{
            console.log(`\n\x1b[31mVous n'avez pas assez d'argent (${joueurs.monaie}/${outils.prixAmelioration}€) !\x1b[0m`)
        }
    }else if(faire == "3" || faire ==="fertilizant"){
        if(joueurs.monaie >= champs.prixFertilizant){
            joueurs.monaie -= champs.prixFertilizant
            champs.augmenterStockageFertilizant(1)
        }else{
            console.log(`\n\x1b[31mVous n'avez pas assez d'argent (${joueurs.monaie}/${outils.prixAmelioration}€) !\x1b[0m`)
        }
    }
}