import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mariscos',
  templateUrl: './mariscos.page.html',
  styleUrls: ['./mariscos.page.scss'],
})
export class MariscosPage implements OnInit {
  isFlipped = false;
  isFlipped2 = false;

  flipCard() {
    this.isFlipped = !this.isFlipped;
  }

  flipCard2() {
    this.isFlipped2 = !this.isFlipped2;
  }

  constructor() { }

  ngOnInit() {
  }

}
