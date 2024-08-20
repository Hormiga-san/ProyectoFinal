export class Usuario{		
    constructor(rut,nombre, apellido, user, password){
        this.rut = rut;
        this.nombre = nombre;
        this.apellido = apellido;
        this.user = user;
        this.password = password;
    };
    
    getUser(){
        return this.user;
    }
    
    setUser(user){
        this.user = user;
    }

    getPassword(){
        return this.password;
    }
    
    setPassword(password){
        this.password = password;
    }

    getRut(){
       return this.rut;
    };
    
    setRut(rut){
      this.rut = rut;
    };
    
    getNombre(){
       return this.nombre;
    };
    
    setNombre(nombre){
       this.nombre = nombre;
    };
    
    getApellido(){
       return this.apellido;
    };
    
    setApellido(apellido){
       this.apellido=apellido;
    };
    
    toString(){
       return this.user;
    };

};
