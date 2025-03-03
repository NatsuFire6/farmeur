import { getValues, joueurs } from "../farm.ts";

export function functionVendre(){
    if(joueurs.sacAdos.remplissement > 0){
        const ventes = joueurs.sacAdos.vider()
        joueurs.monaie += (ventes*joueurs.champ.prixDuBle)
    }
    return getValues()
}