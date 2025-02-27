import { zeroNull } from "./functionFaireEnNombre.ts";
import { joueurs } from "../farm.ts";


export function functionAmeliorerSacAdos() {
    const faire = zeroNull("\nVoulez vous vraiment améliorer la \x1b[34mtaille de votre sac a dos\x1b[0m pour \x1b[31m"+joueurs.sacAdos.prixAmelioration+"€\x1b[0m ?\n")
    if(faire.toLowerCase() === "oui"){
        if(joueurs.monaie >= joueurs.sacAdos.prixAmelioration){
            const temp = joueurs.sacAdos.prixAmelioration
            joueurs.monaie -= joueurs.sacAdos.prixAmelioration
            joueurs.sacAdos.augmenterStockage()
            joueurs.sacAdos.tailles.stockage = joueurs.sacAdos.tailles.hauteur * joueurs.sacAdos.tailles.longueur * joueurs.sacAdos.tailles.largeur
            console.log(`\n\x1b[32mVous venez d'améliorer la taille de votre sac a dos à ${joueurs.sacAdos.tailles.stockage} \x1b[0mpour\x1b[31m ${temp}€\n\x1b[0m`)
            console.log(`H : ${joueurs.sacAdos.tailles.hauteur}\nLarg : ${joueurs.sacAdos.tailles.largeur}\nLong : ${joueurs.sacAdos.tailles.longueur}`)
        }else{
            console.log(`\n\x1b[31mVous n'avez pas assez d'argent (${joueurs.monaie}/${joueurs.sacAdos.prixAmelioration}€) !\x1b[0m\n`)
        }
    }else if(faire.toLowerCase() ==="non"){
        return
    }else{
        console.log("\n\x1b[96mVeuillez entrer oui ou non !\x1b[0m\n")
        functionAmeliorerSacAdos()
    }
}