let saludo= [`Hola!`,`Bongiorno`,`Good Morning`];
let nombre= [`Maria`,`Juancho`,`Cofla`];
let Secreto= [`Pedo`,`Suerte`,`CoflaMaster`];
let arrayMayor = [saludo,nombre,Secreto];

for(X of arrayMayor){
    for(Y in X){
        if(Y==1){
            X[Y]=`Culo`;
        }
        else if(Y==2){
            X.push(`Culoextra`);
        }
    }
    document.write(`${X}<br>`);
}

arrayMayor.forEach(function(item,index){
    document.write(`<br>Posicion: ${index}, Contenido: ${item}`);
});

let array2=[
    {secreto: 1,pedillo:`polo`},
    {secreto: 2,kola: `kuca`}
];

alert(array2);
alert(array2[0].secreto);

let resultado=array2.find(busqueda=>busqueda.pedillo == `polo`);
console.log(resultado);

let users = [
    {id: 1, name: "Celina"},
    {id: 2, name: "David"},
    {id: 3, name: "Federico"}
  ];
  
  alert(users);
  let user = users.find(item => item.id == 1);
  
  alert(user.name);

  let nums=[2,5,1,9,4,6,11,25,111,14];
  let numsCopia=nums;
  nums.sort();
  document.write(`${nums}<br><br>`);

  for(let i=0; i<numsCopia.length; i++){
    for(let j=0; j<numsCopia.length; j++){
        if(numsCopia[j]>numsCopia[j+1]){
            let respaldo=numsCopia[j];
            numsCopia[j]=numsCopia[j+1];
            numsCopia[j+1]=respaldo;
        }
    }
  }

  document.write(numsCopia);

  let array3=
    {pedillo:`polo`,
    secreto: 2,kola: [`kuca`,`chocha`]}
;

alert(array3);
console.log(array3);
console.log(array3.kola);

for(X in array3){
    console.log(array3[X]);
}