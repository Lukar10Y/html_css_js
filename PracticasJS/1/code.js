//PRACTICA BASICA

let Usuario1=[];
let Usuario2=[];
let Usuario3=[];

function sistemaDeRegistro(Usuario){
    Usuario[0]=prompt(`Cual es su nombre?`);
    Usuario[1]=parseInt(prompt(`De cuanto dinero dispone?`));
}

function Datos(Usuario){
    document.write(`Nombre: ${Usuario[0]} <br>
                    Dinero Disponible: ${Usuario[1]} <br><br>`)
}

function sistemaDeCompra(Usuario){

    let heladoAgua=0.6;
    let heladoCrema=1;
    let heladoHeladix=1.6;
    let heladoHeladovich=1.7;
    let heladoHelardo=1.8;
    let heladoConfites=2.9;

    if(Usuario[1]<heladoAgua){
        return alert(`No le alcanza para nada mi pana`);
    }
    else if(Usuario[1]<heladoCrema){
        return alert(`Mi estimado ${Usuario[0]}, el Helado a comprar es el de Agua
El vuelto seria: ` + (Usuario[1] - heladoAgua));
    }
    else if(Usuario[1]<heladoHeladix){
        return alert(`Mi estimado ${Usuario[0]}, el Helado a comprar es el de Crema
El vuelto seria: ` + (Usuario[1] - heladoCrema));
    }
    else if(Usuario[1]<heladoHeladovich){
        return alert(`Mi estimado ${Usuario[0]}, el Helado a comprar es el Heladix
El vuelto seria: ` + (Usuario[1] - heladoHeladix));
    }
    else if(Usuario[1]<heladoHelardo){
        return alert(`Mi estimado ${Usuario[0]}, el Helado a comprar es el Heladovich
El vuelto seria: ` + (Usuario[1] - heladoHeladovich));
    }
    else if(Usuario[1]<heladoConfites){
        return alert(`Mi estimado ${Usuario[0]}, el Helado a comprar es el Helardo
El vuelto seria: ` + (Usuario[1] - heladoHelardo));
    }
    else if(Usuario[1]>=2.9){
        return alert(`Mi estimado ${Usuario[0]}, el Helado a comprar es el Helado con confites o el de 1/4 KG
El vuelto seria: ` + (Usuario[1] - heladoConfites));
    }
}

sistemaDeRegistro(Usuario1);
Datos(Usuario1);
sistemaDeCompra(Usuario1);

/*sistemaDeRegistro(Usuario2);
Datos(Usuario2);
sistemaDeCompra(Usuario2);

sistemaDeRegistro(Usuario3);
Datos(Usuario3);
sistemaDeCompra(Usuario3);*/

let Cuadrado = [];

for(let i=0;i<15;i++){
    let j=0;
    for(j=0;j<30;j++){
        Cuadrado[j]=`*`;
    }
}

for(let i=0;i<15;i++){
    let j=0;
    for(j=0;j<30;j++){
        document.write(Cuadrado[j]);
    }
    document.write(`<br>`);
}

let Pacientes = [];
let Fecha = [];
let Deuda = [];
let registroMedico = [Fecha,Pacientes,Deuda];
var numeroEnLista = 0;

let numeroPacientes = parseInt(prompt(`Numero de Pacientes a registrar?`));

for(let i=0;i<numeroPacientes;i++,numeroEnLista++){

    let guardarFecha = prompt(`Fecha?`);
    let Nombre = prompt(`Nombre?`);
    let Deuda = prompt(`Deuda?`);

    for (let Seccion in registroMedico){
        if(Seccion==0){
            registroMedico[Seccion][numeroEnLista] = guardarFecha;
        }
        else if(Seccion==1){
            registroMedico[Seccion][numeroEnLista] = Nombre;
        }
        else if(Seccion==2){
            registroMedico[Seccion][numeroEnLista] = Deuda;
        }
    }
}

for (let Dato of Pacientes){
    document.write(Dato + `<br>`);
}

for (let Dato of registroMedico){
    document.write(Dato + `<br>`);
}


