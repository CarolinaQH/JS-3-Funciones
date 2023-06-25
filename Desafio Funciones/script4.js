

document.addEventListener('keydown', function (event) {

    /*preguntar si la tecla es = a la letra a
en la variable se guarda, lo buscamos por id con clave key*/

    if (event.key === 'a') {
         color = "pink"
         document.getElementById("key").style.backgroundColor = color;
    } 
    else if (event.key === 's') {
        color = "orange"
        document.getElementById("key").style.backgroundColor = color;
    }
    else if (event.key === 'd') {
        color = "skyblue"
        document.getElementById("key").style.backgroundColor = color;
    }

    else if (event.key === 'q') {
        color = "purple"
        document.getElementById("nuevo").style.backgroundColor = color;
   } 
   else if (event.key === 'w') {
       color = "grey"
       document.getElementById("nuevo").style.backgroundColor = color;
   }
   else if (event.key === 'e') {
       color = "brown"
       document.getElementById("nuevo").style.backgroundColor = color;

   }


});
