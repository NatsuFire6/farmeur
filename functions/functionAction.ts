import { getValues, impossibleAction, joueurs } from "../farm.ts";

export function functionFarmer(){
    if(joueurs.sacAdos.remplissement < joueurs.sacAdos.tailles.stockage && joueurs.champ.parcellesVide < joueurs.champ.tailles.parcellesPleine){
        let recolte
        if(joueurs.sacAdos.ajouter(recolte = joueurs.champ.recolter(joueurs.outil.tailleDeLaRecolte)*joueurs.champ.fertiliter)){
            joueurs.augmenterXp(recolte)
            joueurs.augmenterBle(recolte)
        }
        return getValues()
    }else{
        return impossibleAction()
    }
    
}

export function functionAutoFarmer(){
    if(joueurs.champ.autoRecolte){
        if(joueurs.outil.tailleDeLaRecolte <= joueurs.sacAdos.tailles.stockage - joueurs.sacAdos.remplissement){
            return functionFarmer()
        }
    }
}

export function functionAcheterEtActiverDesactiverAutoFarmer(){
    if(joueurs.monaie >= 100000 && !joueurs.champ.autoRecolteAcheter){
        joueurs.monaie -= 100000
        joueurs.champ.autoRecolteAcheter = true
        joueurs.champ.autoRecolte = true
    }if(joueurs.champ.autoRecolteAcheter){
        !joueurs.champ.autoRecolte
    }else{
        return impossibleAction()
    }
    return getValues()
}

export function functionReplanter(){
    if(joueurs.monaie >= joueurs.champ.parcellesVide && joueurs.champ.parcellesVide > 0){
       joueurs.monaie -= joueurs.champ.parcellesVide
       joueurs.champ.replanter(joueurs.champ.parcellesVide)
       return getValues()
    }
    else if(joueurs.champ.parcellesVide > 0 && joueurs.monaie > 0){
        const tempParcelles = joueurs.champ.parcellesVide
        const argentDisponible = joueurs.monaie
        const parcellesReplantees = Math.min(tempParcelles, argentDisponible);
        joueurs.monaie -= parcellesReplantees
        joueurs.champ.replanter(argentDisponible)
        return getValues()
    }else{
        return impossibleAction()
    }  
}

export function functionVendre(){
    if(joueurs.sacAdos.remplissement > 0){
        const ventes = joueurs.sacAdos.vider()
        joueurs.monaie += (ventes*joueurs.champ.prixDuBle)
        return getValues()
    }else{
        return impossibleAction()
    }
    
}