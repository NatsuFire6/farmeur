export class SacAdos{
    public tailles = new class taille{
        public hauteur = 1
        public longueur = 1
        public largeur = 1
        public stockage = this.hauteur * this.longueur * this.largeur
        tailleMax = 2548
    }
    public remplissement = 0
    public Nom = "Tout petit sac"
    public futurNom = [
        "Petit sac",
        "Sac moyen",
        "Grand sac",
        "Sac de montagne",
        "Sac de l'Everest",
        "Sac de l'espace"
    ]
    public prixAmelioration = 10
    public niveau = 1
    public niveauName = 1

    ajouter(deCbm :number){
        if(this.remplissement + deCbm <= this.tailles.stockage){
            this.remplissement += deCbm
            return true
        }else{
            this.remplissement = this.tailles.stockage
            return false
        }
    }
    vider(){
        const vente = this.remplissement
        this.remplissement = 0
        return vente
    }
    augmenterStockage(){
        this.prixAmelioration = Math.trunc(this.prixAmelioration*1.65)
        this.niveau++
        if(this.tailles.largeur <= this.tailles.hauteur && this.tailles.largeur <= this.tailles.longueur){
            this.tailles.largeur++
        }else if(this.tailles.longueur <= this.tailles.hauteur && this.tailles.longueur <= this.tailles.largeur){
            this.tailles.longueur++
        }else if(this.tailles.hauteur <= this.tailles.largeur && this.tailles.hauteur <= this.tailles.longueur){
            this.tailles.hauteur++
        }
        this.changerNom()
    }

    changerNom(){
        if(this.niveauName - 1 < this.futurNom.length && this.niveau >= this.niveauName * 6){
            this.Nom = this.futurNom[this.niveauName - 1]
            this.niveauName++
        }
    }
}