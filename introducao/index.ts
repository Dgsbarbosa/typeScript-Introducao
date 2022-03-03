// crianddo uma interface

interface IAnimal {
    nome: string, // define os parametros para os dados
    tipo: 'terrestre' | 'aquatico'
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean,
}
interface ICanino extends IAnimal {
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

//criando um type
type IDomestico = IFelino | ICanino

// Tratando a tag input

const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);



});
