import { getValues, joueurs } from "../farm.ts";


export function functionAmeliorerSacAdos() {
    if(joueurs.monaie >= joueurs.sacAdos.prixAmelioration){
        joueurs.monaie -= joueurs.sacAdos.prixAmelioration
        joueurs.sacAdos.augmenterStockage()
        joueurs.sacAdos.tailles.stockage = joueurs.sacAdos.tailles.hauteur * joueurs.sacAdos.tailles.longueur * joueurs.sacAdos.tailles.largeur
    }
    return getValues()
}