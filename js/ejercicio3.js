let edad;

contmayor =0;
contmenor = 0; 


cont = 1

while (cont<=20) {

    edad = Number(prompt("Ingrese la edad de la persona " + cont ));

    cont = cont +1;
    if (edad <=17) {
        document.write("La persona con la siguiente ",edad, " edad.  Es menor de edad", '<BR/>');

        alert("Es menor de edad");
        
        contmenor = contmenor +1;
        
    } else {
        document.write("La persona con la siguiente ",edad, " edad. Es mayor de edad", '<BR/>');

        alert("Es mayo de edad");
        contmayor = contmayor + 1;
        
    }
    
}

alert("El total de menores de edad de las 20 personas ingresadas es de : " + contmenor);
document.write("El total de menores de edad de las 20 personas ingresadas es de : " + contmenor , '<BR/>')

alert("El total de mayores de edad de las 20 personas ingresadas es de : " + contmayor);
document.write("El total de mayores de edad de las 20 personas ingresadas es de : " + contmayor , '<BR/>')
