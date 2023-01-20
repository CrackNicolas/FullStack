import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from '../../services/load-scripts.service';
import Proyecto from '../../schema/proyecto';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
 protected proyectos : Proyecto[] = [];

  constructor(private load_script:LoadScriptsService) { 
    load_script.load_files("swiper_proyecto");
  }

  ngOnInit(): void {
    this.Instanciar_proyectos();
  }

  private Instanciar_proyectos() : void {
    this.proyectos = [
      {
        id_proyecto : 1,
        nombre : "Control de calidad",
        url_imagen : "../../../assets/images/Control_de_calidad.png",
        descripcion : "App web, fabrica de sapatillas con lineas de produccion donde se crean ordenes de produccion con un modelo y color las lineas tienen supervisores de linea y de calidad para que estos realizar el control de calidad de los calzados y notifiquen incidencias en los pares.",
        tecnologias_usadas : "JavaScript, Mysql, CSS3, HTML5, Tailwind, HandleBards",
        link_git : "https://github.com/"
      },
      {
        id_proyecto : 2,
        nombre : "Parser",
        url_imagen : "../../../assets/images/Parser.png",
        descripcion : "App de escritorio, GUI que cuenta con un analizador lexico y sintactico y una seccion donde podemos ingresar una consulta sql, luego de ejecutar el sistema nos devolvela el analisis del analizador lexico y sintactico seguido de un mansaje de si nuestra consulta es valida.",
        tecnologias_usadas : "Java, java-cup, java-cup-11a, Jflex",
        link_git : "https://github.com/"
      },
      {
        id_proyecto : 3,
        nombre : "Clasical Model",
        url_imagen : "../../../assets/images/Clasical_model.png",
        descripcion : "App de escritorio, consiste en la administracion de una empresa que cuenta con pedidos de productos, y toda la administracion de las oficinas de la empresa.",
        tecnologias_usadas : "Java, Mysql",
        link_git : "https://github.com/"
      },
      {
        id_proyecto : 4,
        nombre : "Juego pong",
        url_imagen : "../../../assets/images/Juego_pong.png",
        descripcion : "App de escritorio, tablero con 7 let 2 botones en cada extremo, las luces se encienden con un color azul hasta llegar al extremo y el ultimo let se mantiene en color verde durante un 1s hasta que el jugador presione el boton, si el jugador no presiona el boton antes de tiempo el let cambia a rojo.",
        tecnologias_usadas : "Arduino",
        link_git : "https://github.com/"
      },
      {
        id_proyecto : 5,
        nombre : "Analizador lexico",
        url_imagen : "../../../assets/images/Analizador_lexico.png",
        descripcion : "App de escritorio, na de las soluciones fue usando grafos y la otra fue usando solo codigo basico, consiste en ingresar o seleccionar un archivo con una porcion de codigo, y al ejecutarlo nos devolvera una lista indicando los tokens.",
        tecnologias_usadas : "C, C++",
        link_git : "https://github.com/"
      },
      {
        id_proyecto : 6,
        nombre : "Editorial de libros",
        url_imagen : "../../../assets/images/Editorial_de_libros.png",
        descripcion : "App de escritorio, consiste en la administracion de una editorial de libros, que ademas implementa la validacion y uso de ISBNS. Y administracion de libros con su autores correspondientes.",
        tecnologias_usadas : "C, C++",
        link_git : "https://github.com/"
      },
      {
        id_proyecto : 7,
        nombre : "Fabrica",
        url_imagen : "../../../assets/images/Control_de_calidad_next.png",
        descripcion : "App web, consiste en la administracion de una fabrica de zapatillas.",
        tecnologias_usadas : "Next.js, Axios, TypeScript, Mysql, Tailwind, CSS3, HTML5",
        link_git : "https://github.com/"
      },
      {
        id_proyecto : 8,
        nombre : "Quiz de preguntas",
        url_imagen : "../../../assets/images/Formulario_de_preguntas.png",
        descripcion : "App web, consiste en un formulario de preguntas multiusuario. Las cuales se incrementan progresivamente.",
        tecnologias_usadas : "React, Axios, Mysql, CSS3, HTML5",
        link_git : "https://github.com/"
      },
      {
        id_proyecto : 9,
        nombre : "Bremen",
        url_imagen : "../../../assets/images/Bremen.png",
        descripcion : "App de escritorio, esta enfocado en la administracion de una ferreteria que cuenta con recursos humanos, compras, ventas, y pago de sueldos, tambien nos presenta todo tipo de reportes.",
        tecnologias_usadas : "Java, Mysql",
        link_git : "https://github.com/"
      },
      {
        id_proyecto : 10,
        nombre : "Pinterest",
        url_imagen : "../../../assets/images/Pinterest.png",
        descripcion : "App web en donde se puede realizar la gestion de imagenes al estilo pinterest y algun otro detalle que yo agregue.",
        tecnologias_usadas : "JavaScript, Express.js, MongoDB, EJS, HandleBards, Bootstrap, CSS3, HTML5",
        link_git : "https://github.com/"
      },
      {
        id_proyecto : 11,
        nombre : "Portafolio V1.0",
        url_imagen : "../../../assets/images/Pinterest.png",
        descripcion : "App web, esta fue uno de los portafolios que deje a mitad de camino, en otras palabras seria la primera version de mi portafolio.",
        tecnologias_usadas : "JavaScript, CSS3, HTML5",
        link_git : "https://github.com/"
      },
      {
        id_proyecto : 12,
        nombre : "ABM usuarios",
        url_imagen : "../../../assets/images/Administracion_de_usuarios.png",
        descripcion : "App web de administracion de usuarios, con seguridad para evitar ataques como XSS, CSRF, SQL INJECTION, CODE INJECTION, BRUTE FORCE ROBOTS tambien incluye SSL y el archivo .htaccess",
        tecnologias_usadas : "PHP, Mysql, PDO, crypt, CSS3, HTML5",
        link_git : "https://github.com/"
      }
    ];
  }
}