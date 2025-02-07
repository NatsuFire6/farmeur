import { champs } from "../farm.ts";
import { joueurs } from "../farm.ts";

export function functionReplanter(){
    if(joueurs.monaie >= champs.parcellesVide && champs.parcellesVide > 0){
                joueurs.monaie -= champs.parcellesVide
                const tempParcelles = champs.parcellesVide
                const fert = champs.replanter(champs.parcellesVide)
                console.log(`\n\x1b[32mVous venez de replanter ${tempParcelles} parcelles\x1b[0m pour\x1b[31m ${tempParcelles}€ et -${fert} de fertiliter\x1b[0m`)
            }
            else if(champs.parcellesVide > 0 && joueurs.monaie > 0){
                const tempParcelles = champs.parcellesVide
                const fert = champs.replanter(joueurs.monaie)
                console.log(`\n\x1b[32mVous venez de replanter ${joueurs.monaie} des ${tempParcelles} parcelles vides pour\x1b[31m ${joueurs.monaie}€ et -${fert} de fertiliter\x1b[0m`)
                joueurs.monaie -= champs.parcellesVide
            }
            else{
                console.log(`\n\x1b[31mVous n'avez pas besoin de replanter (${champs.tailles.parcellesPleine - champs.parcellesVide}/${champs.tailles.parcellesPleine}) ou n'avez pas assez d'argent (${joueurs.monaie}/${champs.parcellesVide}) !\x1b[0m`)
            }
}