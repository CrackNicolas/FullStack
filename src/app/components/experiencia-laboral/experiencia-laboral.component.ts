import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import Experiencia_laboral from '../../schema/experiencia_laboral';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})

export class ExperienciaLaboralComponent implements OnInit {
  protected acceso = (environment.sesion.edicion_permitida==false)? undefined : true;
  protected mensaje : any = undefined;
  protected title : string = 'AÑADIR EXPERIENCIA';
  protected name_button : string = "REGISTRAR";
  protected experiencias_laborales = new Array<Experiencia_laboral>();
  protected selectedExperiencia : Experiencia_laboral = this.Limpiar();

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

  protected Add_edit_experiencia() : void{
    if(this.selectedExperiencia.id_experiencia == 0){
      this.selectedExperiencia.id_experiencia = this.experiencias_laborales.length + 1;
      this.experiencias_laborales.push(this.selectedExperiencia);
      this.mensaje = 'Experiencia registrada.';
    }else{
      this.mensaje = 'Experiencia actualizada.';
    }
    this.selectedExperiencia = this.Limpiar();
  }

  protected Edit_experiencia(experiencia:Experiencia_laboral) : void{
    this.title = this.Get_title(experiencia.id_experiencia);
    this.selectedExperiencia = experiencia;
  }

  protected Delete_experiencia(id:number) : void{
    if(confirm("Estas seguro que deseas eliminar la experiencia")){
      this.experiencias_laborales = this.experiencias_laborales.filter(i => i.id_experiencia != id);
    }
  }

  private Limpiar() : Experiencia_laboral{
    return {
      id_experiencia : 0,
      empresa : "",
      puesto : "",
      fecha_inicio : "",
      fecha_fin : "",
      url_imagen : "",
      descripcion : ""
    }
  }

  private Get_title(id:number) : string {
    this.name_button = (id==0)? "REGISTRAR" : "ACTUALIZAR";
    return (id==0)? "AÑADIR EXPERIENCIA" : "EDITAR EXPERIENCIA";
  }

  protected Reiniciar() : void{
    this.selectedExperiencia = this.Limpiar();
    this.title = this.Get_title(0);
    this.mensaje  = undefined;
  }
}