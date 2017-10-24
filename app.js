var comparar = funcion(array1,array2){
  if (array1.length !== array2.length){
      document.write("Los arreglos son diferentes en longitud")
      return false;
    }
else {
  for (var i=0; i<array1.length; i++){
    if (array1[i]!==array2[i]){
      document.write("Los arreglos no son iguales")
      return false
    }
    else {
      document.write("Los arreglos son iguales")
      return true
    }
  }
}
}


var arreglo1=[1,2,3,4,5,6,7,8,9,0];
var arreglo2=[1,2,3,4,5,6,7,8,9,0];

comparar(arreglo1,array2);
