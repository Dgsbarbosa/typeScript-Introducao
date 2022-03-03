interface IUsuario {
    id: string;
    email: string
}

interface IAdmin extends IUsuario{
    cargo: 'gerente' | 'coredenador' | 'supervisor'

}

function redirecione (usuario: IUsuario | IAdmin){
    if ('cargo' in usuario){
        //redireciona para adm
    }
    // redireciona para area de usuario
}