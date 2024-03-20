// ➡️➡️ MENÚ HAMBURGUESA CON EVENTLISTENER
// 📌 https://tuwebcreativa.com/menu-hamburguesa-html-css/

//Obtenemos botón hamburguesa por ID
const button_hamburguer = document.getElementById('hamburguer-button');

//Obtenemos menu hamburguesa por ID
const menu_hamburguer = document.getElementById('hamburguer-menu');

//Añadimos un evento de click al botón hamburguesa. Al hacer click hacemos visible el menú y cambiamos el background a azul
button_hamburguer.addEventListener('click',()=>{
    
  //Guardamos en una variable el display por defecto
    let menu_ham_display = menu_hamburguer.style.display;

  //Condición ternaria: menú invisible ? True-> hazlovisible : False -> dejalo invisible
  menu_ham_display = menu_ham_display === "flex" ? "none":"flex";

  //Guardamos en una variable el background por defecto

  let menu_ham_background = menu_hamburguer.style.backgroundImage;

  //Condición ternaria: menú invisible ? True-> fondo blanco : False -> fondo linear gradient to (negro, blanco, azul)

  menu_ham_background = menu_ham_display === "none" ? "white": "linear-gradient(to bottom, rgba(6, 7, 9, 1),rgba(148, 181, 245, 1), rgba(102, 144, 224, 1))";

  // Aplicamos los cambios al menú hamburguesa
  menu_hamburguer.style.display = menu_ham_display;
  menu_hamburguer.style.backgroundImage = menu_ham_background;
});

  //➡️➡️ OTRA FORMA DE HACER MENÚ HAMBURGUESA (toggle)
  //  📌 https://programandoen.com/html/como-hacer-un-menu-hamburguesa-en-html-y-css/

  // FORMA DE HACERLO AGRUPANDO POR FUNCIONES

//   //Función para hacer visible (block) el menú hamburguesa
// function displayBlock(){
//   menu_hamburguer.style.display = "block";
// }

// //Función para cambiar el fondo a azul
// function backBlue(){
//   menu_hamburguer.style.backgroundColor = "rgba(0, 87, 255, 1)";
// }

// //Función para hacer invisible el menú
// function displayNone(){
//   menu_hamburguer.style.display = "none";
// }
// //Función para cambiar el fondo a blanco
// function backNone(){
//   document.body.style.backgroundColor = "white";
// }
