import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-home',
  templateUrl: './input-home.component.html',
  styleUrls: ['./input-home.component.css']
})
export class InputHomeComponent implements OnInit {
  @Output() textPrint = new EventEmitter<any>();
  public text:string="";
  constructor() { }

  ngOnInit(): void {
  }
print(){
  console.log(this.text);
  this.textPrint.emit(this.text);
}
}
