interface IUsuario1 {
    id: string;
    email: string
    cargo?: 'gerente' | 'coredenador' | 'supervisor' | 'funcionario';
}

function redirecione2(usuario1: IUsuario1) {
    if (usuario1.cargo) {
        //redireciona para (usuario1.cargo)
    }
    // redireciona para area de usuario
}