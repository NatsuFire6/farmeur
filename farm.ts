import { Champ } from "./class/champ.ts";
import { Joueur } from "./class/joueur.ts";
import { Outil } from "./class/outil.ts";
import { SacAdos } from "./class/sacAdos.ts";

let names 
let changeName
let changeNameBool:boolean
let rep

function zeroNull(phrases :string) {
    do {
        rep = prompt(phrases)
    } while (rep === null);
    return rep
}


do{
    names = zeroNull("\nBonjour voyageur, quel est votre nom ?")
    console.log("Votre nom est \x1b[34m"+names+"\x1b[0m.")
    changeName = zeroNull("Voulez vous le changer ?")
    if(changeName === "oui"){
        changeNameBool = true
    }else{
        changeNameBool = false
    }
}while (changeNameBool)

console.log("Votre nom est \x1b[34m"+names+"\x1b[0m !\n")

const sacAdoss = new SacAdos("tout petit sac",1,1,1);
const champs = new Champ("Blé", 2, 2, 1);
const outils = new Outil("mains",1);

const joueurs = new Joueur(names,0,0,0);
joueurs.sacAdos = sacAdoss.Nom
joueurs.outil = outils.Nom

jeu(zeroNull("\nPour jouer veillez entrer ce que vous voulez faire :\nAfficher des \x1b[34minfos\x1b[0m : 1\n\x1b[34mFarmer\x1b[0m : 2\n\x1b[34mVendre\x1b[0m : 3\n\x1b[34mReplanter\x1b[0m : 4\n"))

function jeu(faire:number|string){
    if(faire == 1 || faire === "infos"){
        console.log(`votre profile :\n\x1b[34mNom\x1b[0m : ${joueurs.name}\n\x1b[34mArgent\x1b[0m : ${joueurs.monaie}\n\x1b[34mBlé\x1b[0m : ${sacAdoss.remplissement}/${sacAdoss.tailles.stockage}\n\x1b[34mNiveau\x1b[0m : ${joueurs.niveau} (${joueurs.xp}/100xp)\n\x1b[34mEquipements\x1b[0m : ${sacAdoss.Nom}, ${outils.Nom}`)
    }
    else if(faire == 2 || faire === "farmer"){
        if(sacAdoss.remplissement < sacAdoss.tailles.stockage && champs.parcellesVide < champs.tailles.parcellesPleine){
            let recolte
            if(sacAdoss.ajouter(recolte = champs.recolter(outils.tailleDeLaRecolte))){
                joueurs.augmenterXp(recolte)
                console.log(("\x1b[32m\nVous avez récolté "+recolte+" blés !\net pris "+recolte+" xp !\x1b[0m"))
            }
        }else{
            console.log(`\x1b[31mVous ne pouvez pas farmer pour l'instant\x1b[0m, \n\x1b[34msac a dos\x1b[0m : ${sacAdoss.remplissement}/${sacAdoss.tailles.stockage}\n\x1b[34mchamp\x1b[0m : ${champs.tailles.parcellesPleine - champs.parcellesVide}/${champs.tailles.parcellesPleine}`)
        }
    }
    else if(faire == 3 || faire === "vendre"){
        if(sacAdoss.remplissement > 0){
            const ventes = sacAdoss.vider()
            joueurs.augmenterLaMonaie(ventes*champs.niveauDeBle)
            console.log(`\x1b[32mVous venez de vendre ${ventes} blés pour ${ventes*champs.niveauDeBle}€\x1b[0m`)
        }else{
            console.log("\x1b[31mVous n'avez rien à vendre !\x1b[0m")
        }
    }
    else if(faire == 4 || faire === "replanter"){
        if(joueurs.monaie >= champs.parcellesVide && champs.parcellesVide > 0){
            joueurs.monaie -= champs.parcellesVide
            const tempParcelles = champs.parcellesVide
            const fert = champs.replanter(champs.parcellesVide)
            console.log(`\x1b[32mVous venez de replanter ${tempParcelles} parcelles\x1b[0m pour\x1b[31m ${tempParcelles}€ et -${fert} de fertiliter\x1b[0m`)
        }
        else if(champs.parcellesVide > 0 && joueurs.monaie > 0){
            const tempParcelles = champs.parcellesVide
            const fert = champs.replanter(joueurs.monaie)
            console.log(`\x1b[32mVous venez de replanter ${joueurs.monaie} des ${tempParcelles} parcelles vides pour\x1b[31m ${joueurs.monaie}€ et -${fert} de fertiliter\x1b[0m`)
            joueurs.monaie -= champs.parcellesVide
        }
        else{
            console.log("\x1b[31mVous n'avez pas besoin de replanter ou n'avez pas assez d'argent !\x1b[0m")
        }
    }else{
        console.log("\x1b[2J\x1b[H\x1b[96mVeuillez entrer quelque chose de correcte !\x1b[0m")
    }
    return jeu(zeroNull("\nPour jouer veillez entrer ce que vous voulez faire :\nAfficher des \x1b[34minfos\x1b[0m : 1\n\x1b[34mFarmer\x1b[0m : 2\n\x1b[34mVendre\x1b[0m : 3\n\x1b[34mReplanter\x1b[0m : 4\n"))
}

