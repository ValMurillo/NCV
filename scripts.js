function Sumar (){
    var num1 = document.getElementById("N1").value;
    var num2 = document.getElementById("N2").value;
    var resultado = parseInt(num1) + parseInt(num2);
    alert("la suma de los números es: "+resultado);
}

function Resta(){
    var num1 = document.getElementById("N1").value;
    var num2 = document.getElementById("N2").value;
    var resultado = parseInt(num1-num2);
    alert("la resta de los números es de: "+resultado);
}

function División(){
    var num1 = document.getElementById("N1").value;
    var num2 = document.getElementById("N2").value;
    var resultado = parseInt(num1/num2);
    alert("la división de los números es de: "+resultado);
}

function Multiplicar(){
    var num1 = document.getElementById("N1").value;
    var num2 = document.getElementById("N2").value;
    var resultado = parseInt(num1*num2);
    alert("la multiplicación de los números es de: "+resultado);
}

function ver(){
    var dato = document.getElementById("Materia").value;

    switch (dato) {
        case "Programación":
            alert("Usted a seleccionado Programación");
            break;
        case "Soporte TI":
            alert("Usted a seleccionado Soporte TI");
            break;
        case "TICS":
            alert("Usted a seleccionado TICS");
            break;
        case "Diseño de software":
            alert("Usted a seleccionado Diseño de software");
            break;
        
    
        default:
            break;
    }
}

function calcular(){
    var Edad = document.getElementById("Edad").value;
    if (Edad>=18){
    alert("la persona es mayor de edad");
    }
    else{
     alert("la persona es menor de edad");
    }
}
