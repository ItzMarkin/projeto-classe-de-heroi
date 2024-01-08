//Escrevendo a classe de um herói
class hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;

    }
    
    atacar() {
        let ataque
        
        if (this.tipo === "Guerreiro") {
            ataque = "espada"
        } else if (this.tipo === "Mago") {
            ataque = "magia"
        } else if (this.tipo === "Monge") {
            ataque = "punhos"
        } else if (this.tipo === "Ninja") {
            ataque = "shuriken"
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}
let warrior = new hero("Aragorn", "37", "Guerreiro")
let wizard = new hero("Gandalf", "68", "Mago")
let monk = new hero("Wong", "54", "Monge")
let ninja = new hero("Kakashi", "30", "Ninja") 
warrior.atacar()
wizard.atacar()
monk.atacar()
ninja.atacar()