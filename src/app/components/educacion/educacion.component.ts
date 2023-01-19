import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Educacion from '../../schema/educacion';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  protected acceso = (environment.sesion.edicion_permitida==false)? undefined : true;
  protected mensaje : any = undefined;
  protected title : string = 'AÑADIR EDUCACION';
  protected name_button : string = "REGISTRAR";
  protected educaciones = new Array<Educacion>();

  protected selectedEducacion : Educacion = this.Limpiar_educacion();

  constructor(private router:Router) { }

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

  protected Add_edit_educacion() : void{
    if(this.selectedEducacion.id_educacion == 0){
      this.selectedEducacion.id_educacion = this.educaciones.length + 1;
      this.educaciones.push(this.selectedEducacion);
      this.mensaje = 'Educacion registrada.';
    }else{
      this.mensaje = 'Educacion actualizada.';
    }
    this.selectedEducacion = this.Limpiar_educacion();
  }

  protected Edit_educacion(educacion:Educacion) : void{
    this.Reiniciar();
    this.title = this.Get_title(educacion.id_educacion);
    this.selectedEducacion = educacion;
  }

  protected Delete_educacion(id:number) : void {
    if(confirm("Estas seguro que deseas eliminar la educacion")){
      this.educaciones = this.educaciones.filter(i => i.id_educacion != id);
    }
  }

  private Get_title(id:number) : string {
    this.name_button = (id==0)? "REGISTRAR" : "ACTUALIZAR";
    return (id==0)? "AÑADIR EDUCACION" : "EDITAR EDUCACION";
  }

  private Limpiar_educacion() : Educacion{
    return {
      id_educacion : 0,
      institucion : "",
      carrera : "",
      fecha_inicio : "",
      fecha_fin : "",
      descripcion : "",
      url_imagen : ""
    }
  }

  protected Reiniciar_mensaje() : void{
    this.mensaje = undefined;
  }

  protected Reiniciar() : void{
    this.selectedEducacion = this.Limpiar_educacion();
    this.title = this.Get_title(0);
    this.mensaje = undefined;
  }
}