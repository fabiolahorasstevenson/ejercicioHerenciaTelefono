class telefono{
    private estaPrendido: boolean;
    private bateriaActual: boolean;

    constructor(pEstaPrendido: boolean, pBateriaActual: boolean){
        this.bateriaActual = pBateriaActual;
        this.estaPrendido = pEstaPrendido;

    }

    public mandarMensaje(pNumeroTelefono: number):void{
        console.log("Mandando mensaje a"+pNumeroTelefono);

    }

    public hacerLlamada(pNumeroTelefono: number):void{
        console.log("Llamando a "+pNumeroTelefono);
    }

    public prenderApagar(){
        if (this.estaPrendido== true){
            this.estaPrendido = false;
        }
        else{
            this.estaPrendido = true;
        }
    }

}

class telefonoConCamara extends telefono{

    constructor(pEstaPrendido: boolean, pBateriaActual: boolean){
        super (pEstaPrendido, pBateriaActual);
    }

    public sacarFotos(){
        console.log("Se ha sacado la foto deseada ");

    }
}

class telefonoConRadio extends telefono{

    private frencuenciaActual : number;
    
    constructor(pEstaPrendido: boolean, pBateriaActual: boolean, pFrecuenciaActual: number){
        super (pEstaPrendido, pBateriaActual);
        this.frencuenciaActual = pFrecuenciaActual;
    }
    public verFrecuenciaActual(){
        return this.frencuenciaActual;
    }
}

let telefono1 = new telefono(true,true);
telefono1.prenderApagar();
let telefonoConCamara1 = new telefonoConCamara(true,true);
let telefonoConRadio1 = new telefonoConRadio(true,false,40);