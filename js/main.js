
function inversion(){

    // CAPTURAMOS LOS VALORES DEL FORMULARIO 
    let cNombres = document.getElementById("nombres").value;
    let cTelefono = document.getElementById("telefono"). value;
    let cEmail = document. getElementById("email").value;
    let cMonto = document. getElementById("inversion").value;
    let cTiempo = document. getElementById("tiempo").value;

    // CAPTURAMOS LOS CONTENEDORES PRE-SIMULATION Y POST-SIMULATION
    let contPre = document.querySelector(".pre-simulation");
    let contPost = document. querySelector(".post-simulation");

    // CAPTURAMOS LOS ESPACIOS 
    let sNombre = document.getElementById("nombres-show");
    let sEmail = document.getElementById("email-show");
    let sInteres = document.getElementById ("interes-show");
    let sTiempo = document.getElementById ("tiempo-show");
    let sTotal = document.getElementById("total-show");
    let sGanancia = document.getElementById("ganancia-show");
    
   
    
    // MOSTRAMOS Y OCULTAMOS EL PANEL DE LA DERECHA
    contPost.classList.remove("disabled");
    contPre.classList.add("disabled");

    // MOSTRAMOS LOS DATOS DEL USUARIO 
    sNombre.innerHTML=(cNombres);
    sEmail.innerHTML =(cEmail);
  
    
      
      console.log("¿Hay algo más que te quisiera consultar?");

      sTiempo.innerHTML = (cTiempo);
         

      switch (cTiempo) {
        case '1':
          sTiempo.innerText="12 MESES";
          sInteres.innerText="0.8%";
    
          gana=(cMonto*0.008);
          totall=parseFloat(gana)+parseFloat(cMonto);
    
          sTotal.innerHTML=(totall*12);
          sGanancia.innerHTML=(gana*12);
    
          break;
        case '2':
          sTiempo.innerText="24 MESES";
          sInteres.innerText="1.3%";
    
          
          gana=((cMonto*1.3)/100);
          totall=parseFloat(gana)+parseFloat(cMonto);
    
          sTotal.innerHTML=(totall*24);
          sGanancia.innerHTML=(gana*24);
    
          break;
        case '3':
           sTiempo.innerText="36 MESES";
           sInteres.innerText="1.7%";
    
           
          gana=((cMonto*1.7)/100);
          totall=parseFloat(gana)+parseFloat(cMonto);
    
          sTotal.innerHTML=(totall*36);
          sGanancia.innerHTML=(gana*36);
    
           break;
        }
      
      }
    // UTILIZAMOS UN SWITH PARA CAMBIAR EL TIEMPO Y EL INTERES SEGUN LOS AÑOS SEECCIONADOS POR USUARIO
    


 // alert ("Bievenido usuario "+ cNombres + "su telefono es "+ cTelefono);
    // console.log("Bievenido usuario " + cNombres+ "su telefono es "+ cTelefono);


// let contador = 100;

//     while (contador > 0) {
//         console.log(contador);
//         contador = contador -1 ;
        
//     } 



