import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import Habilidad, { Estado, Tipo } from '../../schema/habilidad';
import Persona from '../../schema/persona';

import { LoadScriptsService } from '../../services/load-scripts.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {
  protected acceso = (environment.sesion.edicion_permitida==false)? undefined : true;
  protected mensaje : any = undefined;
  protected presentacion : Persona = this.Limpiar_presentacion();
  protected tecnologias = new Array<Habilidad>();

  constructor(private load_script:LoadScriptsService) { 
    load_script.load_files("theme");
  }

  ngOnInit(): void {
    this.Instanciar_tecnologias_de_manejo_actual();
    this.Instanciar_presentacion();
  }

  private Instanciar_presentacion() : void {
    this.presentacion = {
      id_persona : 1,
      nombre : "Ricardo Nicolas Alejo",
      apellido : "Beltran",
      telefono : "386567XXXX",
      correo : "ricardonicolasxxxxxxx@gmail.com",
      link_perfil : "../../../assets/images/perfil.jpg",
      direccion : "Simoca - Tucumán (Argentina)",
      presentacion : "Hola mi nombre es Alejo y me apasiona crear aplicaciones ya sean para la web o aplicaciones deskatop. Mi interes en la programacion surgio cuando comence una carrera universitaria donde pude adentrarme a este mundo tan increible donde dejas que tu imaginacion te diga como programar.",
      regla : "Algunas de mis reglas al momento de realizar cualquier tipo de sistema es tener muy en cuenta el rendimiento la escalabilidad y la personalizacion entre otros parametros que influyen en la optencion de un sistema de calidad. La calidad esta en el detalle.",
      profesion : "Programador Web Full Stack"
    }
  }
  private Instanciar_tecnologias_de_manejo_actual() : void {
    this.tecnologias = [
      {
        id_habilidad : 1,
        nombre : "HTML5", 
        porcentaje : 80,
        nombre_icono: "",
        tipo : Tipo.tecnica,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 2,
        nombre : "CSS3", 
        porcentaje : 75,
        nombre_icono: "",
        tipo : Tipo.tecnica,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 3,
        nombre : "JavaScript", 
        porcentaje : 70,
        nombre_icono: "",
        tipo : Tipo.tecnica,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 4,
        nombre : "Java", 
        porcentaje : 90,
        nombre_icono: "",
        tipo : Tipo.tecnica,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 5,
        nombre : "MySQL", 
        porcentaje : 95,
        nombre_icono: "",
        tipo : Tipo.tecnica,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 6,
        nombre : "MongoDB", 
        porcentaje : 55,
        nombre_icono: "",
        tipo : Tipo.tecnica,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 7,
        nombre : "React", 
        porcentaje : 80,
        nombre_icono: "",
        tipo : Tipo.tecnica,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 8,
        nombre : "Bootstrap", 
        porcentaje : 70,
        nombre_icono: "",
        tipo : Tipo.tecnica,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 9,
        nombre : "Next.js", 
        porcentaje : 75,
        nombre_icono: "",
        tipo : Tipo.tecnica,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 10,
        nombre : "Angular", 
        porcentaje : 70,
        nombre_icono: "",
        tipo : Tipo.tecnica,
        estado : Estado.uso_actual
      }
    ];
  }

  protected Actualizar_presentacion() : void{
    this.mensaje = "PRESENTACION LISTA.";   
  }

  private Limpiar_presentacion() : Persona{
    return {
      id_persona : 0,
      nombre : "",
      apellido : "",
      telefono : "",
      correo : "",
      link_perfil : "",
      direccion : "",
      presentacion : "",
      regla : "",
      profesion : ""
    }
  }
}