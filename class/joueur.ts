export class Joueur {
    name = ""
    monaie = 0
    sacAdos = ""
    outil = ""
    xp = 0
    niveau = 0

    constructor(name :string, monaie :number, niveau :number, xp :number){
        this.name = name
        this.niveau = niveau
        this.xp = xp
        this.monaie = monaie
    }

    mettreUnNom(nom :string){
        name = nom
    }
    augmenterXp(deCbm :number){
        this.xp += deCbm
        if (this.xp >= 100) {
            this.xp -= 100
            this.niveau += 1
        }
    }
    augmenterLaMonaie(deCbm :number){
        this.monaie += deCbm
    }
    modifierLeSacAdos(nouveauSacAdos :string){
        this.sacAdos = nouveauSacAdos
    }
    modifierOutil(nouvelOutil:string){
        this.outil = nouvelOutil
    }
}