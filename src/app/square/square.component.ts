import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  valuesList:any[]=[];
  value!:string;
  constructor() { }

  ngOnInit(): void {
  }

  onChage(value:string){
    this.value=value;
    this.valuesList.push(value);
  }
}
