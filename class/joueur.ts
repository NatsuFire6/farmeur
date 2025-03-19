import { Champ } from "./champ.ts";
import { Outil } from "./outil.ts";
import { SacAdos } from "./sacAdos.ts";

export class Joueur {
    public name = ""
    public monaie = 200000000000000
    public sacAdos :SacAdos = new SacAdos()
    public outil :Outil = new Outil()
    public champ :Champ = new Champ();
    public xp = 0
    public xpPass = 100
    public niveau = 0
    public niveauPass = 10
    public bleRecolter = 0
    public niveauPrestige = 1
    public multiplicateurDePrestige = 1
    public prestigeAchetable = false

    constructor(name :string){
        this.name = name
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
        if (this.niveau === this.niveauPass) {
            this.xpPass *= 10
            this.niveauPass += 10
        }
    }
    modifierLeSacAdos(nouveauSacAdos :SacAdos){
        this.sacAdos = nouveauSacAdos
    }
    modifierOutil(nouvelOutil :Outil){
        this.outil = nouvelOutil
    }
    augmenterBle(deCbm :number){
        this.bleRecolter += deCbm
    }

    
}