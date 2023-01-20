import { Component, OnInit } from '@angular/core';
import Habilidad, { Estado, Tipo } from '../../schema/habilidad';

@Component({
  selector: 'app-habilidades-adicionales',
  templateUrl: './habilidades-adicionales.component.html',
  styleUrls: ['./habilidades-adicionales.component.css']
})
export class HabilidadesAdicionalesComponent implements OnInit {
  private habilidades : Habilidad[] = [];
  
  constructor() { }

  ngOnInit(): void {
    this.Instanciar_habilidades();
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
}