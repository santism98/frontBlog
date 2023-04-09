const botones = document.querySelector("#botones");

let url = location.search;

let params = new URLSearchParams(url);

let pagina= params.get("page");


// EVENTOS

document.addEventListener("click", ({target}) => {
    
    if(target.matches("#mas")){
      pagina ++;
      pintarBotones(pagina);
      location.assign(`http://localhost:4000/?page=${pagina}`)
     
    };

    if(target.matches("#menos")){
      pagina --;
      pintarBotones(pagina);
      location.assign(`http://localhost:4000/?page=${pagina}`)
    };

    if(target.matches(".titulo")){
      location.assign(`http://localhost:4000/`)
    };
   
  });


  //FUNCIONES

    const pintarBotones = (pagina=1) => {


        botones.innerHTML = "";
    
        let botonFlechaMas = document.createElement("BUTTON");
        botonFlechaMas.id = "mas";
        botonFlechaMas.textContent = ">>";
    
        let botonUno = document.createElement("BUTTON");
        //botonUno.id = "pagina-actual"
        botonUno.textContent = pagina;
    
        let botonFlechaMenos = document.createElement("BUTTON");
        botonFlechaMenos.id = "menos";
        botonFlechaMenos.textContent = "<<";
    
        botones.append(botonFlechaMenos, botonUno, botonFlechaMas);
    
      };

      pintarBotones()

