export class Champ{
    public tailles = new class taille{
        public longueur = 5
        public largeur = 5
        public parcellesPleine = this.longueur * this.largeur
    }
    public parcellesVide = 0
    public typeDeBle = ""
    public prixDuBle = 2
    public fertiliter = 1
    public niveauAmeliorationTaille = 1
    public niveauAmeliorationFertiliter = 1

    public prixAmeliorationTaille = 10
    public prixAmeliorationFertiliter = 10

    constructor(typeDeBle :string, longueur :number, largeur :number, fertiliter :number){
        this.typeDeBle = typeDeBle
        this.tailles.longueur = longueur
        this.tailles.largeur = largeur
        this.fertiliter = fertiliter
        this.tailles.parcellesPleine = this.tailles.longueur * this.tailles.largeur
    }

    recolter(retirer :number){
        if(this.parcellesVide + retirer <= this.tailles.parcellesPleine){
            this.parcellesVide += retirer
            return retirer
        }else{
            const reste = this.tailles.parcellesPleine - this.parcellesVide
            this.parcellesVide = this.tailles.parcellesPleine
            console.log("\x1b[31mVous n'avez pus récolter que "+reste+" blé(s) !\nLe champ est vide !\x1b[0m")
            return reste
        }
    }
    augmenterTaille(){
        this.prixAmeliorationTaille *= 1+this.niveauAmeliorationTaille
        this.niveauAmeliorationTaille++
        if(this.tailles.largeur <= this.tailles.longueur){
            this.tailles.largeur++;
        }else{
            this.tailles.longueur++;
        }
        this.tailles.parcellesPleine = this.tailles.longueur * this.tailles.largeur
    }
    augmenterLaFertiliter(){
        this.fertiliter++
        this.prixAmeliorationFertiliter *= (1+Math.ceil(this.niveauAmeliorationFertiliter/10))*2
    }
    replanter(deCbm :number){
        this.parcellesVide -= deCbm
    }
}