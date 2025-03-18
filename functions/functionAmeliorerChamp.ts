import { getValues, impossibleAction, joueurs } from "../farm.ts";

export function functionAmeliorerTailleChamp(){
    const prix = joueurs.champ.prixAmeliorationTaille
    if(joueurs.monaie >= prix && joueurs.champ.tailleTierMax >= joueurs.champ.tailles.parcellesPleine){
        joueurs.monaie -= prix
        joueurs.champ.augmenterTaille()
        return getValues()
    }else{
        return impossibleAction()
    }
    
};
export function functionAmeliorerFertiliterChamp(){
    const prix = joueurs.champ.prixAmeliorationFertiliter
    if(joueurs.monaie >= prix && joueurs.champ.niveauDuBle < joueurs.champ.futurTypeDeBle.length && joueurs.champ.fertiliterTierMax >= joueurs.champ.fertiliter){
        joueurs.monaie -= prix
        joueurs.champ.augmenterLaFertiliter()
        return getValues()
    }else{
        return impossibleAction()
    }
}