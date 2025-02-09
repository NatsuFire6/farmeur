import { sacAdoss } from "../farm.ts";
import { champs } from "../farm.ts";
import { joueurs } from "../farm.ts";
import { outils } from "../farm.ts";

export function functionFarmer(){
    if(sacAdoss.remplissement < sacAdoss.tailles.stockage && champs.parcellesVide < champs.tailles.parcellesPleine){
                let recolte
                if(sacAdoss.ajouter(recolte = champs.recolter(outils.tailleDeLaRecolte)*champs.fertiliter)){
                    joueurs.augmenterXp(recolte)
                    console.log(("\x1b[32m\nVous avez récolté "+recolte+" blés !\net pris "+recolte+" xp !\x1b[0m"))
                }
            }else{
                console.log(`\n\x1b[31mVous ne pouvez pas farmer pour l'instant\x1b[0m, \nStockage de votre \x1b[34msac a dos\x1b[0m : ${sacAdoss.remplissement}/${sacAdoss.tailles.stockage}\nParcelles pleine de votre \x1b[34mchamp\x1b[0m : ${champs.tailles.parcellesPleine - champs.parcellesVide}/${champs.tailles.parcellesPleine}`)
            }
}