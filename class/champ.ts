export class Champ{
    public tailles = new class taille{
        public longueur = 2
        public largeur = 2
        public parcellesPleine = this.longueur * this.largeur
    }
    public parcellesVide = 0
    public typeDeBle = "Blé"
    public futurTypeDeBle = ["Blé orange", "Blé banane", "Blé fort", "Blé carottes", "Blé saucisse", "Blé OVNI", "Blé intergalactique", "Blé cosmique", "Blé Bébé"]
    public niveauDuBle = 0
    public nextLevelBle = 0
    public prixDuBle = 2
    public fertiliter = 1
    public niveauAmeliorationTaille = 1
    public niveauAmeliorationFertiliter = 1
    public prixAmeliorationTaille = 10
    public prixAmeliorationFertiliter = 10
    public autoRecolte = false
    public autoRecolteAcheter = false

    constructor(){};

    recolter(retirer :number){
        if(this.parcellesVide + retirer <= this.tailles.parcellesPleine){
            this.parcellesVide += retirer
            return retirer
        }else{
            const reste = this.tailles.parcellesPleine - this.parcellesVide
            this.parcellesVide = this.tailles.parcellesPleine
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
        this.changerLeTypeDeBle()
    }
    replanter(deCbm :number){
        this.parcellesVide -= deCbm
    }

    changerLeTypeDeBle(){
        if(this.fertiliter === this.nextLevelBle + 4 && this.niveauDuBle < this.futurTypeDeBle.length){
            this.nextLevelBle += 4
            this.typeDeBle = this.futurTypeDeBle[this.niveauDuBle]
            this.niveauDuBle++
            this.prixDuBle *= 2
        }
    }
}