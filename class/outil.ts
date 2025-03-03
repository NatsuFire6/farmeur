export class Outil {
    public Nom = "Mains"
    public Material = "Chair"
    public tailleDeLaRecolte = 1
    public prixAmeliorationTaille = 10
    public prixAmeliorationMateriaux = 10
    public nextLevelMateriaux = 0
    public niveauMateriaux = 0
    public niveauOutil = 0
    public futurOutil = ["Fauscille", "tracteur", "laser", "robot"]
    public futurMateriaux = ["Bois", "Pierre", "Fer", "Diamant"]

    constructor(){}

    augmenterLaTailleDeLaRecolte(){
        this.tailleDeLaRecolte++
        this.prixAmeliorationTaille *= 2
    }
    ameliorerLeMateriaux(){
        this.prixAmeliorationMateriaux *= 4
        if(this.Nom ==="Mains"){
            this.Nom = this.futurOutil[this.niveauOutil]
            this.niveauOutil++
            this.Material = this.futurMateriaux[this.niveauMateriaux]
            this.niveauMateriaux++
            this.nextLevelMateriaux += 2
        }else if((this.niveauMateriaux == this.futurMateriaux.length && this.niveauOutil < this.futurOutil.length)){
            this.Nom = this.futurOutil[this.niveauOutil]
            this.niveauOutil++
            this.niveauMateriaux = 0
            this.nextLevelMateriaux += 2
            this.Material = this.futurMateriaux[this.niveauMateriaux]
        }else if(this.niveauMateriaux < this.futurMateriaux.length){
            this.Material = this.futurMateriaux[this.niveauMateriaux]
            this.niveauMateriaux++
            this.nextLevelMateriaux += 2
        }
    }
}