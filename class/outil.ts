export class Outil {
    Nom = ""
    tailleDeLaRecolte = 1
    prixAmelioration = 10

    constructor(nom :string, tailleDeLaRecolte :number){
        this.Nom = nom
        this.tailleDeLaRecolte = tailleDeLaRecolte
    }

    augmenterLaTailleDeLaRecolte(deCbm :number){
        this.tailleDeLaRecolte += deCbm
        this.prixAmelioration *= 2 
    }
}