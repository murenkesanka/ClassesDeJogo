// função de ataque com switch case separado por tipo
function attack(){
    switch (champion.type) {
        case "feiticeira":
            console.log(champion.name + " matou o inimigo usando feitiço de fogo! com isso ganhou + 79.870 de Xp!")
            break;
        case "mago":
            console.log(champion.name + " matou o inimigo usando magia de gelo! com isso ganhou + 79.870 de Xp!")
            break;
        case "ladino":
            console.log(champion.name + " assassinou o inimigo furtivamente! com isso ganhou + 79.870 de Xp!")
            break;
        case "guerreiro":
            console.log(champion.name + " brandiu sua espada contra o inimigo! com isso ganhou + 79.870 de Xp!")
            break;
        case "monge":
            console.log(champion.name + " usou suas artes marciais matou o inimigo! com isso ganhou + 79.870 de Xp!")
            break;
        case "ninja":
            console.log(champion.name + " diante das sombras... um inimigo morre pela sua shuriken! com isso ganhou + 79.870 de Xp!")
            break;
        case "paladino":
            console.log(champion.name + " com suas preces derrubou o demonio! com isso ganhou + 79.870 de Xp!")
            break;
        default: 
            console.log("Você não atacou")
            break;
    }
}
// classe para salvar uma ficha de herói
class hero{
    constructor(name, age, race,type,level){
        this.name = name
        this.age = age 
        this.race = race
        this.type = type
        this.level = level
    }
}
// declaração de valores para a classe
let champion = new hero("Frieren" ,"68 anos", "elfa", "ladino", "level 58")

//História mais valor de ataque
console.log (`
    Uma nova heroína aparece na vila, seu nome era ${champion.name}... Aparentemente uma ${champion.race} jovem de ${champion.age} no ${champion.level}, ela veio até nós nos ajudar contra um
    inimigo pelas redondezas, ela sendo uma ${champion.type} irá de certeza nos proteger
    `)
attack()