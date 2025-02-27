import { joueurs } from "../farm.ts";

export function functionVendre(){
    if(joueurs.sacAdos.remplissement > 0){
        const ventes = joueurs.sacAdos.vider()
        joueurs.monaie += (ventes*joueurs.champ.prixDuBle)
        console.log(`\n\x1b[32mVous venez de vendre ${ventes} blés pour ${ventes*joueurs.champ.prixDuBle}€\x1b[0m`)
    }else{
        console.log("\n\x1b[31mVous n'avez rien à vendre !\x1b[0m")
    }
}