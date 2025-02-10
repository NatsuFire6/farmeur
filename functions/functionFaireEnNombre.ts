export function zeroNull(phrases :string){
    let rep
    do {
        rep = prompt(phrases)
    } while (rep === null);
    return rep
}

export function functionFaireEnNombre(faire :string) :number{
    faire = zeroNull(faire)
    switch (faire.toLowerCase()) {
        case "0":
            return 0
        case "profile":
        case "outil":
        case "1":
            return 1
        case "farmer":
        case "sac a dos":
        case "2":
            return 2
        case "vendre":
        case "champ" :
        case "3":
            return 3
        case "replanter":
        case "4":
            return 4
        case "améliorer":
        case "5":
            return 5
    }
    return -1
}
