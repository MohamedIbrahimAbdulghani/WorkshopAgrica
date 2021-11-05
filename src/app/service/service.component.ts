import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor() { }

  numofplus: number = 0 ;
  numofplusstop: any = setInterval(() => {
    this.numofplus++;
    if(this.numofplus == 20) {
      clearInterval(this.numofplusstop);
    }
  }, 150);

  numofk: number = 0 ;
  numofkstop: any = setInterval(() => {
    this.numofk++;
    if(this.numofk == 10) {
      clearInterval(this.numofkstop);
    }
  }, 150);

  numofplus2: number = 0 ;
  numofplusstop2: any = setInterval(() => {
    this.numofplus2++;
    if(this.numofplus2 == 20) {
      clearInterval(this.numofplusstop2);
    }
  }, 150);

  numbers: number = 0 ;
  numbersstop: any = setInterval(() => {
    this.numbers++;
    if(this.numbers == 280) {
      clearInterval(this.numbersstop);
    }
  }, 50);

  ngOnInit(): void {
  }

}
