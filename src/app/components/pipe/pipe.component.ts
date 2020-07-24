import { Component, OnInit } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  public ValueInput:string="Demo Text";
  public PipeID:number=1;
  constructor() { }

  ngOnInit(): void {
  }
  changePipe(event){
    this.PipeID=event.target.value;
  }
}
