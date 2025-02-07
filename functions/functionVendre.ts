import { sacAdoss } from "../farm.ts";
import { champs } from "../farm.ts";
import { joueurs } from "../farm.ts";

export function functionVendre(){
    if(sacAdoss.remplissement > 0){
                const ventes = sacAdoss.vider()
                joueurs.augmenterLaMonaie(ventes*champs.niveauDeBle)
                console.log(`\n\x1b[32mVous venez de vendre ${ventes} blés pour ${ventes*champs.niveauDeBle}€\x1b[0m`)
            }else{
                console.log("\n\x1b[31mVous n'avez rien à vendre !\x1b[0m")
            }
}