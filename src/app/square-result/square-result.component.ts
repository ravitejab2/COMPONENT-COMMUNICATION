import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-square-result',
  templateUrl: './square-result.component.html',
  styleUrls: ['./square-result.component.css']
})
export class SquareResultComponent implements OnInit {

  @Input()
  parentData:string=" ";
  value:number=0;
  
  @Output() childData = new EventEmitter<string>();
  constructor() {
    
   }
  
  ngOnInit(): void {   
    
    
  }

  ngOnChanges():void{
    this.value=parseInt(this.parentData);
    this.parentData = (this.value* this.value).toString();
  }

  onSave(){
    this.childData.emit(this.parentData);
  }

  
  
}
