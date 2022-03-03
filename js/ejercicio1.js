let articulo;
let cantidad;
let precio;
let precio1;
let descuento;
let preciofinal;

articulo = prompt("Ingrese el nombre del productoa llevar");
cantidad = Number(prompt("Ingrese la cantidad del producto a llevar"));
precio =  Number(prompt("Ingrese el valor de precio unitario"));

document.getElementById("articulo").innerHTML = "El producto ingresado es : " + articulo;
document.getElementById("cantidad").innerHTML = "La cantidad de productos que se va a llevar es de : " + cantidad;
document.getElementById("precio").innerHTML = "El precio unitario del producto es : " + precio;


precio1= precio * cantidad;


if (cantidad <=100 & cantidad >=1) {

    alert("Se le hara un descuento del 2%");
    document.getElementById("frase").innerHTML = "Se le hara un descuento del 2%";
    
    alert(precio1)
    descuento= precio1 * 0.2;
    document.getElementById("descuento").innerHTML = "Su descuento es de " + descuento;
    preciofinal = precio1 - descuento;
    
} else {
    if (cantidad >=100.01 & cantidad <=250) {

        alert("Se le hara un descuento del 5%");
        document.getElementById("frase").innerHTML = "Se le hara un descuento del 5%";
        
        descuento= precio1 * 0.5;
        document.getElementById("descuento").innerHTML = "Su descuento es de " + descuento +"$";
        preciofinal = precio1 - descuento;
        
    } else {
        if (cantidad >= 250.01 & cantidad <= 800) {

            alert("Se le hara un descuento del 8%");

            document.getElementById("frase").innerHTML = "Se le hara un descuento del 8%";
            descuento= precio1 * 0.8;
            document.getElementById("descuento").innerHTML = "Su descuento es de " + descuento;
             
            preciofinal = precio1 - descuento;
            
        } else {
            if (cantidad >=800 ) {

                alert("Se le hara un descuento del 12%");
                document.getElementById("frase").innerHTML = "Se le hara un descuento del 12%";

                descuento= precio1 * 1.2;
                document.getElementById("descuento").innerHTML = "Su descuento es de " + descuento;
                preciofinal = precio1 - descuento;
                
            }
            
        }

        
        
    }
    
    
}


alert("El precio final de su compra de: " + articulo + " ,con la cantidad de: " + cantidad + " es de : " + preciofinal +"$");
document.getElementById("fin").innerHTML = "El precio final de su compra de: " + articulo + " ,con la cantidad de: " + cantidad + " es de : " + preciofinal +"$";