// crianddo uma interface

interface IAnimal {
    nome: string, // define os parametros para os dados
    tipo: 'terrestre' | 'aquatico'
}

interface IFelino extends IAnimal{
    visaoNoturna: boolean,
}
const animal: IAnimal = {
    nome: 'Elefante',
    tipo: "terrestre"
}

const felino: IFelino = {
    nome: 'Leao',
    tipo: "terrestre",
    visaoNoturna: true,
}