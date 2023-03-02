import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.scss']
})
export class ConversorComponent implements OnInit {
  cantidad = 0;
  tengo = '$';
  quiero ='€';
  total = 0;

  monedas: string[] = ['$','€','Libra']
  constructor() { }

  ngOnInit(): void {
  }
 convertir () {
  switch(this.tengo)  {
    case '€':
      if(this.tengo === '€'){
        this.total = this.cantidad;
      }
      if(this.quiero === '$'){
        this.total = this.cantidad * 1.05
      }
      if (this.quiero === 'Libra') {
        this.total = this.cantidad * 0.86
      }
      //
      break;
      case '$':
             if (this.tengo === '$') {
               this.total = this.cantidad;
             }
             if (this.quiero === '€') {
               this.total = this.cantidad * 1.05;
             }
             if (this.quiero === 'Libra') {
               this.total = this.cantidad * 0.81;
             }
        break;
        case 'Libra':
              if (this.tengo === 'Libra') {
                this.total = this.cantidad;
              }
              if (this.quiero === '$') {
                this.total = this.cantidad * 0.81;
              }
              if (this.quiero === '€') {
                this.total = this.cantidad * 1.17;
              }
          break;

  }
 }
}
