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

    public niveauAmeliorationTaille = 1;
    public niveauAmeliorationFertiliter = 1;
    public prixAmeliorationTaille = 10;
    public prixAmeliorationFertiliter = 10;

    public autoRecolte = false;
    public autoRecolteAcheter = false;
    public autoReplanter = false;
    public autoReplanterAcheter = false;
    public autoVendre = false;
    public autoVendreAcheter = false;

    constructor() {};

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
        // Nouvelle formule pour le prix d'amélioration de la taille
        this.prixAmeliorationTaille = Math.round(10 * Math.pow(1.1, this.niveauAmeliorationTaille))*100;
        this.niveauAmeliorationTaille++;
        if (this.tailles.largeur <= this.tailles.longueur) {
            this.tailles.largeur++;
        } else {
            this.tailles.longueur++;
        }
        this.tailles.parcellesPleine = this.tailles.longueur * this.tailles.largeur;
    }

    augmenterLaFertiliter() {
            this.prixAmeliorationFertiliter = this.prixFertilite(this.fertiliter)
            this.fertiliter++;
            this.changerLeTypeDeBle();
    }

    private prixFertilite(niveau: number): number {
        if (niveau <= 3) {
            return 10 * (2 ** (niveau - 1));
        } else if (niveau <= 8) {
            return 50 * (2 ** (niveau - 4));
        } else {
            return 1000 * (2 ** (niveau - 8));
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