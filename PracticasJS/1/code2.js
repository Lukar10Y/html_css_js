//PRACTICA CLASES

class Celular{
    constructor(color,peso,resolucion,camara,ram){
        this.color = color;
        this.peso = peso;
        this.resolucion = resolucion;
        this.camara = camara;
        this.ram = ram;
        this.EncendidoApagado = false;
        this.video = false;
    }
    info(){
        return `Color: ${this.color}<br>
        Peso: ${this.peso}<br>
        Resolucion: ${this.resolucion}<br>
        Camara: ${this.camara}<br>
        Ram: ${this.ram}<br>`
    }
    EncenderApagar(){
        if(this.EncendidoApagado == false){
            this.EncendidoApagado = true;
            alert(`El celular se encendio`);
        }
        else{ 
            this.EncendidoApagado = false;
            alert(`El celular se apago`);
        }
    }
    reiniciar(){
        if(this.EncendidoApagado == true){
            alert(`Reiniciando`);
        }
        else alert(`El celular esta apagado`);
    }
    tomarFoto(){
        alert(`Se tomo una foto`);
    }
    grabarVideo(){
        if(this.video == false){
            alert(`Se empezo a grabar un video`);
            this.video = true;
        }
        else{
            alert(`Finalizo la grabacion`);
            this.video = false;
        }
    }
    set modificarColor(newColor){
        this.color = newColor;
    }
}

class altaGama extends Celular{
    constructor(color,peso,resolucion,camara,ram,camaraExtra){
        super(color,peso,resolucion,camara,ram);
        this.camaraExtra = camaraExtra;
    }
    videoLento(){
        if(this.video == false){
            alert(`Se empezo a grabar un video Lento`);
            this.video = true;
        }
        else{
            alert(`Finalizo la grabacion Lenta`);
            this.video = false;
        }
    }
    reconocimientoFacial(){
        alert(`Realizando Reconocimiento Facial`);
    }
}

const celular1 = new Celular(`negro`, 125, `hd`, 48, 4);
document.write(celular1.info());

const celular2 = new altaGama(`blanco`,200,`4K`,128,8,32);
document.write(celular2.info());
celular2.videoLento();
celular2.videoLento();

celular1.modificarColor=prompt(`Nuevo Color:`);
document.write(celular1.info());