export class Outil {
    Nom = ""
    tailleDeLaRecolte = 1
    prixAmelioration = 10

    constructor(nom :string, tailleDeLaRecolte :number){
        this.Nom = nom
        this.tailleDeLaRecolte = tailleDeLaRecolte
    }

    augmenterLaTailleDeLaRecolte(){
        this.tailleDeLaRecolte++
        this.prixAmelioration *= 4
    }
}