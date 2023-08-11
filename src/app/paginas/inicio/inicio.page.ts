import { Component, HostListener, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


  constructor(public menu:MenuController) { }

  ngOnInit() {
  }
  llamarMenu(){
    this.menu.open("menuAct")
  }
}
