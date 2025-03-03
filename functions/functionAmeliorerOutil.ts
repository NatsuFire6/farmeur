import { getValues, joueurs } from "../farm.ts";

export function functionAmeliorerOutil(){
    if(joueurs.monaie >= joueurs.outil.prixAmelioration){
        joueurs.monaie -= joueurs.outil.prixAmelioration
        joueurs.outil.augmenterLaTailleDeLaRecolte()
    }
    return getValues()
}