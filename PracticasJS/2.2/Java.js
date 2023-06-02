const sectionCartas = document.querySelector(`.div-cartas`);
const Lista = document.querySelector(`.Compras`);
const ElementosLista = Lista.children;
const ContainerLista = Lista.parentElement;
const fragmentoCartas = document.createDocumentFragment();

const cantidadCartas = Math.round(Math.random()*20+2);
let numGanador;

class Card{
    constructor(indice,numWinner,simboloName,logo){
        this.indice = `<h4>Carta #${indice}</h4>`;
        this.numWinner = `<p class="codigo">${numWinner}</p>`;
        this.simboloName = simboloName;
        this.logo = `<img class="trebol" title="${simboloName} de la Suerte" src="${logo}">`;
    }
}

for(i=1;i<=cantidadCartas;i++){
    const carta = document.createElement(`ARTICLE`);
    carta.setAttribute(`class`,`article-carta`);
    carta.title=`Boleto ${i}`;
    numGanador = Math.round(Math.random()*5000);
    const content = new Card (i,numGanador,`Trebol`,`https://images.vexels.com/media/users/3/213252/isolated/preview/ff6e5e5399e5afdbb75c510c8810e20c-tr-eacute-bol-de-cuatro-hojas-dibujado-by-vexels.png`);
    carta.innerHTML = content.indice + content.numWinner + content.logo;
    fragmentoCartas.appendChild(carta);
}
sectionCartas.appendChild(fragmentoCartas);

const seleccionDeCadaCarta = sectionCartas.children;

for(carta of seleccionDeCadaCarta){
    carta.addEventListener(`click`,function marcarComoSeleccionado(e){
        let carta;
        if(e.target.classList.contains(`article-carta`)) carta = e.target;
        else carta = e.target.parentElement;
            if(carta.classList.contains(`seleccionado`)){
                carta.classList.remove(`seleccionado`);
                for(child of carta.children){
                    if(child.classList.contains(`codigo`)){
                        for(compra of ElementosLista){
                            if(compra.id==child.textContent) Lista.removeChild(compra);
                        }
                    }
                }
            }
            else{
                carta.classList.add(`seleccionado`);
                for(child of carta.children){
                    if(child.classList.contains(`codigo`)){
                        const elementoCompra = document.createElement(`LI`);
                        elementoCompra.setAttribute(`id`,`${child.textContent}`);
                        elementoCompra.textContent+=`${carta.title}, Codigo: ${child.textContent}`;
                        Lista.appendChild(elementoCompra);
                    }
                }
            }
        if(ElementosLista.length>0) ContainerLista.classList.remove(`none`);
        else ContainerLista.classList.add(`none`);
    })
}

const botonParaComprar = document.querySelector(`.botonCompra`);
const modalBackground = document.querySelector(`.modalBackground`);
const modalContainerItems = document.querySelector(`.containerModalCompra`)

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
    codigosCartas.forEach(function(CodigoCarta){
        for(Item of ElementosLista){
            if(CodigoCarta.textContent==Item.id){
                sectionCartas.removeChild(CodigoCarta.parentElement);
                Lista.removeChild(Item);
            }
        }
    });
    ContainerLista.classList.add(`none`);
});

const barsResponsive = document.querySelector(`.containerNavResponsive`);
const menuResponsive = document.querySelector(`.navResponsive`);

barsResponsive.addEventListener(`click`,function deslizarMenu(e){
    if(menuResponsive.classList.contains(`responsive2`)) 
    menuResponsive.classList.remove(`responsive2`);
    else menuResponsive.classList.add(`responsive2`);
})