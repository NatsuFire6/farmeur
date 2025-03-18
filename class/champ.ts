export class Champ {
    public tailles = new class taille {
        public longueur = 2;
        public largeur = 2;
        public parcellesPleine = this.longueur * this.largeur;
    }
    public parcellesVide = 0;
    public typeDeBle = "Blé";
    public futurTypeDeBle = [
        "Blé orange",
        "Blé banane",
        "Blé fort",
        "Blé carottes",
        "Blé saucisse",
        "Blé OVNI",
        "Blé intergalactique",
        "Blé cosmique",
        "Blé Bébé"
    ];

    public niveauDuBle = 0;
    public nextLevelBle = 0;
    public prixDuBle = 2;
    public fertiliter = 1;
    public fertiliterTierMax = 36
    public fertiliterTierMaxBool = false
    public tailleTierMax = 200
    public tailleTierMaxBool = false

    public niveauAmeliorationTaille = 0;
    public niveauAmeliorationFertiliter = 0;
    public prixAmeliorationTaille = 10;
    public prixAmeliorationFertiliter = 1000;

    public autoRecolte = false;
    public autoRecolteAcheter = false;
    public autoReplanter = false;
    public autoReplanterAcheter = false;
    public autoVendre = false;
    public autoVendreAcheter = false;

    recolter(retirer: number) {
        if (this.parcellesVide + retirer <= this.tailles.parcellesPleine) {
            this.parcellesVide += retirer;
            return retirer;
        } else {
            const reste = this.tailles.parcellesPleine - this.parcellesVide;
            this.parcellesVide = this.tailles.parcellesPleine;
            return reste;
        }
    }

    augmenterTaille() {
        this.niveauAmeliorationTaille++;
        this.prixAmeliorationTaille = Math.trunc(this.prixAmeliorationTaille*1.5);
        if (this.tailles.largeur <= this.tailles.longueur) {
            this.tailles.largeur++;
        } else {
            this.tailles.longueur++;
        }
        this.tailles.parcellesPleine = this.tailles.longueur * this.tailles.largeur;
        if(this.tailles.parcellesPleine >= this.tailleTierMax){
            this.tailleTierMaxBool = true
        }
    }

    augmenterLaFertiliter() {
        this.niveauAmeliorationFertiliter++;
        this.fertiliter++;
        this.prixAmeliorationFertiliter = Math.trunc(this.prixAmeliorationFertiliter*1.8);
        this.changerLeTypeDeBle();
        if(this.fertiliter >= this.fertiliterTierMax){
            this.fertiliterTierMaxBool = true
        }
    }

    replanter(deCbm: number) {
        this.parcellesVide -= deCbm;
    }

    changerLeTypeDeBle() {
        if (this.fertiliter === this.nextLevelBle + 4 && this.niveauDuBle < this.futurTypeDeBle.length) {
            this.nextLevelBle += 4;
            this.typeDeBle = this.futurTypeDeBle[this.niveauDuBle];
            this.niveauDuBle++;
            this.prixDuBle *= 2;
        }
    }
}