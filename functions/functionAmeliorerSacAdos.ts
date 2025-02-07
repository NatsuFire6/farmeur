import { zeroNull } from "../farm.ts";
import { sacAdoss } from "../farm.ts";
import { joueurs } from "../farm.ts";


export function functionAmeliorerSacAdos() {
    const faire = zeroNull("\nVoulez vous vraiment améliorer la taille de votre \x1b[34msac a dos\x1b[0m ?")
    if(faire === "oui"){
        if(joueurs.monaie >= sacAdoss.prixAmelioration){
            joueurs.monaie -= sacAdoss.prixAmelioration
            sacAdoss.augmenterStockage()
        }else{
            console.log(`\n\x1b[31mVous n'avez pas assez d'argent (${joueurs.monaie}/${sacAdoss.prixAmelioration}) !\x1b[0m`)
        }
    }else if(faire ==="non"){
        return
    }else{
        console.log("\n\x1b[96mVeuillez entrer oui ou non !\x1b[0m")
        functionAmeliorerSacAdos()
    }
}