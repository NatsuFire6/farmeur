import { champs } from "../farm.ts";
import { joueurs } from "../farm.ts";

export function functionReplanter(){
    if(joueurs.monaie >= champs.parcellesVide && champs.parcellesVide > 0){
       joueurs.monaie -= champs.parcellesVide
       const tempParcelles = champs.parcellesVide
       champs.replanter(champs.parcellesVide)
       console.log(`\n\x1b[32mVous venez de replanter ${tempParcelles} parcelles\x1b[0m pour\x1b[31m ${tempParcelles}€\x1b[0m`)
    }
    else if(champs.parcellesVide > 0 && joueurs.monaie > 0){
        const tempParcelles = champs.parcellesVide
        const argentDisponible = joueurs.monaie
        const parcellesReplantees = Math.min(tempParcelles, argentDisponible);
        joueurs.monaie -= parcellesReplantees
        champs.replanter(argentDisponible)
        console.log(`\n\x1b[32mVous venez de replanter ${argentDisponible} des ${tempParcelles} parcelles vides \x1b[0mpour\x1b[31m ${argentDisponible}€\x1b[0m`)
        
    }
    else{
        console.log(`\n\x1b[31mVous n'avez pas besoin de replanter (${champs.tailles.parcellesPleine - champs.parcellesVide}/${champs.tailles.parcellesPleine}) ou n'avez pas assez d'argent (${joueurs.monaie}/${champs.parcellesVide}€) !\x1b[0m`)
    }
}