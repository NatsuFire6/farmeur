export class Outil {
    public Nom = ""
    public tailleDeLaRecolte = 1
    public prixAmelioration = 10

    constructor(nom :string, tailleDeLaRecolte :number){
        this.Nom = nom
        this.tailleDeLaRecolte = tailleDeLaRecolte
    }

    augmenterLaTailleDeLaRecolte(){
        this.tailleDeLaRecolte++
        this.prixAmelioration *= 4
    }
}