export class SacAdos{
    public tailles = new class taille{
        public hauteur = 1
        public longueur = 1
        public largeur = 1
        public stockage = this.hauteur * this.longueur * this.largeur
    }
    public remplissement = 0
    public Nom = "Tout petit sac"
    public prixAmelioration = 10
    public niveau = 1

    constructor(){}

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
        this.prixAmelioration *= 1 + Math.ceil(Math.sqrt(this.niveau))
        if(this.tailles.largeur <= this.tailles.hauteur && this.tailles.largeur <= this.tailles.longueur){
            this.tailles.largeur++
        }else if(this.tailles.longueur <= this.tailles.hauteur && this.tailles.longueur <= this.tailles.largeur){
            this.tailles.longueur++
        }else if(this.tailles.hauteur <= this.tailles.largeur && this.tailles.hauteur <= this.tailles.longueur){
            this.tailles.hauteur++
        }
    }
}