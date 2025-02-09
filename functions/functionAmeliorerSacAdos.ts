import { zeroNull } from "../farm.ts";
import { sacAdoss } from "../farm.ts";
import { joueurs } from "../farm.ts";


export function functionAmeliorerSacAdos() {
    const faire = zeroNull("\nVoulez vous vraiment améliorer la \x1b[34mtaille de votre sac a dos\x1b[0m pour \x1b[31m"+sacAdoss.prixAmelioration+"€\x1b[0m ?\n")
    if(faire.toLowerCase() === "oui"){
        if(joueurs.monaie >= sacAdoss.prixAmelioration){
            const temp = sacAdoss.prixAmelioration
            joueurs.monaie -= sacAdoss.prixAmelioration
            sacAdoss.augmenterStockage()
            sacAdoss.tailles.stockage = sacAdoss.tailles.hauteur * sacAdoss.tailles.longueur * sacAdoss.tailles.largeur
            console.log(`\n\x1b[32mVous venez d'améliorer la taille de votre sac a dos à ${sacAdoss.tailles.stockage} \x1b[0mpour\x1b[31m ${temp}€\n\x1b[0m`)
            console.log(`H : ${sacAdoss.tailles.hauteur}\nLarg : ${sacAdoss.tailles.largeur}\nLong : ${sacAdoss.tailles.longueur}`)
        }else{
            console.log(`\n\x1b[31mVous n'avez pas assez d'argent (${joueurs.monaie}/${sacAdoss.prixAmelioration}€) !\x1b[0m\n`)
        }
    }else if(faire.toLowerCase() ==="non"){
        return
    }else{
        console.log("\n\x1b[96mVeuillez entrer oui ou non !\x1b[0m\n")
        functionAmeliorerSacAdos()
    }
}