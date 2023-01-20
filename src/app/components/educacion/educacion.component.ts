import { Component, OnInit } from '@angular/core';
import Educacion from '../../schema/educacion';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  protected educaciones: Educacion[] = [];

  constructor() { }

  ngOnInit(): void {
    this.Instanciar_educaciones();
  }

  private Instanciar_educaciones() : void {
    this.educaciones = [
      {
        id_educacion : 1,
        institucion : "Escuela Media de la Tuna",
        carrera : "Produccion de bienes y servicios",
        fecha_inicio : "2011-03-05",
        fecha_fin : "2017-12-20",
        url_imagen : "../../../assets/images/Escuela_media.jpg",
        descripcion :"Bachillerato"
      },
      {
        id_educacion : 2,
        institucion : "Universidad Tecnologia Nacional (UTN)",
        carrera : "Ingenieria en sistemas de informacion",
        fecha_inicio : "2018-03-01",
        fecha_fin : "Actualmente",
        url_imagen : "../../../assets/images/Logo_utn.jpg",
        descripcion : "Estudiante avanzado y becario, en diferentes ocaciones he ofrecido mi ayuda a chicos que tenian problemas en la programacion esto sin pedir nada acambio, ya que para mi siempre es un placer programar."
      }
    ];
  }
}