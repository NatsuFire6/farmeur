export class Champ{
    tailles = new class taille{
        longueur = 5
        largeur = 5
        parcellesPleine = this.longueur * this.largeur
    }
    parcellesVide = 0
    fertiliter = 1
    typeDeBle = ""
    niveauDeBle = 1

    constructor(typeDeBle :string, longueur :number, largeur :number, fertiliter :number){
        this.typeDeBle = typeDeBle
        this.tailles.longueur = longueur
        this.tailles.largeur = largeur
        this.fertiliter = fertiliter
    }

    recolter(retirer :number){
        if(this.parcellesVide + retirer <= this.tailles.parcellesPleine){
            this.parcellesVide += retirer
            return retirer
        }else{
            const reste = this.tailles.parcellesPleine - this.parcellesVide
            this.parcellesVide = this.tailles.parcellesPleine
            console.log("\x1b[31mTu n'as pus récolter que "+reste+" blé(s) !\nLe champ est vide !\x1b[0m")
            return reste
        }
    }
    augmenterLaFertiliter(){
        this.fertiliter++
    }
    replanter(deCbm :number){
        this.parcellesVide -= deCbm
        if (this.fertiliter > 1) {
            this.fertiliter--
            return 1
        }else{
            return 0
        }
    }
}