import { getValues, joueurs } from "../farm.ts";

export function functionReplanter(){
    if(joueurs.monaie >= joueurs.champ.parcellesVide && joueurs.champ.parcellesVide > 0){
       joueurs.monaie -= joueurs.champ.parcellesVide
       joueurs.champ.replanter(joueurs.champ.parcellesVide)
    }
    else if(joueurs.champ.parcellesVide > 0 && joueurs.monaie > 0){
        const tempParcelles = joueurs.champ.parcellesVide
        const argentDisponible = joueurs.monaie
        const parcellesReplantees = Math.min(tempParcelles, argentDisponible);
        joueurs.monaie -= parcellesReplantees
        joueurs.champ.replanter(argentDisponible)
    }
    return getValues()
}