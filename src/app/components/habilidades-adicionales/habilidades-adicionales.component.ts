import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';

import { LoadScriptsService } from '../../services/load-scripts.service';
import Habilidad, { Estado, Tipo } from '../../schema/habilidad';

@Component({
  selector: 'app-habilidades-adicionales',
  templateUrl: './habilidades-adicionales.component.html',
  styleUrls: ['./habilidades-adicionales.component.css']
})
export class HabilidadesAdicionalesComponent implements OnInit {
  protected acceso = (environment.sesion.edicion_permitida==false)? undefined : true;
  protected mensaje:any = undefined;
  protected title : string = "AÑADIR HABILIDAD";
  protected name_button : string = "REGISTRAR";
  private habilidades = new Array<Habilidad>();
  
  protected selectedHabilidad = this.Limpiar();
  protected selectedEstado = Estado;
  protected selectedTipo = Tipo;

  protected modal_peticion = "add-habilidad-adicional";

  constructor(private load_script:LoadScriptsService) { 
    load_script.load_files("slider_control");
  }

  ngOnInit(): void {
    this.Instanciar_habilidades();
  }

  protected Ver_icono(name_icon:string) : void{
    this.selectedHabilidad.nombre_icono = name_icon;
  }

  protected Get_habilidades_blandas() {
    return this.habilidades.filter(i => i.tipo == Tipo.blanda);
  }

  protected Get_habilidades_gestion_de_proyectos() {
    return this.habilidades.filter(i => i.tipo == Tipo.gestion_de_proyecto);
  }

  protected Get_habilidades_control_de_versiones() {
    return this.habilidades.filter(i => i.tipo == Tipo.controlador_de_versiones);
  }

  private Instanciar_habilidades() : void {
    this.habilidades = [
      {
        id_habilidad : 1, 
        nombre : "Git", 
        porcentaje : 90,
        nombre_icono : "icono_git",
        tipo : Tipo.controlador_de_versiones,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 2, 
        nombre : "GitHub", 
        porcentaje : 93,
        nombre_icono : "icono_git",
        tipo : Tipo.controlador_de_versiones,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 3, 
        nombre : "Jira", 
        porcentaje : 80,
        nombre_icono : "icono_jira",
        tipo : Tipo.gestion_de_proyecto,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 4, 
        nombre : "Trello", 
        porcentaje : 60,
        nombre_icono : "icono_trello",
        tipo : Tipo.gestion_de_proyecto,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 5, 
        nombre : "Creatividad", 
        porcentaje : 90,
        nombre_icono : "icono_creatividad",
        tipo : Tipo.blanda,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 6, 
        nombre : "Pensamiento crítico", 
        porcentaje : 75,
        nombre_icono : "icono_pensamiento_critico",
        tipo : Tipo.blanda,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 7, 
        nombre : "Resolver problemas", 
        porcentaje : 80,
        nombre_icono : "icono_resolver_problema",
        tipo : Tipo.blanda,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 8, 
        nombre : "Trabajo en equipo", 
        porcentaje : 70,
        nombre_icono : "icono_trabajo_en_equipo",
        tipo : Tipo.blanda,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 9, 
        nombre : "Comunicación", 
        porcentaje : 100,
        nombre_icono : "icono_comunicacion",
        tipo : Tipo.blanda,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 10, 
        nombre : "Fuerza de voluntad", 
        porcentaje : 100,
        nombre_icono : "icono_fuerza_de_voluntad",
        tipo : Tipo.blanda,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 11, 
        nombre : "Autodidacta", 
        porcentaje : 100,
        nombre_icono : "icono_autodidacta",
        tipo : Tipo.blanda,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 12, 
        nombre : "Sociabilidad", 
        porcentaje : 100,
        nombre_icono : "icono_sociabilidad",
        tipo : Tipo.blanda,
        estado : Estado.uso_actual
      },
      {
        id_habilidad : 13, 
        nombre : "Inteligencia emocional", 
        porcentaje : 85,
        nombre_icono : "icono_inteligencia_emocional",
        tipo : Tipo.blanda,
        estado : Estado.uso_actual
      }
    ];
  }

  protected Add_edit_habilidad_adicional() : void {
    if(this.selectedHabilidad.id_habilidad == 0){
      this.selectedHabilidad.estado = Estado.uso_actual;
      this.selectedHabilidad.id_habilidad = this.habilidades.length + 1;
      this.habilidades.push(this.selectedHabilidad);
      this.mensaje = 'Habilidad registrada.';
    }else{
      this.mensaje = 'Habilidad actualizada.';
    }
    this.selectedHabilidad = this.Limpiar();
  }

  protected Edit_habilidad(habilidad:Habilidad) : void {
    this.title = this.Get_title(habilidad.id_habilidad);
    this.selectedHabilidad = habilidad;
  }

  protected Delete_habilidad(id:number) : void {
    if(confirm("Estas seguro que deseas eliminar la habilidad")){
      this.habilidades = this.habilidades.filter(i => i.id_habilidad != id);
    }
  }

  private Get_title(id:number) : string {
    this.name_button = (id==0)? "REGISTRAR" : "ACTUALIZAR";
    return (id==0)? "AÑADIR HABILIDAD" : "EDITAR HABILIDAD";
  }

  private Limpiar() : Habilidad{
    return {
      id_habilidad : 0,
      nombre : '',
      porcentaje : 0,
      nombre_icono : "",      
      tipo : Tipo.blanda,
      estado : Estado.uso_actual
    }
  }

  protected Reiniciar() : void{
    this.selectedHabilidad = this.Limpiar();
    this.title = this.Get_title(0);
    this.mensaje  = undefined;
  }


}