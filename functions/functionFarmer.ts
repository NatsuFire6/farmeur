import { joueurs } from "../farm.ts";

export function functionFarmer(){
    if(joueurs.sacAdos.remplissement < joueurs.sacAdos.tailles.stockage && joueurs.champ.parcellesVide < joueurs.champ.tailles.parcellesPleine){
        let recolte
        if(joueurs.sacAdos.ajouter(recolte = joueurs.champ.recolter(joueurs.outil.tailleDeLaRecolte)*joueurs.champ.fertiliter)){
            joueurs.augmenterXp(recolte)
            console.log(("\x1b[32m\nVous avez récolté "+recolte+" blés !\net pris "+recolte+" xp !\x1b[0m"))
        }
    }else{
        console.log(`\n\x1b[31mVous ne pouvez pas farmer pour l'instant\x1b[0m, \nStockage de votre \x1b[34msac a dos\x1b[0m : ${joueurs.sacAdos.remplissement}/${joueurs.sacAdos.tailles.stockage}\nParcelles pleine de votre \x1b[34mchamp\x1b[0m : ${joueurs.champ.tailles.parcellesPleine - joueurs.champ.parcellesVide}/${joueurs.champ.tailles.parcellesPleine}`)
    }
}