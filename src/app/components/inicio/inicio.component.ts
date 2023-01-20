import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  protected items : number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.Instanciar_items();
  }
  private Instanciar_items() : void {
    for(let i = 0 ; i <= 20 ; i++){
      this.items.push(i);
    }
  }
}
