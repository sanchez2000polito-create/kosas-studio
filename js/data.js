let usuarios = [
    {
        id: "Id1",
        nombre: "Admin",
        correo: "correp@correo.com",
        telefono: "1234567890",
        clave: "123456"
    },
    {
        id: "Id2",
        nombre: "Alex Sanchez",
        correo: "usuario@correo.com",
        telefono: "0987654321",
        clave: "654321"
    }
]

export function buscarUsuario(correo, clave){
   let auth = usuarios.find((usuario)=> correo == usuario.correo && clave == usuario.clave)
   return auth;
}

export function registrarUsuario(){

}