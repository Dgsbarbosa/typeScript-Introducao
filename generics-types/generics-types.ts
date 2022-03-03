// metodo sem usar o generic types

function adicionaApendiceALista(array, valor ){
    return array.map(item => item + valor);
}
// passando o mouse por cima nota-se que o array retorna any e o valor tambem:
adicionaApendiceALista ([1, 2 ,3], 1) 

// Com metodo Generico

function adicionaApendiceALista2<NaoSei>(array: any[], valor: NaoSei ){
    return array.map(item => item + valor);
}
// passando o mouse por cima nota-se que dentro do diamante ele proprio aferiu um tipo para a funcao e para o valor :
adicionaApendiceALista2 ([1, 2 ,3], 1) 

// Com String

function adicionaApendiceALista3<T>(array: any[], valor: T ){
    return array.map(item => item + valor);
}
// passando o mouse por cima nota-se que ele definiu um string:
adicionaApendiceALista3 (['A','B', 'C'], 'd') 



