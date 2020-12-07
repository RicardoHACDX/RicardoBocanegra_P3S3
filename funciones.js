function Usuario(nombre, correo, edad, comentario){
    this.nombre=nombre;
    this.correo=correo;
    this.edad=edad;
    this.comentario=comentario;
}

const usuario1 = new Usuario("Alan","A12@correo.com",22,"Increible");
const usuario2 = new Usuario("Flor","F13@correo.com",21,"Perfecta");
const usuario3 = new Usuario("Erika","E35@correo.com",27,"Empoderada");
const datos = [usuario1, usuario2, usuario3]
console.table(datos)
datos.forEach(dato=>{
    console.log(`********** Datos de Usuario ${dato.nombre} **********`)
    for(propiedad in dato){
         console.log(dato[propiedad])
    }
})