import { joueurs } from "../farm.ts";

export function functionReplanter(){
    if(joueurs.monaie >= joueurs.champ.parcellesVide && joueurs.champ.parcellesVide > 0){
       joueurs.monaie -= joueurs.champ.parcellesVide
       const tempParcelles = joueurs.champ.parcellesVide
       joueurs.champ.replanter(joueurs.champ.parcellesVide)
       console.log(`\n\x1b[32mVous venez de replanter ${tempParcelles} parcelles\x1b[0m pour\x1b[31m ${tempParcelles}€\x1b[0m`)
    }
    else if(joueurs.champ.parcellesVide > 0 && joueurs.monaie > 0){
        const tempParcelles = joueurs.champ.parcellesVide
        const argentDisponible = joueurs.monaie
        const parcellesReplantees = Math.min(tempParcelles, argentDisponible);
        joueurs.monaie -= parcellesReplantees
        joueurs.champ.replanter(argentDisponible)
        console.log(`\n\x1b[32mVous venez de replanter ${argentDisponible} des ${tempParcelles} parcelles vides \x1b[0mpour\x1b[31m ${argentDisponible}€\x1b[0m`)
        
    }
    else{
        console.log(`\n\x1b[31mVous n'avez pas besoin de replanter (${joueurs.champ.tailles.parcellesPleine - joueurs.champ.parcellesVide}/${joueurs.champ.tailles.parcellesPleine}) ou n'avez pas assez d'argent (${joueurs.monaie}/${joueurs.champ.parcellesVide}€) !\x1b[0m`)
    }
}