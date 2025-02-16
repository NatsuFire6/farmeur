export class SacAdos{
    tailles = new class taille{
        hauteur = 1
        longueur = 1
        largeur = 1
        stockage = this.hauteur * this.longueur * this.largeur
    }
    remplissement = 0
    Nom = ""
    prixAmelioration = 10
    niveau = 1

    constructor(nom :string, longueur :number, largeur :number, hauteur :number){
        this.Nom = nom
        this.tailles.hauteur = hauteur
        this.tailles.largeur = largeur
        this.tailles.longueur = longueur
    }

    ajouter(deCbm :number){
        if(this.remplissement + deCbm <= this.tailles.stockage){
            this.remplissement += deCbm
            return true
        }else{
            const reste = this.tailles.stockage - this.remplissement
            this.remplissement = this.tailles.stockage
            console.log("\x1b[31mVous n'avez pus récolter que "+reste+" blé(s) !\nVotre "+this.Nom+" est plein !\x1b[0m")
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