import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/app/services/load-scripts.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  protected items : number[] = [];

  constructor(private load_script:LoadScriptsService) { 
    load_script.load_files("inicio");
  }

  ngOnInit(): void {
    this.Instanciar_items();
  }
  private Instanciar_items() : void {
    for(let i = 0 ; i <= 20 ; i++){
      this.items.push(i);
    }
  }
}