// CALCULADORA / MATH

function Calculadora(){

    alert(`Que operacion deseas hacer?`);
    decisionOperacion = parseInt(prompt(
    `    1. Suma
    2. Resta
    3. Multiplicacion
    4. Division
    5. Potenciacion
    6. Raiz Cuadrada
    7. Raiz Cubica`));

    if(decisionOperacion<5 && decisionOperacion>0){

        num1=parseInt(prompt(`Primer numero a operar:`));
        num2=parseInt(prompt(`Segundo numero a operar:`));

        if(decisionOperacion==`1`){
            let resultado= num1+num2;
            alert(`Resultado: ${resultado}, Suma realizada exitosamente`);
            return resultado;
        }
    else if(decisionOperacion==`2`){
            let resultado= num1-num2;
            alert(`Resultado: ${resultado}, Resta realizada exitosamente`);
            return resultado;
        }
        else if(decisionOperacion==`3`){
            let resultado= num1*num2;
            alert(`Resultado: ${resultado}, Multiplicacion realizada exitosamente`);
            return resultado;
        }
        else if(decisionOperacion==`4`){
            let resultado= num1/num2;
            alert(`Resultado: ${resultado}, Division realizada exitosamente`);
            return resultado;
        }
    }
    else if(decisionOperacion<8 && decisionOperacion>4){
        if(decisionOperacion==`5`){
            let num=prompt(`Numero a Potenciar:`);
            let exponente=prompt(`Exponente:`);
            let resultado=num**exponente;
            alert(`Resultado: ${resultado}, Potencia realizada exitosamente`);
            return resultado;
        }
        else if(decisionOperacion<8 && decisionOperacion>5){
            let num=prompt(`Numero al cual se le va a sacar Raiz:`);
            if(decisionOperacion==`6`){
                let resultado=Math.sqrt(num);
                alert(`Resultado: ${resultado}, Raiz Cuadrada realizada exitosamente`);
                return resultado;
            }
            else if(decisionOperacion==`7`){
                let resultado=Math.cbrt(num);
                alert(`Resultado: ${resultado}, Raiz Cubica realizada exitosamente`);
                return resultado;
            }
        }
    }
    else alert(`La Opcion que ha escogido no es valida`);
}

resultado=Calculadora();
document.write(resultado);