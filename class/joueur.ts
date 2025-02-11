export class Joueur {
    name = ""
    monaie = 0
    sacAdos = ""
    outil = ""
    xp = 0
    xpPass = 100
    niveau = 0
    niveauPass = 10

    constructor(name :string, monaie :number, niveau :number, xp :number){
        this.name = name
        this.niveau = niveau
        this.xp = xp
        this.monaie = monaie
    }

    mettreUnNom(nom :string){
        this.name = nom
    }
    augmenterXp(deCbm :number){
        this.xp += deCbm
        if (this.xp >= this.xpPass) {
            this.xp -= this.xpPass
            this.niveau += 1
        }
        if (this.niveau = this.niveauPass) {
            this.xpPass *= 10
            this.niveauPass += 10
        }
    }
    modifierLeSacAdos(nouveauSacAdos :string){
        this.sacAdos = nouveauSacAdos
    }
    modifierOutil(nouvelOutil:string){
        this.outil = nouvelOutil
    }
}