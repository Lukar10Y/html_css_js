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

const Cartas = sectionCartas.children;

for(element of Cartas){
    element.addEventListener(`click`,function marcarComoSeleccionado(e){
        let containerCarta;
        if(e.target.classList.contains(`article-carta`)) containerCarta = e.target;
        else containerCarta = e.target.parentElement;
            if(containerCarta.classList.contains(`seleccionado`)){
                containerCarta.classList.remove(`seleccionado`);
                for(compra of ElementosLista){
                    if(containerCarta.textContent.includes(compra.id)) Lista.removeChild(compra);
                }
            }
            else{
                containerCarta.classList.add(`seleccionado`);
                for(child of containerCarta.children){
                    if(child.className==`codigo`){
                        const elementoCompra = document.createElement(`LI`);
                        elementoCompra.setAttribute(`id`,`${child.textContent}`);
                        elementoCompra.textContent+=`${containerCarta.title}, Codigo: ${child.textContent}`;
                        Lista.appendChild(elementoCompra);
                    }
                }
            }
        if(ElementosLista.length>0) ContainerLista.classList.remove(`none`);
        else ContainerLista.classList.add(`none`);
    })
}

const botonParaComprar = document.querySelector(`.botonCompra`);

botonParaComprar.addEventListener(`click`,function(e){
    const modalHTML=document.querySelector(`.modal`);
    const modalContainer=document.createElement('DIV');
    modalContainer.classList.add(`containerModalCompra`);
    const resultado=document.createElement(`P`);
    resultado.textContent=`Compra realizada exitosamente`;
    resultado.classList.add(`modalItem`);
    const modalBackground=document.createElement(`DIV`);
    modalBackground.classList.add(`modalBackground`);
    const mensajeNodal=document.createElement(`P`);
    mensajeNodal.textContent=`Haga click en cualquier lugar para continuar`;
    mensajeNodal.classList.add(`mensajeNodal`);
    modalBackground.appendChild(mensajeNodal);
    modalContainer.appendChild(resultado);
    modalHTML.appendChild(modalContainer);
    modalHTML.appendChild(modalBackground);
    modalContainer.addEventListener(`click`,function(e){
        modalHTML.removeChild(modalContainer);
        modalHTML.removeChild(modalBackground);
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
});

const barsResponsive = document.querySelector(`.containerNavResponsive`);
const menuResponsive = document.querySelector(`.navResponsive`);

barsResponsive.addEventListener(`click`,function deslizarMenu(e){
    if(menuResponsive.classList.contains(`responsive2`)) 
    menuResponsive.classList.remove(`responsive2`);
    else menuResponsive.classList.add(`responsive2`);
})