import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from '../../services/load-scripts.service'; 

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private load_script:LoadScriptsService) { 
    load_script.load_files("nav");
  }

  ngOnInit(): void {}
}