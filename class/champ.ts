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
        this.prixAmeliorationTaille = this.prixTaille(this.niveauAmeliorationTaille)
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
        this.fertiliter++;
        this.prixAmeliorationFertiliter = this.prixFertilite(this.fertiliter)
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

    private prixTaille(niveau :number) :number {
        switch (niveau) {
            case 1: return 20;
            case 2: return 60;
            case 3: return 120;
            case 4: return 240; // Augmentation plus importante
            case 5: return 400;
            case 6: return 600;
            case 7: return 800;
            case 8: return 1200; // Augmentation plus importante
            case 9: return 1600;
            case 10: return 2000;
            case 11: return 2400;
            case 12: return 3000; // Augmentation plus importante
            case 13: return 3800;
            case 14: return 4600;
            case 15: return 5400;
            case 16: return 6400; // Augmentation plus importante
            case 17: return 7800;
            case 18: return 9200;
            case 19: return 10600;
            case 20: return 12000; // Augmentation plus importante
            case 21: return 14000;
            case 22: return 16000;
            case 23: return 18000;
            case 24: return 21000; // Augmentation plus importante
            case 25: return 24000;
            case 26: return 27000;
            case 27: return 30000;
            case 28: return 34000; // Augmentation plus importante
            case 29: return 38000;
            case 30: return 42000;
            case 31: return 45000;
            case 32: return 48000; // Augmentation plus importante
            case 33: return 49500;
            case 34: return 50500;
            case 35: return 51500;
            case 36: return 53000; // Augmentation plus importante
            default: return -1; // Limite maximale
        }
    }
    private prixFertilite(niveau: number): number {
        switch (niveau) {
            case 1: return 10;
            case 2: return 20;
            case 3: return 40;
            case 4: return 50; // Nouveau blé
            case 5: return 100;
            case 6: return 500;
            case 7: return 1000;
            case 8: return 3000; // Nouveau blé
            case 9: return 10000;
            case 10: return 15000;
            case 11: return 20000;
            case 12: return 30000; // Nouveau blé
            case 13: return 35000;
            case 14: return 39000;
            case 15: return 42000;
            case 16: return 44000; // Nouveau blé
            case 17: return 49000;
            case 18: return 53000;
            case 19: return 56000;
            case 20: return 58000; // Nouveau blé
            case 21: return 65000;
            case 22: return 69000;
            case 23: return 72000;
            case 24: return 74000; // Nouveau blé
            case 25: return 80000;
            case 26: return 84000;
            case 27: return 87000;
            case 28: return 89000; // Nouveau blé
            case 29: return 95000;
            case 30: return 99000;
            case 31: return 102000;
            case 32: return 104000; // Nouveau blé
            case 33: return 110000;
            case 34: return 114000;
            case 35: return 117000;
            case 36: return 119000; // Nouveau blé
            default: return -1; // Limite maximale
        }
    }
    
    /*
    function prixFertilite(niveau: number): number {
        if (niveau <= 3) {
            return 10 * (2 ** (niveau - 1));
        } else if (niveau <= 8) {
            return 50 * (2 ** (niveau - 4));
        } else {
            return 1000 * (2 ** (niveau - 8));
        }
    }
    ou
    Math.round(10 * Math.pow(1.1, this.niveauAmeliorationFertiliter)); //augmente le prix de 1 disième à chaque fois
    */
}