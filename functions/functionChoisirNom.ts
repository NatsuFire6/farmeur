import { zeroNull } from "../farm.ts";

let names 
let changeName
let changeNameBool:boolean

export function functionChoisirNom(){
    do{
        names = zeroNull("\nBonjour voyageur, quel est votre nom ?")
        console.log("Votre nom est \x1b[34m"+names+"\x1b[0m.")
        changeName = zeroNull("Voulez vous le changer ?")
        if(changeName.toLowerCase() === "oui"){
            changeNameBool = true
        }else if (changeName.toLowerCase() === "non"){
            changeNameBool = false
        }else{
            console.log("\n\x1b[96mVeuillez entrer oui ou non !\x1b[0m")
            functionChoisirNom()
        }
    }while (changeNameBool)
    console.log("Votre nom est \x1b[34m"+names+"\x1b[0m !\n")
    return names
}