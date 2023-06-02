let arreglo = [`Daniel`,`Daniela`,`Yo`];

nuevoArreglo=arreglo.toString();

document.write(`${nuevoArreglo[0]}<br>`);
document.write(nuevoArreglo);

let Titulo = document.getElementById("Titulo");
Titulo.setAttribute(`contenteditable`,`true`);
Titulo.style.color=`rgb(100,150,170)`;

const divpadre = document.querySelector(`.div`);

const div2 = divpadre.childNodes;
const div3 = divpadre.children;

console.log(div2);
console.log(div3);

div2.forEach(function element(contenido){
   document.write(contenido.textContent + `<br>`);
});

for(cont of div3){
    document.write(cont.textContent + `<br>`);
}