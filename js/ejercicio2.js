let numero


numero = Number(prompt("Ingrese un numero del 1 al 10"));

if (numero >=1 & numero <=10) {

    switch (numero) {
        case 1:
            alert("EL numero romano de " + numero + " es: I " );
            document.getElementById("frase").innerHTML = "EL numero romano de " + numero + " es: I "

            break;
        case 2:
            alert("EL numero romano de " + numero + " es: II " );
            document.getElementById("frase").innerHTML = "EL numero romano de " + numero + " es: II "
    
            break;
        case 3:
            alert("EL numero romano de " + numero + " es: III " );
            document.getElementById("frase").innerHTML = "EL numero romano de " + numero + " es: III "
    
            break;
        case 4:
            alert("EL numero romano de " + numero + " es: IV " );
            document.getElementById("frase").innerHTML = "EL numero romano de " + numero + " es: IV " 
    
            break;
        case 5:
            alert("EL numero romano de " + numero + " es: V " );
            document.getElementById("frase").innerHTML = "EL numero romano de " + numero + " es: V "

            break;
        case 6 :
            alert("EL numero romano de " + numero + " es: VI " );
            document.getElementById("frase").innerHTML = "EL numero romano de " + numero + " es: VI " 

            break;
        case 7 :
            alert("EL numero romano de " + numero + " es: VII " );
            document.getElementById("frase").innerHTML ="EL numero romano de " + numero + " es: VII "

        case 8 :
            alert("EL numero romano de " + numero + " es: VIII " );
            document.getElementById("frase").innerHTML ="EL numero romano de " + numero + " es: VIII " 

            break;

        case 9 :
            alert("EL numero romano de " + numero + " es: IX " );
            document.getElementById("frase").innerHTML = "EL numero romano de " + numero + " es: IX "

            break;

        case 10 :
            alert("EL numero romano de " + numero + " es: X " );
            document.getElementById("frase").innerHTML = "EL numero romano de " + numero + " es: X " 
        
            

    
        default:
            break;
    }


    
} else {

    alert("Ingrese un numero del 1 al 10");
    
}