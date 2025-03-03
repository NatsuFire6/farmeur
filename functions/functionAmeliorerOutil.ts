import { getValues, impossibleAction, joueurs } from "../farm.ts";

export function functionAmeliorerTailleOutil(){
    if(joueurs.monaie >= joueurs.outil.prixAmeliorationTaille && joueurs.outil.tailleDeLaRecolte < joueurs.outil.nextLevelMateriaux + 2){
        joueurs.monaie -= joueurs.outil.prixAmeliorationTaille
        joueurs.outil.augmenterLaTailleDeLaRecolte()
        return getValues()
    }else{
        return impossibleAction()
    }
}

export function functionAmeliorerMateriauxOutil(){
    if(joueurs.monaie >= joueurs.outil.prixAmeliorationMateriaux && joueurs.outil.niveauOutil < joueurs.outil.futurOutil.length && joueurs.outil.tailleDeLaRecolte === joueurs.outil.nextLevelMateriaux + 2){
        joueurs.monaie -= joueurs.outil.prixAmeliorationMateriaux
        joueurs.outil.ameliorerLeMateriaux()
        return getValues()
    }else{
        return impossibleAction()
    }
}
