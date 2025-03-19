import { Champ } from "../class/champ.ts";
import { Outil } from "../class/outil.ts";
import { SacAdos } from "../class/sacAdos.ts";
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
    return getValues()
}

export function functionAcheterEtActiverDesactiverAutoFarmer(){
    if(joueurs.monaie >= 100000 && !joueurs.champ.autoRecolteAcheter){
        joueurs.monaie -= 100000
        joueurs.champ.autoRecolteAcheter = true
        joueurs.champ.autoRecolte = true
        return getValues()
    }else if(joueurs.champ.autoRecolteAcheter){
        joueurs.champ.autoRecolte = !joueurs.champ.autoRecolte
        return getValues()
    }else{
        return impossibleAction()
    }
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

export function functionAutoReplanter(){
    if(joueurs.champ.autoReplanter && joueurs.champ.parcellesVide > 0){
        return functionReplanter()
    }
    return getValues()
}

export function functionAcheterEtActiverDesactiverAutoReplanter(){
    if(joueurs.monaie >= 10000 && !joueurs.champ.autoReplanterAcheter){
        joueurs.monaie -= 10000
        joueurs.champ.autoReplanterAcheter = true
        joueurs.champ.autoReplanter = true
        return getValues()
    }else if(joueurs.champ.autoReplanterAcheter){
        joueurs.champ.autoReplanter = !joueurs.champ.autoReplanter
        return getValues()
    }else{
        return impossibleAction()
    } 
}

export function functionVendre(){
    if(joueurs.sacAdos.remplissement > 0){
        const ventes = joueurs.sacAdos.vider()
        joueurs.monaie += (ventes*joueurs.champ.prixDuBle*joueurs.multiplicateurDePrestige)
        return getValues()
    }else{
        return impossibleAction()
    }
}

export function functionAutoVendre(){
    if(joueurs.champ.autoVendre && joueurs.sacAdos.remplissement > 0){
        return functionVendre()
    }
    return getValues()
}

export function functionAcheterEtActiverDesactiverAutoVendre(){
    if(joueurs.monaie >= 50000 && !joueurs.champ.autoVendreAcheter){
        joueurs.monaie -= 50000
        joueurs.champ.autoVendreAcheter = true
        joueurs.champ.autoVendre = true
        return getValues()
    }else if(joueurs.champ.autoVendreAcheter){
        joueurs.champ.autoVendre = !joueurs.champ.autoVendre
        return getValues()
    }else{
        return impossibleAction()
    }
}

export function prestigePossible(){
    if(joueurs.monaie >= 100 * (joueurs.niveauPrestige * 10 )) {
        joueurs.prestigeAchetable = true
    }
}

export function prestige(){
    if(joueurs.prestigeAchetable){
        joueurs.monaie = 0
        joueurs.sacAdos = new SacAdos()
        joueurs.outil = new Outil()
        joueurs.champ = new Champ()
        joueurs.xp = 0
        joueurs.xpPass = 100
        joueurs.niveau = 0
        joueurs.niveauPass = 10
        joueurs.niveauPrestige++
        joueurs.multiplicateurDePrestige += 5
        joueurs.prestigeAchetable = false
    }
}