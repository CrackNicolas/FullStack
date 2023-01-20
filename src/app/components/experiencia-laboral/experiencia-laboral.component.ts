import { Component, OnInit } from '@angular/core';
import Experiencia_laboral from '../../schema/experiencia_laboral';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})

export class ExperienciaLaboralComponent implements OnInit {
  protected experiencias_laborales : Experiencia_laboral[] = [];
  
  constructor() { }

  ngOnInit(): void {
    this.Instanciar_experiencias_laborales();
  }

  private Instanciar_experiencias_laborales() : void {
    this.experiencias_laborales = [
      {
        id_experiencia : 1,
        empresa : "Ferreteria Bremen",
        puesto : "Empleado de mantenimiento del sistema",
        descripcion : "Trabaje usando el lenguaje de programacion Java y una base de datos MySql, para la administracion de la base de datos se uso Worbench y para la parte de Java se uso el IDE Apache NetBeans.",
        fecha_inicio : "2019-06-12",
        fecha_fin : "2021-11-23",
        url_imagen : "../../../assets/images/Logo-bremen.png"
      },
      {
        id_experiencia : 2,
        empresa : "Empresa de control de calidad de calzados",
        puesto : "Programador de logistica",
        descripcion : "Trabaje usando tecnologias como HTML5 con el motor de plantillas handlebars, CSS3 con el Framework Tailwind y JavaScript con el Framework Express.js.",
        fecha_inicio : "2022-01-11",
        fecha_fin : "2022-12-10",
        url_imagen : "../../../assets/images/Logo-inspeccionar_de_calzados.webp"
      }
    ];
  }
}