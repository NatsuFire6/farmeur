import { getValues, joueurs } from "../farm.ts";

export function functionAmeliorerTailleChamp(){
    const prix = joueurs.champ.prixAmeliorationTaille
    if(joueurs.monaie >= prix){
        joueurs.monaie -= prix
        joueurs.champ.augmenterTaille()
    }
    return getValues()
};
export function functionAmeliorerFertiliterChamp(){
    const prix = joueurs.champ.prixAmeliorationFertiliter
    if(joueurs.monaie >= prix){
        joueurs.monaie -= prix
        joueurs.champ.augmenterLaFertiliter()
    }
    return getValues()
}