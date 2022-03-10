// Código del cuadrado

console.group("Cuadrados");

//const ladocuadrado = 5;
//console.log("los lados del cuadraro miden: " + ladocuadrado + "cm");

function perimetrocuadrado(lado) {
    return lado * 4;
}

//console.log("El perimetro del cuadraro es: " + perimetrocuadrado + "cm");

function areacuadrado(lado) {
    return lado *lado;
}

//console.log("EL area del cuadraro es: " + areacuadrado + "cm^2");

console.groupEnd();

// Código del triángulo

console.group("Triángulos");
//const ladotriangulo1 = 6;
//const ladotriangulo2 = 6;
//const basetriangulo = 4;


//console.log(
    //"los lados del triangulo miden: " 
    //+ ladotriangulo1 
    //+ "cm, " 
    //+ ladotriangulo2 
    //+ "cm, "
    //+ basetriangulo
    //+ "cm"
    //);    
    
    //const alturatriangulo = 5.5;
    //console.log("La altura del triángulo: " + alturatriangulo + "cm");

    function perimetrotriangulo(lado1, lado2, base) {
        return lado1 + lado2 + base;
    }
    
    //console.log("El perimetro del triángulo es: " + perimetriangulo + "cm");

   function areatriangulo(base, altura) {
       return (base * altura) / 2;
   }
    
   //console.log("EL area del triángulo es: " + areatriangulo + "cm^2");
    
    console.groupEnd();

    // Código del circulo
    console.group("Circulos");

    // Radio
    //const radiocirculo = 4;
    //console.log("El radio del circulo es: " + radiocirculo + "cm");
     

    // Diámetro
    function diametrocirculo(radio) {
        return radio * 2;
    }

    
    // PI
    const PI = Math.PI;
    console.log("PI es: " + PI);

    // Circunferencia
    function perimetrocirculo(radio) {
        const diametro = diametrocirculo(radio);
        return diametro * PI;
    } 
    
    //const perimetrocirculo = diametrocirculo * PI;
    //console.log("La perímetro del circulo es: " + perimetrocirculo + "cm");

    // Radio
    function areacirculo(radio) {
        return (radio * radio) * PI;
    }

    //const areacirculo = (radiocirculo * radiocirculo) * PI;
    //console.log("El área del circulo es: " + areacirculo + "cm^2");

    // Triangulo Isosceles

    function alturatrianguloisosceles (lados, base) {
        const a = lados * lados;
        const b = (base * base) / 4;
        const result = Math.sqrt(a- b);
            return result;
    }

    // Aquí interactuamos con el HTML

    function calcularperimetrocuadrado() {
        const input = document.getElementById("inputcuadrado");
        const value = input.value;

        const perimetro = perimetrocuadrado(value);
        alert(perimetro);
    }

    function calcularareacuadrado() {
        const input = document.getElementById("inputcuadrado");
        const value = input.value;

        const area = areacuadrado(value);
        alert(area);
    }

    function calcularperimetrotriangulo() {
        const input = document.getElementById("inputlado1");
        const value = Number(input.value);
        const input1 = document.getElementById("inputlado2");
        const value1 = Number(input1.value);
        const base = document.getElementById("inputbase");
        const value2 = Number(base.value);

        const perimetro = perimetrotriangulo(value, value1, value2);
        alert(perimetro);
    }
    
    function calcularareatriangulo() {
        const base = document.getElementById("inputbase");
        const value = Number(base.value);
        const altura = document.getElementById("inputaltura");
        const value1 = Number(altura.value);
        
        const area = areatriangulo(value, value1);
        alert(area);
    }

    function calcularalturaisosceles() {
        const input = parseInt(document.getElementById("inputlado1").value);
        const input1 = parseInt(document.getElementById("inputlado2").value);
        const input2 = parseInt(document.getElementById("inputbase").value);

        if (input === input1 && input2 != input && input1) {
            const resultado = alturatrianguloisosceles(input, input2)
            alert("La altura del triángulo isosceles es " + resultado)
        }
        else {
            alert ("Introduce valores de lados iguales para un triángulo isosceles")
        }
        }

    function calcularperimetrocirculo() {
        const input = document.getElementById("inputcirculo");
        const value = input.value;

        const perimetro = perimetrocirculo(value);
        alert(perimetro);
    }


    
    function calcularareacirculo() {
        const input = document.getElementById("inputcirculo");
        const value = input.value;

        const area = areacirculo(value);
        alert(area);
    }
