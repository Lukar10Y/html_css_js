const sectionCartas = document.querySelector(`.div-cartas`);
const Selecciones = document.querySelector(`.Compras`);

const fragmentoCartas = document.createDocumentFragment();

let cantidadCartas = Math.round(Math.random()*20+2);

class Card{
    constructor(indice,numWinner,simboloName,logo){
        this.indice = `<h4>Carta #${indice}</h4>`;
        this.numWinner = `<p class="codigo">${numWinner}</p>`;
        this.simboloName = simboloName;
        this.logo = `<img class="trebol" title="${simboloName} de la Suerte" src="${logo}">`;
    }
}

/*for(i=1;i<=cantidadCartas;i++){
    const carta = document.createElement(`ARTICLE`);
    carta.setAttribute(`class`,`article-carta`);
    carta.title=`Boleto ${i}`;

    const trebol = document.createElement(`IMG`);
    trebol.setAttribute(`src`,`https://images.vexels.com/media/users/3/213252/isolated/preview/ff6e5e5399e5afdbb75c510c8810e20c-tr-eacute-bol-de-cuatro-hojas-dibujado-by-vexels.png`);
    trebol.setAttribute(`class`,`trebol`);
    trebol.title=`Logo Simbolo de la Suerte`;

    const h4Carta = document.createElement(`H4`);
    h4Carta.textContent = `Carta #${i}`;

    const codigo = document.createElement(`P`);
    let numGanador = Math.round(Math.random()*5000);
    codigo.textContent = numGanador;

    carta.appendChild(h4Carta);
    carta.appendChild(codigo);
    carta.appendChild(trebol);
    fragmentoCartas.appendChild(carta);
}

sectionCartas.appendChild(fragmentoCartas);*/

for(i=1;i<=cantidadCartas;i++){
    const carta = document.createElement(`ARTICLE`);
    carta.setAttribute(`class`,`article-carta`);
    carta.setAttribute(`tabindex`,i);
    carta.title=`Boleto ${i}`;

    let numGanador = Math.round(Math.random()*5000);
    const content = new Card (i,numGanador,`Trebol`,`https://images.vexels.com/media/users/3/213252/isolated/preview/ff6e5e5399e5afdbb75c510c8810e20c-tr-eacute-bol-de-cuatro-hojas-dibujado-by-vexels.png`);
    carta.innerHTML = content.indice + content.numWinner + content.logo;
    fragmentoCartas.appendChild(carta);
}

sectionCartas.appendChild(fragmentoCartas);

/*const imgsTreboles = document.querySelectorAll(`.trebol`);
console.log(imgsTreboles);

imgsTreboles.forEach(function (item){
    console.log(item);
    item.title=`pololo`;
}); PARA ACCEDER A TODAS LAS IMG Y CAMBIAR SUS TITLES*/

/*const imgsTreboles = document.getElementsByClassName(`trebol`);
console.log(imgsTreboles);

for(items of imgsTreboles){
    console.log(items);
    items.title=`puto`;
};PARA ACCEDER A TODAS LAS IMG Y CAMBIAR SUS TITLES*/

const seleccionDeCadaCarta = sectionCartas.children;
const botonParaComprar = document.querySelector(`.botonCompra`);
const modalBackground = document.querySelector(`.modalBackground`);
const modalContainerItems = document.querySelector(`.containerModalCompra`)

for(carta of seleccionDeCadaCarta){
    carta.addEventListener(`click`,function marcarComoSeleccionado(e){
        if(e.target.classList.contains(`article-carta`)){
            if(e.target.classList.contains(`seleccionado`)){
                e.target.classList.remove(`seleccionado`);
                for(child of e.target.children){
                    if(child.classList.contains(`codigo`)){
                        for(compra of Selecciones.children){
                            if(compra.id==child.textContent){
                                Selecciones.removeChild(compra);
                            }
                        }
                    }
                }
            }
            else{
                e.target.classList.add(`seleccionado`);
                for(child of e.target.children){
                    if(child.classList.contains(`codigo`)){
                        const elementoCompra = document.createElement(`LI`);
                        elementoCompra.setAttribute(`id`,`${child.textContent}`);
                        elementoCompra.textContent+=`${e.target.title}, Codigo: ${child.textContent}`;
                        Selecciones.appendChild(elementoCompra);
                    }
                }
            }
        }
        else{
            if(e.target.parentElement.classList.contains(`seleccionado`)){
                e.target.parentElement.classList.remove(`seleccionado`);
                for(child of e.target.parentElement.children){
                    if(child.classList.contains(`codigo`)){
                        for(compra of Selecciones.children){
                            if(compra.id==child.textContent){
                                Selecciones.removeChild(compra);
                            }
                        }
                    }
                }
            }
            else{
                e.target.parentElement.classList.add(`seleccionado`);
                for(child of e.target.parentElement.children){
                    if(child.classList.contains(`codigo`)){
                        const elementoCompra = document.createElement(`LI`);
                        elementoCompra.setAttribute(`id`,`${child.textContent}`);
                        elementoCompra.innerHTML=`${e.target.parentElement.title}, Codigo: ${child.textContent}`;
                        Selecciones.appendChild(elementoCompra);
                    }
                }
            } 
        }
        if(Selecciones.children.length>0){
            Selecciones.parentElement.classList.remove(`none`);
        }
        else{
            Selecciones.parentElement.classList.add(`none`);
        }
    })
}

botonParaComprar.addEventListener(`click`,function(e){
     const resultado=document.createElement(`P`);
     resultado.textContent=`Compra realizada exitosamente`;
     resultado.classList.add(`modalItem`);
     modalContainerItems.appendChild(resultado);

     modalBackground.classList.remove(`none`);
     modalContainerItems.classList.remove(`none`);
});

modalContainerItems.addEventListener(`click`,function(e){
    modalContainerItems.removeChild(document.querySelector(`.modalItem`));
    modalBackground.classList.add(`none`);
    modalContainerItems.classList.add(`none`);

    const codigosCartas = document.querySelectorAll(`.codigo`);
    const Lista = Selecciones.children;
    codigosCartas.forEach(function(CodigoCarta){
        for(Item of Lista){
            if(CodigoCarta.textContent==Item.id){
                sectionCartas.removeChild(CodigoCarta.parentElement);
                Selecciones.removeChild(Item);
            }
        }
    });
    Selecciones.parentElement.classList.add(`none`);
});

/*window.addEventListener(`resize`,function funcion(e){
    
    if(e.target.innerWidth<800){console.log(`se movio parce`);}
})*/

const barsResponsive = document.querySelector(`.containerNavResponsive`);
const menuResponsive = document.querySelector(`.navResponsive`);

barsResponsive.addEventListener(`click`,function deslizarMenu(e){
    if(menuResponsive.classList.contains(`responsive2`)){
        menuResponsive.classList.remove(`responsive2`);
    }
    else{
        menuResponsive.classList.add(`responsive2`);
    }
})